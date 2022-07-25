import { useEffect, useState } from "react";
import PostService from "../services/PostService";

function Posts() {
    const [posts, setPosts] = useState<any[]>([])

    useEffect(() => {
        PostService.getPosts().then((res) => {
            setPosts(res.data)
        })
    }, []);

    let allPosts = posts.map(post => {
            var link = `/dashboard/edit/${post.id}`;
            return(
                <a className="list-item flex-row justify-space-between" href={link}>
                    <span>{post.title}</span>
                </a>
            )
        }   
    )

    return(
        <div className="posts list-group">
            {allPosts}
        </div>
    )
}

export default Posts;