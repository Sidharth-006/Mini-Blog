function Loader() {
  return (
    <div className="min-h-screen flex justify-center items-center px-4">

      <div className="text-center">

        {/* Spinner */}
        <div
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full
          border-[5px] sm:border-[6px]
          border-violet-200 border-t-violet-600
          animate-spin mx-auto"
        />

        {/* Text */}
        <p className="mt-4 sm:mt-5 text-slate-600 text-base sm:text-lg font-medium">
          Loading...
        </p>

      </div>
    </div>
  );
}

export default Loader;