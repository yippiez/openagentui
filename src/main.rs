use bevy::prelude::*;

// TODO use if let some and check how and why that works
// TODO use a generic drawable for drawing of rectangles ETC
// TODO instead of creating new vecs set the fields directly i think it's better for performance

fn setup(mut commands: Commands) {
    commands.spawn(Camera2d);
}

pub struct CodeViewPlugin;

#[derive(Component)]
struct CodeView;

fn setup_codeview(
    mut commands: Commands,
    mut meshes: ResMut<Assets<Mesh>>,
    mut materials: ResMut<Assets<ColorMaterial>>,
    windows: Query<&Window>,
) {
    let window = match windows.single() {
        Ok(w) => w,
        Err(_e) => {
            println!(
                "Window wasn't available when loading the code view. Skipping setting height in setup"
            );
            return;
        }
    };

    let width = window.width() / 2.0;
    let height = window.height();

    // Position to the left half of the screen
    // x = -window.width() / 4.0 centers the left half panel
    let x_position = -window.width() / 4.0;

    commands.spawn((
        CodeView,
        Mesh2d(meshes.add(Rectangle::new(1.0, 1.0))),
        MeshMaterial2d(materials.add(Color::hsl(30.0, 0.5, 0.5))),
        Transform::from_xyz(x_position, 0.0, 0.0).with_scale(Vec3::new(width, height, 0.0)),
    ));
}

fn update_codeview(query: Query<&mut Transform, With<CodeView>>, windows: Query<&Window>) {
    let window = match windows.single() {
        Ok(w) => w,
        Err(_e) => {
            println!(
                "Window wasn't available when updating the code view. Skipping setting height in update"
            );
            return;
        }
    };

    let width = window.width() / 2.0;
    let height = window.height();

    // Position to the left half of the screen
    // x = -window.width() / 4.0 centers the left half panel
    let x_position = -window.width() / 4.0;

    for mut transform in query {
        transform.scale = Vec3::new(width, height, 0.0);
        transform.translation = Vec3::new(x_position, 0.0, 0.0);
    }
}

impl Plugin for CodeViewPlugin {
    fn build(&self, app: &mut App) {
        app.add_systems(Startup, setup_codeview);
        app.add_systems(Update, update_codeview);
    }
}

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_plugins(CodeViewPlugin)
        .add_systems(Startup, setup)
        .run();
}
