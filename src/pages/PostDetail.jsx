import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

const PostDetail = () => {
  const { id } = useParams();

  const {
    data: post,
    loading,
    error,
  } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500 text-lg">
        Post not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        <article className="bg-white rounded-3xl shadow-sm border border-gray-200 p-5 sm:p-8 md:p-10">

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="text-sm text-gray-500 mb-5">
            Published by Admin
          </div>

          <hr className="mb-6" />

          {/* Content */}
          <div className="space-y-5 text-gray-700 text-base sm:text-lg leading-8">
            <p>{post.body}</p>
            <p>{post.body}</p>
          </div>

        </article>
      </div>
    </div>
  );
};

export default PostDetail;