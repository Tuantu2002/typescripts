import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getPosts } from '../client_api/post';

type POST = {
    id: number,
    title: string,
    desc: string,
    author: string,
    category: string,
    thumbnail: string,
    status: number
};

export default function PostList() {
    const [posts, setPosts] = useState<POST[]>([]);

    const handleGetPosts = async () => {
        const response = await getPosts();
        setPosts(response.data);
    };

    useEffect(() => {
        handleGetPosts();
    }, []);

    return (
        <div>
            <div><Link to={'/posts/create'}><button>
                Tạo mới bài viết
            </button></Link></div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Tiêu đề</td>
                            <td>author</td>
                            <td>category</td>
                            <td>thumbnail</td>
                            <td>status</td>
                            <td>sửa</td>
                            <td>xóa</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map(post => (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.author}</td>
                                    <td>{post.category}</td>
                                    <td>{post.thumbnail}</td>
                                    <td>{post.status ? 'kích hoạt' : 'không kích hoạt'}</td>
                                    <td><Link to={`/posts/edit/${post.id}`}> Sửa</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};