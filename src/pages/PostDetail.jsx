import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [totalPosts, setTotalPosts] = useState(0);

    useEffect(() => {
        fetch("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts")
            .then((response) => response.json())
            .then((data) => {
                const limitedPosts = data.slice(0, 5);
                setTotalPosts(limitedPosts.length);
                const selectedPost = limitedPosts.find((p) => p.id === id);
                setPost(selectedPost || null);
            })
            .catch((error) => console.error("Errore nel recupero del post:", error));
    }, [id]);

    if (!post) return <p>Caricamento o post non trovato...</p>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p><strong>Autore:</strong> {post.author}</p>
            <p>{post.body}</p>

            <div style={{ marginTop: "20px" }}>
                {parseInt(id) > 1 && <Link to={`/posts/${parseInt(id) - 1}`}>&larr; Indietro</Link>}
                {"  "}
                <Link to="/posts">Torna alla lista</Link>
                {"  "}
                {parseInt(id) < totalPosts && <Link to={`/posts/${parseInt(id) + 1}`}>Avanti &rarr;</Link>}
            </div>
        </div>
    );
};

export default PostDetail;
