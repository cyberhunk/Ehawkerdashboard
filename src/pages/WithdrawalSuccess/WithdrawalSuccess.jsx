import { HiCheckCircle } from "react-icons/hi";
import bgImage from "../../assets/img.png";

export default function WithdrawalSuccess() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative  flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
   
      <div className="p-[2px] rounded-3xl">
       
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl px-16 py-14 text-center text-white max-w-xl w-full border border-white/10">
     
          <div className="flex justify-center mb-6">
            <HiCheckCircle size={110} className="text-[#25D988]" />
          </div>

      
          <h1 className="text-3xl font-semibold mb-3">Withdrawal Successful</h1>

          <p className="text-gray-300 text-sm leading-relaxed">
            Your money will be deposited within <br />
            48 hours of working days.
          </p>
        </div>
      </div>
    </div>
  );
}
