import { useEffect, useState } from "react";
import axios from "axios";
import bgImage from "../../assets/img.png";
import logo from "../../assets/logo.png";
import { FaClock } from "react-icons/fa";

export default function WithdrawalStatus() {
  const [withdrawals, setWithdrawals] = useState([]);
  const [loading, setLoading] = useState(true);

  const phone = "9876543210"; // later from auth

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/users/withdrawal-status?phone=${phone}`)
      .then((res) => setWithdrawals(res.data.data.withdrawals))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full b max-w-md backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-white">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="logo" className="h-5 object-contain" />
        </div>

        <h1 className="text-2xl font-semibold text-center mb-6">
          Withdrawal Status
        </h1>

        {loading ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : withdrawals.length === 0 ? (
          <p className="text-center text-gray-400">
            No withdrawal requests found
          </p>
        ) : (
          <div className="space-y-4">
            {withdrawals.map((w, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-white/5 border border-white/10 px-4 py-3 rounded-xl"
              >
                <div>
                  <p className="font-semibold text-white">₹{w.amount}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(w.date).toLocaleString()}
                  </p>
                </div>

                <span className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400">
                  <FaClock size={12} />
                  {w.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
