export const Post = () => {
    return <button onClick={() => {
        // prmite traer datos
        //cuando termine de recibir todos los datos (mediante una promesa then) se van a convertir a un este response a un formato json y lugo reien vas a resivir los datos
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
    }}>
        traer datos
    </button>

}