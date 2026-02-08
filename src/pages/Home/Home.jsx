// import { FiArrowUpRight, FiCopy } from "react-icons/fi";
// import { FiShare2 } from "react-icons/fi";
// import { useState } from "react";
// import { earningHistory } from "../../Constant/data";
// import { FaHistory } from "react-icons/fa";
// import hand from "../../assets/hand.png";
// import star from "../../assets/star.png";
// import people from "../../assets/people.png";
// import vallet from "../../assets/vallet.png";
// import "./Home.scss";
// import { BsInfoCircleFill } from "react-icons/bs";
// import { MdAccountBalanceWallet } from "react-icons/md";
// // import { BsPeopleFill } from "react-icons/bs";
// import { IoTrophy } from "react-icons/io5";
// import logo from "../../assets/logo.png";

// import { useNavigate } from "react-router-dom";
// import EarningsDashboard from "../../components/EarningsDashboard/EarningsDashboard";

// export default function Home() {
//   const [showInfo, setShowInfo] = useState(false);
//   const [show, setShow] = useState(false);
//   const navigate = useNavigate();

//   const statusStyles = {
//     "Deposited to Bank": "bg-green-500/20 text-green-400",
//     "Withdrawal Pending": "bg-yellow-500/20 text-yellow-400",
//     Rejected: "bg-red-500/20 text-red-400",
//   };

//   const [copied, setCopied] = useState(false);
//   const referralLink = "ss.com/myref-alluarjun";

//   const handleCopy = () => {
//     navigator.clipboard.writeText(referralLink);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <>
//       <div className="py-5 px-8 flex flex-col sm:flex-row gap-3 justify-between items-start border-b border-b-[#F6F6F633] ">
//         <img src={logo} alt="" className="h-6 object-cover " />
//         <div>
//           <p className="flex items-center text-[#f6f6f6] gap-2 flex-wrap text-sm">
//             <span>
//               <span className="text-blue-500 font-semibold">RS.</span> 3500
//             </span>

//             <span className="text-white/40">|</span>

//             <span
//               onClick={() =>
//                 window.open("https://surakshitsaathi.com", "_blank")
//               }
//               className="text-blue-500 flex items-center gap-1 cursor-pointer hover:text-blue-400 transition"
//             >
//               Visit Surakshit Saathi
//               <FiArrowUpRight size={18} />
//             </span>
//           </p>
//         </div>
//       </div>
//       <div className="homedash min-h-screen bg-[#131313] text-white px-8 py-8">

//         {/* Welcome Section */}
//         <div className="flex  justify-between flex-col sm:flex-row ">
//           <div className="">
//             <div className="relative">
//               <h2 className="text-blue-400 text-lg">Welcome</h2>
//               <h1 className="text-4xl font-bold">Allu Arjun</h1>
//               <p className="text-[#f4f4f4] mt-2 flex items-center gap-2">
//                 <span className="w-2 h-2 bg-green-400 rounded-full"></span>
//                 You are now eligible for withdrawal
//                 <BsInfoCircleFill
//                   onClick={() => setShowInfo(!showInfo)}
//                   className="cursor-pointer  hover:text-blue-300 transition relative"
//                 />
//               </p>
//               {showInfo && (
//                 <div className="absolute z-50 right-12 w-64 bg-zinc-900 border border-white/10 text-sm text-gray-300 p-3 rounded-xl shadow-xl">
//                   Your are eligible for withdrawal once you complete 100% of
//                   training.
//                 </div>
//               )}
//             </div>

//             <button className="warningbtn w-full flex items-center items-end justify-center gap-2 my-4 ">
//               Complete the Training
//               <FiArrowUpRight className="text-base text-white " size={19} />
//             </button>

//             <div className="cardbg px-4 py-4 mt-3 rounded-2xl w-[100%]  sm:w-[335px] h-[111px] my-6 flex flex-col justify-center shadow-lg border border-white/5">
//               <div className="text-[16px] font-semibold flex justify-between">
//                 {" "}
//                 <span className="flex gap-1 items-center">
//                   <img src={star} alt="" className="h-4 object-cover" /> Share &
//                   Earn Rs. 50 /-
//                 </span>
//                 <span>
//                   <BsInfoCircleFill
//                     onClick={() => setShow(!show)}
//                     className="cursor-pointer  hover:text-blue-300 transition"
//                   />
//                 </span>
//                 {show && (
//                   <div className="absolute z-50 right-9 top-[-100%] mt-4 w-75 bg-zinc-900 border border-white/10 text-sm text-gray-300 p-3 rounded-xl shadow-xl">
//                     After sharing, your gig worker friend must sign up on the
//                     portal and complete 100% of the training using the link you
//                     provided. Only then will you be eligible for the ₹50 reward
//                     points.
//                   </div>
//                 )}
//               </div>

