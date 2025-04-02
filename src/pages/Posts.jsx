import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data.slice(0, 5)))  // Mostra solo i primi 5 post
            .catch((error) => console.error("Errore nel recupero dei post:", error));
    }, []);

    return (
        <div>
            <h1>Lista dei Post</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
