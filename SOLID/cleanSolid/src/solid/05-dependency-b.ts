// import { LocalDataBaseService } from "./05-dependency-c"; //! Bad way

import { PostProvider } from "./05-dependency-c";

export interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    // ? aplicando liskov
    //? aplicando inyeccion de dependencia
    constructor(private postProvider: PostProvider) { }


    async getPosts() {
        // const jsonDB = new LocalDataBaseService(); //! bad way

        //? aplicando composicion versus herencia
        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}