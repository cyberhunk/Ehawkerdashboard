import bgImage from "../../assets/img.png";
import logo from "../../assets/logo.png";

export default function WithdrawalCenter() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative p-2.5 flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div class="w-full form  max-w-md  backdrop-blur-xl border border-white/10 rounded-3xl  p-9  text-white">
        <div class="flex items-center gap-2 justify-center mb-7">
          <img src={logo} alt="" className="h-5 object-cover" />
        </div>

        <h1 class="text-3xl font-semibold text-center mb-2">
          Withdrawal Center
        </h1>
        <p class="text-center text-gray-400 text-sm mb-8">
          Withdraw your money directly into your bank account just by entering
          your UPI ID
        </p>

        <label htmlFor="">Enter Your UPI ID</label>
        <input
          type="tel"
          placeholder="Enter your mobile number"
          class="w-full bg-black/10 mt-2 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none rounded-lg px-4 py-2 text-sm placeholder-gray-400 mb-4"
        />

        {/* <label class="flex items-start  gap-2 text-xs text-gray-400 mb-5">
          <input type="checkbox" class="mt-0.5 accent-blue-500" />
          <span className="mt-0.5 text-[10px]">
            I agree to share my number and details for OTP verification.
          </span>
        </label> */}

        <button class="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition rounded-lg  font-medium">
          Withdrawal
        </button>

        <div className="mt-4 text-center">
          <p className="text-xs">*Your money will be deposited within 48 hours</p>
        </div>
      </div>
    </div>
  );
}
