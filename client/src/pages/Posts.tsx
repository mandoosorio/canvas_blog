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
        console.log(post);
        var link = `/post/${post.id}`;
        return (
            <article className="card">
                <div className="card-header flex-row justify-space-between">
                    <h2>
                        <a href={link}>{post.postTitle}</a>
                    </h2>
                    <div>
                        Posted by User
                    </div>
                </div>
                <div className="card-body">
                    {post.postBody}
                </div>
            </article>
        )
    }
    )

    return (
        <div className="posts">
            {allPosts}
        </div>
    )
}

export default Posts;