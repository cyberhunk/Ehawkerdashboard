// import bgImage from "../../assets/img.png";
// import logo from "../../assets/logo.png";

// export default function WithdrawalCenter() {
//   return (
//     <div
//       className="min-h-screen bg-cover bg-center relative p-2.5 flex items-center justify-center"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <div class="w-full form  max-w-md  backdrop-blur-xl border border-white/10 rounded-3xl  p-9  text-white">
//         <div class="flex items-center gap-2 justify-center mb-7">
//           <img src={logo} alt="" className="h-5 object-cover" />
//         </div>

//         <h1 class="text-3xl font-semibold text-center mb-2">
//           Withdrawal Center
//         </h1>
//         <p class="text-center text-gray-400 text-sm mb-8">
//           Withdraw your money directly into your bank account just by entering
//           your UPI ID
//         </p>

//         <label htmlFor="">Enter Your UPI ID</label>
//         <input
//           type="tel"
//           placeholder="Enter your mobile number"
//           class="w-full bg-black/10 mt-2 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none rounded-lg px-4 py-2 text-sm placeholder-gray-400 mb-4"
//         />

//         <button class="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition rounded-lg  font-medium">
//           Withdrawal
//         </button>

//         <div className="mt-4 text-center">
//           <p className="text-xs">*Your money will be deposited within 48 hours</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import axios from "axios";
import { HiCheckCircle } from "react-icons/hi";
import { PiUploadSimpleBold } from "react-icons/pi";
import bgImage from "../../assets/img.png";
import logo from "../../assets/logo.png";

export default function WithdrawalCenter() {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState(null);
  const [upi, setUpi] = useState("");

  const phone = "9876543210"; // later from auth

  // STEP 1 → Verify ID
  const handleVerifyID = async () => {
    if (!file) return alert("Please upload your ID");

    try {
      await axios.post("http://localhost:5000/api/users/verify-id", {
        phone,
        idType: "driving_license",
        idNumber: "DL1234567890",
      });

      setStep(2);
    } catch (err) {
      alert(err.response?.data?.message || "ID verification failed");
    }
  };

  // STEP 2 → Verify UPI + Withdraw
  const handleWithdraw = async () => {
    if (!upi) return alert("Enter UPI ID");

    try {
      await axios.post("http://localhost:5000/api/users/verify-upi", {
        phone,
        upiId: upi,
      });

      await axios.post("http://localhost:5000/api/users/submit-withdrawal", {
        phone,
        amount: 50, // later dynamic from wallet
        upiId: upi,
      });

      setStep(3);
    } catch (err) {
      alert(err.response?.data?.message || "Withdrawal failed");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* STEP 1 — ID Verification */}
      {step === 1 && (
        <div className="w-full form max-w-md backdrop-blur-xl border border-white/10 rounded-[28px] p-9 text-white">
          <div className="flex justify-center mb-7">
            <img src={logo} alt="Logo" className="h-5 object-contain" />
          </div>

          <h1 className="text-3xl font-semibold text-center mb-2">
            Verification Pending
          </h1>
          <p className="text-center text-gray-400 text-sm mb-8">
            We need your government ID to complete verification
          </p>

          <label className="text-[12px] pl-1">Driving License</label>

          <label className="relative mt-1 mb-4 flex items-center justify-between bg-black/10 border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-400 cursor-pointer hover:border-blue-500">
            <span>{file ? file.name : "Upload your Driving License"}</span>
            <PiUploadSimpleBold className="text-xl" />
            <input
              type="file"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>

          <button
            onClick={handleVerifyID}
            className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg font-medium"
          >
            Verify ID
          </button>
        </div>
      )}

      {/* STEP 2 — Withdrawal */}
      {step === 2 && (
        <div className="w-full form max-w-md backdrop-blur-xl border border-white/10 rounded-3xl p-9 text-white">
          <div className="flex justify-center mb-7">
            <img src={logo} alt="" className="h-5 object-cover" />
          </div>

          <h1 className="text-3xl font-semibold text-center mb-2">
            Withdrawal Center
          </h1>
          <p className="text-center text-gray-400 text-sm mb-8">
            Enter your UPI ID to receive your money
          </p>

          <label>Enter Your UPI ID</label>
          <input
            value={upi}
            onChange={(e) => setUpi(e.target.value)}
            placeholder="example@upi"
            className="w-full bg-black/10 mt-2 border border-white/10 rounded-lg px-4 py-2 text-sm mb-4"
          />

          <button
            onClick={handleWithdraw}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg font-medium"
          >
            Withdraw Now
          </button>

          <p className="mt-4 text-xs text-center text-gray-400">
            *Money will be deposited within 48 hours
          </p>
        </div>
      )}

      {/* STEP 3 — Success */}
      {step === 3 && (
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl px-16 py-14 text-center text-white max-w-xl w-full border border-white/10">
          <div className="flex justify-center mb-6">
            <HiCheckCircle size={110} className="text-[#25D988]" />
          </div>

          <h1 className="text-3xl font-semibold mb-3">Withdrawal Successful</h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            Your money will be deposited within <br />
            48 working hours.
          </p>
        </div>
      )}
    </div>
  );
}
