function Loader() {
  return (
    <div className="min-h-screen flex justify-center items-center">

      <div className="text-center">

        <div className="w-16 h-16 rounded-full border-[6px] border-violet-200 border-t-violet-600 animate-spin mx-auto" />

        <p className="mt-5 text-slate-600 text-lg font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default Loader;