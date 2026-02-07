import bgImage from "../../assets/img.png";
import logo from "../../assets/logo.png";
import { PiUploadSimpleBold } from "react-icons/pi";

export default function WithdrawVerify() {
  return (
    <div
      className="min-h-screen p-2.5   bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full form max-w-md backdrop-blur-xl border border-white/10 rounded-[28px] p-9 text-white">
        <div className="flex items-center justify-center mb-7">
          <img src={logo} alt="Logo" className="h-5 object-contain" />
        </div>

        <h1 className="text-3xl font-semibold text-center mb-2">
          Verification Pending
        </h1>
        <p className="text-center text-gray-400 text-sm mb-8">
          We need your government ID to complete the <br /> verification process
        </p>

        <div>
          <div>
            <label className="text-[12px] pl-1" htmlFor="govId">
              Driving License (PNG/JPG/JPEG)
            </label>

            <label
              htmlFor="govId"
              className="relative mt-1 mb-4 flex items-center justify-between bg-black/10 border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-400 cursor-pointer hover:border-blue-500"
            >
              <span className="text-[#f6f6f699]">Upload your Driving License</span>
              <PiUploadSimpleBold className="text-xl" />

              <input id="govId" type="file" className="hidden placeholder:text-[#F6F6F699]" />
            </label>
          </div>

          <button className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition rounded-lg font-medium">
            Withdrawal
          </button>

          <div className="mt-5 text-xs text-gray-400 mb-5 text-center">
            <span className="text-[10px] leading-relaxed">
              *Your money will be deposited within 48 hours
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