//               <div className="flex items-center  rounded-xl mt-2 w-[100%] backdrop-blur-md">
//                 {/* Link Box */}
//                 <div className="flex items-center justify-between w-full  border border-white/10 bg-[#131313]  pl-2 p-[2px] rounded-lg text-sm text-gray-300">
//                   <span className="text-[12px] whitespace-nowrap overflow-hidden">
//                     {referralLink}
//                   </span>

//                   <button
//                     onClick={handleCopy}
//                     className="ml-2  copybtn flex items-center gap-1 bg-white/10 hover:bg-white/20 text-sm px-3 py-2 rounded-lg border-2 border-white transition"
//                   >
//                     <FiCopy className="text-base " size={10} />
//                     {copied ? "Copied" : "Copy"}
//                   </button>
//                 </div>

//                 {/* Share Button */}
//                 <button className="sharebtn  relative flex items-center ml-1 gap-1 bg-blue-600 hover:bg-blue-500 text-white text-sm px-4  rounded-lg transition">
//                   <FiShare2 className="text-base text-white " size={12} />
//                   Share
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Stats Cards */}
//           <div className="flex items-end justify-center sm:justify-end  flex-wrap gap-3">

//               <div className="cardbg statcard relative z-10 flex items-center gap-10  p-6   shadow-lg">
//                 <img src={hand} alt="" className="object-cover h-10" />
//                 <div>
//                   <h3 className="text-[16px] font-semibold">
//                     Total Amount Earned
//                   </h3>
//                   <h2 className="font-bold text-3xl">RS. 5300</h2>
//                 </div>
//               </div>

//             <div className="cardss cardbg ">
//               <p className="text-[#F6F6F6] text-sm">Pending For Withdrawal</p>
//               <div className="flex items-center gap-4 ">
//                 <img src={vallet} alt="" className="h-7" />
//                 <div className="flex items-end gap-3">
//                   <h2 className="text-3xl font-bold ">
//                     <span className="text-[10px]">RS.</span> 244
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             <div className="cardss cardbg ">
//               <p className="text-[#F6F6F6] text-sm">Total Users Referred</p>
//               <div className="flex items-center gap-2">
//                 {/* <BsPeopleFill size={28} /> */}
//                 <img src={people} alt="" className="h-8.5" />
//                 <div className="flex items-end gap-3">
//                   <h2 className="text-3xl font-bold ">44</h2>
//                 </div>
//               </div>
//             </div>
//             <div className="cardss cardbg ">
//               <p className="text-[#F6F6F6] text-sm">Training Completed By</p>
//               <div className="flex items-center gap-3">
//                 <IoTrophy size={28} />
//                 <div className="flex items-end gap-2">
//                   <h2 className="text-3xl font-bold ">44</h2>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="cardss cardbg cursor-pointer"
//               onClick={() =>
//                 document
//                   .getElementById("earningHistory")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//             >
//               <p className="text-[#F6F6F6] text-sm">Earning History</p>
//               <div className="text-blue-600">
//                 <span className="flex items-center gap-2">
//                   view
//                   <FiArrowUpRight size={15} className="mt-1" />
//                 </span>
//               </div>
//             </div>

//             <div
//               onClick={() => navigate("/withdrawal")}
//               className="bg-gradient-to-r from-blue-600 to-blue-400 p-7 rounded-2xl w-[329px] h-full sm:h-[111px] shadow-lg cursor-pointer hover:scale-[1.02] transition"
//             >
//               <h3 className="text-xl font-semibold flex justify-between">
//                 Withdrawal
//                 <span>
//                   <FiArrowUpRight size={28} />
//                 </span>
//               </h3>
//               <p className="text-sm mt-1 text-blue-100">
//                 Withdraw the amount you have earned directly to your bank
//                 account through UPI.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Earning History Table */}
//         <div className="mt-12" id="earningHistory">
//           <h2 className="text-lg font-semibold mb-4 flex gap-2 items-center">
//             <FaHistory /> Your Earning History
//           </h2>

