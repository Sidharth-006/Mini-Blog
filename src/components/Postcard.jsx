import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div
      className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md 
      transition border border-slate-100 flex flex-col h-full"
    >

      {/* Badge */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-indigo-100 flex items-center justify-center">
          📄
        </div>

        <span
          className="text-indigo-600 text-xs sm:text-sm font-semibold
          bg-indigo-50 px-3 py-1 rounded-full"
        >
          Blog Post
        </span>
      </div>

      {/* Title */}
      <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-3 line-clamp-2">
        {post.title}
      </h2>

      {/* Body */}
      <p className="text-slate-600 text-sm mb-5 line-clamp-3 flex-grow">
        {post.body}
      </p>

      {/* Button */}
      <Link
        to={`/posts/${post.id}`}
        className="inline-flex items-center justify-center gap-2 
        px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base
        text-white bg-gradient-to-r from-indigo-500 to-purple-500
        hover:scale-105 transition duration-300 w-fit"
      >
        Read More →
      </Link>
    </div>
  );
};

export default PostCard;