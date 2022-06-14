import React, {useEffect, useState} from 'react';
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/modal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/loader/Loader";
import PostList from "../components/PostList";
import MyPagination from "../components/UI/pagination/MyPagination";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPagesCount} from "../utils/pages";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [postsLimit] = useState(10)
    const [pageNumber, setPageNumber] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(postsLimit, pageNumber)
        setPosts(response.data)
        const totalPagesCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalPagesCount, postsLimit))
    })

    useEffect(() => {
        fetchPosts()
    }, [pageNumber])

    const changePage = (pageNumber) => {
        setPageNumber(pageNumber)
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div>
            <MyButton style={{marginTop: '15px'}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError &&
            <h1>Ошибка загрузки</h1>
            }
            {isPostsLoading
                ? <div style={{display: "flex", justifyContent: "center", marginTop: 50}}><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов 1'}/>
            }
            <MyPagination totalPages={totalPages} pageNumber={pageNumber} changePage={changePage}/>
        </div>
    );
};

export default Posts;