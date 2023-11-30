import { PostService } from './05-dependency-b';
import { LocalDataBaseService, JsonDataBaseService, WebApiPostService } from './05-dependency-c';


// Main
(async () => {

    //? Ahora podemos seleccionar el servicio que mas nos convenga para obtener los posts aplicando SOLID y Clean Code.
    // const provider = new LocalDataBaseService();
    // const provider = new JsonDataBaseService();
    const provider = new WebApiPostService();
    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();