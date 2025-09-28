use bevy::prelude::*;

// TODO instead of creating new vecs set the fields directly i think it's better for performance

fn setup(mut commands: Commands) {
    commands.spawn(Camera2d);
}

pub struct DrawablePlugin;

#[derive(Component)]
struct Drawable {
    xp: f32, // X position as percent of window width (-1.0 to 1.0, where 0 = center)
    yp: f32, // Y position as percent of window height (-1.0 to 1.0, where 0 = center)
    vp: f32, // Vertical percent of window height (0.0 to 1.0)
    hp: f32, // Horizontal percent of window width (0.0 to 1.0)
}

fn setup_drawable(
    mut commands: Commands,
    mut meshes: ResMut<Assets<Mesh>>,
    mut materials: ResMut<Assets<ColorMaterial>>,
) {
    // Agent/Code view
    commands.spawn((
        Drawable {
            xp: -0.25, // Position to left quarter (-1/4 of window width)
            yp: 0.0,   // Center vertically (0% of window height)
            vp: 1.0,   // Full height (100% of window)
            hp: 0.5,   // Half width (50% of window)
        },
        Mesh2d(meshes.add(Rectangle::new(1.0, 1.0))),
        MeshMaterial2d(materials.add(Color::hsl(30.0, 0.5, 0.5))),
        Transform::default(),
    ));

    // Document/Visualization View
    commands.spawn((
        Drawable {
            xp: 0.75, // Position to left quarter (-1/4 of window width)
            yp: 0.0,  // Center vertically (0% of window height)
            vp: 1.0,  // Full height (100% of window)
            hp: 0.5,  // Half width (50% of window)
        },
        Mesh2d(meshes.add(Rectangle::new(1.0, 1.0))),
        MeshMaterial2d(materials.add(Color::hsl(225.0, 0.04, 0.18))),
        Transform::default(),
    ));
}

fn update_drawable(mut query: Query<(&mut Transform, &Drawable)>, windows: Query<&Window>) {
    let window = match windows.single() {
        Ok(w) => w,
        Err(_e) => {
            println!("Window wasn't available when updating drawable. Skipping update");
            return;
        }
    };

    for (mut transform, drawable) in query.iter_mut() {
        // Calculate size based on percentages of window dimensions
        let width = window.width() * drawable.hp; // hp = horizontal percent
        let height = window.height() * drawable.vp; // vp = vertical percent

        // Calculate positions from percentages of window dimensions
        let x_position = window.width() * drawable.xp; // xp = x percent of window width
        let y_position = window.height() * drawable.yp; // yp = y percent of window height

        // Set the scale and position
        transform.scale = Vec3::new(width, height, 0.0);
        transform.translation = Vec3::new(x_position, y_position, 0.0);
    }
}

impl Plugin for DrawablePlugin {
    fn build(&self, app: &mut App) {
        app.add_systems(Startup, setup_drawable);
        app.add_systems(Update, update_drawable);
    }
}

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_plugins(DrawablePlugin)
        .add_systems(Startup, setup)
        .run();
}