//           {/* DESKTOP TABLE */}
//           <div className="hidden md:block overflow-x-auto border border-white/10 rounded-2xl">
//             <table className="w-full text-sm">
//               <thead className="text-blue-400 border-b border-white/10 sticky top-0">
//                 <tr>
//                   <th className="p-4 text-left">Name</th>
//                   <th className="p-4 text-left">Phone Number</th>
//                   <th className="p-4 text-left">Date & Time</th>
//                   <th className="p-4 text-left">Referral ID</th>
//                   <th className="p-4 text-left">Earnings</th>
//                   <th className="p-4 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {earningHistory.map((row, i) => (
//                   <tr
//                     key={i}
//                     className="border-b border-white/5 odd:bg-white/5 hover:bg-white/10 transition"
//                   >
//                     <td className="p-4">{row.name}</td>
//                     <td className="p-4 text-gray-400">{row.phone}</td>
//                     <td className="p-4 text-gray-400">{row.date}</td>
//                     <td className="p-4">{row.referral}</td>
//                     <td className="p-4 text-green-400 font-semibold">
//                       {row.amount}
//                     </td>
//                     <td className="p-4">
//                       <span
//                         className={`text-xs px-3 py-1 rounded-full ${statusStyles[row.status]}`}
//                       >
//                         {row.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* MOBILE CARD LIST */}
//           <div className="md:hidden  space-y-4">
//             {earningHistory.map((row, i) => (
//               <div key={i} className="cardbg rounded-2xl p-4 shadow-md">

//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="font-semibold text-white text-sm">
//                       {row.name}
//                     </h3>
//                     <p className="text-xs text-gray-400">
//                       {row.phone} • {row.referral}
//                     </p>
//                     <p className="text-xs text-gray-500 mt-1">{row.date}</p>
//                   </div>

