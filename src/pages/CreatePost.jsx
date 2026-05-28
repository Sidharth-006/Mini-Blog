import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import Navbar from "../components/Navbar";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.post("/posts", {
        title,
        body,
      });

      alert("Post Created");

      setTitle("");
      setBody("");
    } catch (err) {
      alert("Error creating post");
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* NAVBAR (UNCHANGED) */}
      <Navbar />

      <div className="flex justify-center px-4 py-12">

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-md p-8"
        >

          {/* TITLE */}
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Create Post
          </h1>

          {/* TITLE INPUT */}
          <input
            type="text"
            placeholder="Enter post title..."
            className="w-full p-4 mb-5 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* BODY TEXTAREA */}
          <textarea
            placeholder="Write your post..."
            rows="7"
            className="w-full p-4 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 resize-none"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="mt-6 w-full py-3 rounded-lg bg-blue-400 text-white font-semibold hover:bg-blue-500 transition"
          >
            Publish Post
          </button>

        </form>
      </div>
    </div>
  );
}

export default CreatePost;