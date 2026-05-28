import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-slate-100">

      {/* Badge */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center">
          📄
        </div>

        <span className="text-indigo-600 text-sm font-semibold bg-indigo-50 px-3 py-1 rounded-full">
          Blog Post
        </span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2">
        {post.title}
      </h2>

      {/* Body */}
      <p className="text-slate-600 text-sm mb-6 line-clamp-3">
        {post.body}
      </p>

      {/* Button */}
      <Link
        to={`/post/${post.id}`}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full
        text-white bg-gradient-to-r from-indigo-500 to-purple-500"
      >
        Read More →
      </Link>

    </div>
  );
};

export default PostCard;