//                   <div className="text-right">
//                     <p className="text-green-400 font-bold text-sm">
//                       {row.amount}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-3">
//                   <span
//                     className={`text-xs px-3 py-1 rounded-full ${statusStyles[row.status]}`}
//                   >
//                     {row.status}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { FiArrowUpRight, FiCopy } from "react-icons/fi";
import { FiShare2 } from "react-icons/fi";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaHistory } from "react-icons/fa";
import hand from "../../assets/hand.png";
import star from "../../assets/star.png";
import people from "../../assets/people.png";
import vallet from "../../assets/vallet.png";
import "./Home.scss";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoTrophy } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [showInfo, setShowInfo] = useState(false);
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  const [stats, setStats] = useState(null);
  const [referralData, setReferralData] = useState(null);
  const [history, setHistory] = useState([]);

  const phone = "9876543210"; // later auth se aayega
  const navigate = useNavigate();

  const statusStyles = {
    "Deposited to Bank": "bg-green-500/20 text-green-400",
    "Withdrawal Pending": "bg-yellow-500/20 text-yellow-400",
    Rejected: "bg-red-500/20 text-red-400",
    Deposited: "bg-green-500/20 text-green-400",
    "Training Incomplete": "bg-red-500/20 text-red-400",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsRes = await axios.get(
          `http://localhost:5000/api/users/referral-stats?phone=${phone}`,
        );
        setStats(statsRes.data.data);

        const refRes = await axios.get(
          `http://localhost:5000/api/users/referral-code?phone=${phone}`,
        );
        setReferralData(refRes.data.data);

        const historyRes = await axios.get(
          `http://localhost:5000/api/users/earning-history?phone=${phone}&page=1&limit=10`,
        );
        setHistory(historyRes.data.data.history);
      } catch (err) {
        console.error("API Error:", err);
      }
    };

    fetchData();
  }, []);

  const referralLink = referralData?.referralLink || "";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="py-5 px-8 flex flex-col sm:flex-row gap-3 justify-between items-start border-b border-b-[#F6F6F633] ">
        <img src={logo} alt="" className="h-6 object-cover " />
        <div>
          <p className="flex items-center text-[#f6f6f6] gap-2 flex-wrap text-sm">
            <span>
              <span className="text-blue-500 font-semibold">RS.</span>{" "}
              {stats?.wallet?.totalEarned || 0}
            </span>

            <span className="text-white/40">|</span>

            <span
              onClick={() =>
                window.open("https://surakshitsaathi.com", "_blank")
              }
              className="text-blue-500 flex items-center gap-1 cursor-pointer hover:text-blue-400 transition"
            >
              Visit Surakshit Saathi
              <FiArrowUpRight size={18} />
            </span>
          </p>
        </div>
      </div>

      <div className="homedash min-h-screen bg-[#131313] text-white px-8 py-8">
        {/* Welcome */}
        <div className="flex justify-between flex-col sm:flex-row ">
          <div>
            <div className="relative">
              <h2 className="text-blue-400 text-lg">Welcome</h2>
              <h1 className="text-4xl font-bold">Allu Arjun</h1>
              <p className="text-[#f4f4f4] mt-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                You are{" "}
                {stats?.eligibleForWithdrawal
                  ? "now eligible"
                  : "not eligible"}{" "}
                for withdrawal
                <BsInfoCircleFill
                  onClick={() => setShowInfo(!showInfo)}
                  className="cursor-pointer hover:text-blue-300 transition"
                />
              </p>
            </div>

            {/* Referral Card */}
            <div className="cardbg px-4 py-4 mt-3 rounded-2xl w-[100%] sm:w-[335px] h-[111px] my-6 flex flex-col justify-center shadow-lg border border-white/5">
              <div className="text-[16px] font-semibold flex justify-between">
                <span className="flex gap-1 items-center">
                  <img src={star} alt="" className="h-4 object-cover" /> Share &
                  Earn Rs. 50 /-
                </span>
                <BsInfoCircleFill
                  onClick={() => setShow(!show)}
                  className="cursor-pointer hover:text-blue-300 transition"
                />
              </div>

              <div className="flex items-center rounded-xl mt-2 w-full backdrop-blur-md">
                <div className="flex items-center justify-between w-full border border-white/10 bg-[#131313] pl-2 p-[2px] rounded-lg text-sm text-gray-300">
                  <span className="text-[12px] whitespace-nowrap overflow-hidden">
                    {referralLink}
                  </span>

                  <button
                    onClick={handleCopy}
                    className="ml-2 copybtn flex items-center gap-1 bg-white/10 hover:bg-white/20 text-sm px-3 py-2 rounded-lg border-2 border-white transition"
                  >
                    <FiCopy size={12} />
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>

                <button className="sharebtn ml-1 flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 rounded-lg transition">
                  <FiShare2 size={12} />
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="flex items-end justify-center sm:justify-end flex-wrap gap-3">
            <div className="cardbg statcard flex items-center gap-10 p-6 shadow-lg">
              <img src={hand} alt="" className="object-cover h-10" />
              <div>
                <h3 className="text-[16px] font-semibold">
                  Total Amount Earned
                </h3>
                <h2 className="font-bold text-3xl">
                  RS. {stats?.wallet?.totalEarned || 0}
                </h2>
              </div>
            </div>

            <div className="cardss cardbg ">
              <p className="text-sm">Pending For Withdrawal</p>
              <div className="flex items-center gap-4">
                <img src={vallet} alt="" className="h-7" />
                <h2 className="text-3xl font-bold ">
                  <span className="text-[10px]">RS.</span>{" "}
                  {stats?.wallet?.balance || 0}
                </h2>
              </div>
            </div>

            <div className="cardss cardbg ">
              <p className="text-sm">Total Users Referred</p>
              <div className="flex items-center gap-2">
                <img src={people} alt="" className="h-8.5" />
                <h2 className="text-3xl font-bold ">
                  {stats?.referrals?.total || 0}
                </h2>
              </div>
            </div>

            <div className="cardss cardbg ">
              <p className="text-sm">Training Completed By</p>
              <div className="flex items-center gap-3">
                <IoTrophy size={28} />
                <h2 className="text-3xl font-bold ">
                  {stats?.referrals?.completed || 0}
                </h2>
              </div>
            </div>

            {/* 👇 YE VIEW CARD SAME RAKHA HAI */}
            <div
              className="cardss cardbg cursor-pointer"
              onClick={() =>
                document
                  .getElementById("earningHistory")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <p className="text-[#F6F6F6] text-sm">Earning History</p>
              <div className="text-blue-600">
                <span className="flex items-center gap-2">
                  view
                  <FiArrowUpRight size={15} className="mt-1" />
                </span>
              </div>
            </div>

            <div
              onClick={() => navigate("/withdrawal")}
              className="bg-gradient-to-r from-blue-600 to-blue-400 p-7 rounded-2xl w-[329px] shadow-lg cursor-pointer hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-semibold flex justify-between">
                Withdrawal <FiArrowUpRight size={28} />
              </h3>
              <p className="text-sm mt-1 text-blue-100">
                Withdraw the amount you have earned directly to your bank
                account through UPI.
              </p>
            </div>
          </div>
        </div>

        {/* Earning History Section */}
        <div className="mt-12" id="earningHistory">
          <div className="flex justify-between items-end pb-4">
            <h2 className="text-lg font-semibold mb-4 flex gap-2 items-center">
              <FaHistory /> Your Earning History
            </h2>
            <button
              onClick={() => navigate("/withdrawalstatus")}
              className="text-blue-400 text-sm underline mt-3"
            >
              View Withdrawal Status
            </button>
          </div>

          <div className="hidden md:block overflow-x-auto border border-white/10 rounded-2xl">
            <table className="w-full text-sm">
              <thead className="text-blue-400 border-b border-white/10">
                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Phone</th>
                  <th className="p-4 text-left">Date & Time</th>
                  <th className="p-4 text-left">Referral ID</th>
                  <th className="p-4 text-left">Earnings</th>
                  <th className="p-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {history.map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="p-4">{row.name}</td>
                    <td className="p-4 text-gray-400">{row.phone}</td>
                    <td className="p-4 text-gray-400">
                      {new Date(row.date).toLocaleString()}
                    </td>
                    <td className="p-4">{row.referralId}</td>
                    <td className="p-4 text-green-400 font-semibold">
                      ₹{row.earnings}
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
    </>
  );
}
