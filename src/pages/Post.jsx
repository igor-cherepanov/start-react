import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";

const Post = () => {
    const params = useParams()
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])

    const [fetchCommentsByPostId, isCommentsLoading, commentsError] = useFetching(async () => {
        const response = await PostService.getCommentsById(params.id)
        setComments(response.data)
    })

    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPostById()
        fetchCommentsByPostId()
    }, [])

    return (
        <div>
            <h1>
                Post #{params.id}
            </h1>
            {
                post === null
                    ? <Loader/>
                    : <div>
                        <h5>
                            {post.id}. {post.title}
                        </h5>
                        <div>
                            {post.body}
                        </div>
                    </div>
            }
            <h1>
                Комментарии
            </h1>
            {
                isCommentsLoading
                    ? <Loader/>
                    : <div>
                        {comments.map(comment =>
                            <div key={comment.id} style={{marginTop: 15}}>
                                <h5>{comment.email}</h5>
                                <div>{comment.body}</div>
                            </div>
                        )}
                    </div>
            }
        </div>
    );
};

export default Post;