import { useEffect, useState } from "react";
import PostService from "../services/PostService";
import { useParams } from "react-router-dom";

function Post() {
    let { id } = useParams();

    const [post, setPost] = useState<{[index: string]: any}>({})

    useEffect(() => {
        PostService.getPostById(id).then((res) => {
            setPost(res.data);
        })
    })
    console.log(post);

    return (
        <div className="post">
            <article className="card">
                <div className="card-header flex-row justify-space-between">
                    <h2>{post.postTitle}</h2>
                    <div>
                        Posted by  on 
                    </div>
                </div>
                <div className="card-body">
                    {post.postBody}
                </div>
            </article>

            {post.Comments ? (
                <section className="card">
                    <div className="card-header">
                        <h3>Comments</h3>
                    </div>

                    <div className="card-body">
                        
                        <div>
                            <p>
                                
                            </p>
                            <p>
                                &mdash; 
                            </p>
                        </div>
                        
                    </div>
                </section>
            ) : (
                ""
            )}
            

            <form id="new-comment-form" className="card">
                <div className="card-header">
                    <h3>Add New Comment</h3>
                </div>

                <div className="card-body">
                    <input type="hidden" name="post-id" value="{{post.id}}" />

                    <label className="form-label" htmlFor="comment-body">Comment</label>

                    <textarea name="comment-body" className="form-input"></textarea>

                    <button type="submit" className="btn">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Post;