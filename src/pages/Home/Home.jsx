import { FiCopy } from "react-icons/fi";
import { FiShare2 } from "react-icons/fi";
import { useState } from "react";
import { statsData, earningHistory } from "../../Constant/data";
import { FaHistory } from "react-icons/fa";
import hand from "../../assets/hand.png";

export default function Home() {
  const statusStyles = {
    "Deposited to Bank": "bg-green-500/20 text-green-400",
    "Withdrawal Pending": "bg-yellow-500/20 text-yellow-400",
    Rejected: "bg-red-500/20 text-red-400",
  };

  const [copied, setCopied] = useState(false);
  const referralLink = "ss.com/myref-alluarjun";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#131313] text-white px-6 py-8">
      {/* Welcome Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h2 className="text-blue-400 text-lg">Welcome</h2>
          <h1 className="text-4xl font-bold">Allu Arjun</h1>
          <p className="text-gray-400 mt-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            You are now eligible for withdrawal
          </p>
        </div>

        {/* Withdrawal Card */}
        <div className="flex gap-5">
          <div className="flex items-center gap-10 bg-[linear-gradient(0deg,rgba(19,19,19,0.8),rgba(19,19,19,0.8)),linear-gradient(46.94deg,rgba(246,246,246,0)_40.4%,rgba(246,246,246,0.2)_142.75%)] border border-white/5 p-6 rounded-2xl w-full lg:w-96 shadow-lg">
            <img src={hand} alt="" className="object-cover h-10" />
            <div>
              <h3 className="text-xl font-semibold">Total Amount Earned</h3>
              <h2 className="font-bold text-4xl">RS. 5300</h2>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 rounded-2xl w-full lg:w-96 shadow-lg">
            <h3 className="text-xl font-semibold">Withdrawal</h3>
            <p className="text-sm mt-1 text-blue-100">
              Withdraw the amount you have earned directly to your bank account
              through UPI.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="flex flex-wrap gap-6 mt-8">
        <div
          className="p-6 rounded-2xl w-[500px]  shadow-lg border border-white/5"
          style={{
            background:
              "linear-gradient(0deg, rgba(19,19,19,0.8), rgba(19,19,19,0.8)), linear-gradient(46.94deg, rgba(246,246,246,0) 40.4%, rgba(246,246,246,0.2) 142.75%)",
          }}
        >
          <p className="text-xl font-semibold">Share & Earn Rs. 50 /-</p>
          <div className="flex items-center    rounded-xl p-2 w-full backdrop-blur-md">
            {/* Link Box */}
            <div className="flex items-center justify-between w-full  border border-white/10 bg-black/30  px-4 py-2 rounded-lg text-sm text-gray-300">
              {referralLink}
              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="ml-2  flex items-center gap-1 bg-white/10 hover:bg-white/20 text-sm px-3 py-2 rounded-lg border border-white/10 transition"
              >
                <FiCopy className="text-base" />
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            {/* Share Button */}
            <button className="ml-2 flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded-lg transition">
              <FiShare2 className="text-base" />
              Share
            </button>
          </div>
        </div>

        {statsData.map((item, i) => (
          <div
            key={i}
            className=" bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition"
          >
            <p className="text-gray-400 text-sm">{item.title}</p>
            <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
            {item.sub && <p className="text-xs text-gray-500">{item.sub}</p>}
          </div>
        ))}
      </div>

      {/* Earning History Table */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold mb-4 flex gap-2 items-center">
          <FaHistory /> Your Earning History
        </h2>

        <div className="overflow-x-auto  border border-white/10 rounded-2xl">
          <table className="w-full text-sm">
            <thead className="text-blue-400 border-b border-white/10  sticky top-0">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Phone Number</th>
                <th className="p-4 text-left">Date & Time</th>
                <th className="p-4 text-left">Referral ID</th>
                <th className="p-4 text-left">Earnings</th>
                <th className="p-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {earningHistory.map((row, i) => (
                <tr
                  key={i}
                  // className="border-b border-white/5 hover:bg-white/5"
                  className="border-b border-white/5 odd:bg-white/5 hover:bg-white/10 transition"
                >
                  <td className="p-4">{row.name}</td>
                  <td className="p-4 text-gray-400">{row.phone}</td>
                  <td className="p-4 text-gray-400">{row.date}</td>
                  <td className="p-4">{row.referral}</td>
                  <td className="p-4 text-green-400 font-semibold">
                    {row.amount}
                  </td>
                  <td className="p-4">
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${statusStyles[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
