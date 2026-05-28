import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="px-4 sm:px-6 md:px-10 py-8 sm:py-10">

        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10
          bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500
          bg-clip-text text-transparent"
        >
          Dashboard
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">

          {/* Total Posts */}
          <div
            className="bg-white/10 p-5 sm:p-8 rounded-[24px] sm:rounded-[30px]
            backdrop-blur-xl hover:scale-105 duration-300"
          >
            <h2 className="text-xl sm:text-2xl font-bold">
              Total Posts
            </h2>

            <p className="text-3xl sm:text-4xl mt-3 sm:mt-4">
              100
            </p>
          </div>

          {/* Status */}
          <div
            className="bg-white/10 p-5 sm:p-8 rounded-[24px] sm:rounded-[30px]
            backdrop-blur-xl hover:scale-105 duration-300"
          >
            <h2 className="text-xl sm:text-2xl font-bold">
              Status
            </h2>

            <p className="text-3xl sm:text-4xl mt-3 sm:mt-4">
              Active
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;