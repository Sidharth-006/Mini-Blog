import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import Loader from "../components/Loader";

function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);

        const res = await axiosInstance.get(
          `/posts?_page=${page}&_limit=6`
        );

        setPosts(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [page]);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        {/* Heading */}
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-gray-800">
          Explore Blogs
        </h1>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-10 flex-wrap">

          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 sm:px-5 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            Previous
          </button>

          <button
            onClick={() => setPage(page + 1)}
            className="px-4 sm:px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm sm:text-base"
          >
            Next
          </button>

        </div>
      </div>
    </div>
  );
}

export default Home;