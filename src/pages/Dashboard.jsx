import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold mb-10 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/10 p-8 rounded-[30px] backdrop-blur-xl hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold">
              Total Posts
            </h2>

            <p className="text-4xl mt-4">
              100
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-[30px] backdrop-blur-xl hover:scale-105 duration-300">
            <h2 className="text-2xl font-bold">
              Status
            </h2>

            <p className="text-4xl mt-4">
              Active
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;