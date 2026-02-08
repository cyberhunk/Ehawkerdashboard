import "./EarningsDashboard.scss";

export default function EarningsDashboard() {
  return (
    <>
      <div className="min-h-screen  text-white p-4 flex justify-center">
        <div className="w-full max-w-6xl space-y-6">
          {/* TOP GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LEFT SIDE */}
            <div className="space-y-5">
              {/* Header */}
              <div>
                <p className="text-blue-400 text-lg">Welcome</p>
                <h1 className="text-3xl lg:text-4xl font-bold">Allu Arjun</h1>
                <div className="flex items-center gap-2 text-sm mt-2 text-gray-300">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <p>You are not eligible for withdrawal</p>
                  <span className="bg-gray-700 text-xs px-2 rounded-full">
                    i
                  </span>
                </div>
              </div>

              {/* Training Button */}
              <button className="w-full bg-red-500 hover:bg-red-600 transition rounded-xl py-3 font-semibold">
                Complete the Training ↗
              </button>

              {/* Refer & Earn */}
              <div className="card">
                <p className="text-sm text-gray-300 mb-3">
                  ✨ Share & Earn Rs. 50 /-
                </p>

                <div className="flex items-center gap-2 bg-black/40 p-2 rounded-lg">
                  <input
                    className="flex-1 bg-transparent outline-none text-sm"
                    value="ss.com/myref=alluarjun"
                    readOnly
                  />
                  <button className="bg-gray-700 px-3 py-1 rounded text-sm">
                    Copy
                  </button>
                  <button className="bg-blue-600 px-3 py-1 rounded text-sm">
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-5">
              {/* Total Earnings */}
              <div className="card">
                <p className="text-gray-400 text-sm mb-1">
                  Total Amount Earned
                </p>
                <h2 className="text-4xl font-bold">Rs. 3500</h2>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="card text-center">
                  <p className="text-gray-400 text-sm">
                    Pending For Withdrawal
                  </p>
                  <h3 className="text-2xl font-bold mt-1">Rs. 200</h3>
                </div>

                <div className="card text-center">
                  <p className="text-gray-400 text-sm">Training Completed By</p>
                  <h3 className="text-2xl font-bold mt-1">06</h3>
                </div>

                <div className="card text-center">
                  <p className="text-gray-400 text-sm">Total Users Referred</p>
                  <h3 className="text-2xl font-bold mt-1">08</h3>
                </div>

                <div className="card text-center flex flex-col justify-center">
                  <p className="text-gray-400 text-sm">Earning History</p>
                  <button className="text-blue-400 mt-2">View ↗</button>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Withdrawal ↗</h2>
                <p className="text-sm text-blue-100">
                  Withdrawal the amount you have earned directly to your bank
                  account through UPI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
