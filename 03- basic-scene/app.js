//console.log(THREE);

// 4 elements to create a scene 
// A scene will contain objects
// Some Objects
// A camera
// A renderer


//Scene
const scene = new THREE.Scene()

//Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: "#ff0000"})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Sizes
const sizes = {
    width: 800,
    height: 600
}

//Camera
// Add paramaters of Field of view, Aspect Ratio, Renderer 
//fov
//  width of the render divided by height of the render 
//Render scene from the camera POV
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)

camera.position.z = 3
camera.position.x = 2
camera.position.y = 0


//Renderer
const canvas = document.querySelector(".webgl")
console.log(canvas);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

