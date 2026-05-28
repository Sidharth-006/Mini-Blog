import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loader from '../components/Loader';

const PostDetail = () => {
  const { id } = useParams();
  const { data: post, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (loading) return <Loader />;
  if (error) return <p>Post not found.</p>;

  return (
    <div className="post-detail-page">
      <article className="post-content-card">
        <h1>{post.title}</h1>
        <div className="meta">Published by Admin</div>
        <hr />
        <p>{post.body}</p>
        <p>{post.body}</p> {/* Repeated for length demonstration */}
      </article>
    </div>
  );
};

export default PostDetail;