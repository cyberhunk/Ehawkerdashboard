import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import OtpVerification from "./pages/OtpVerification/OtpVerification";
import WithdrawalCenter from "./pages/WithdrawalCenter/WithdrawalCenter";
import WithdrawalSuccess from "./pages/WithdrawalSuccess/WithdrawalSuccess";
import WithdraVerify from "./pages/WithdraVerify/WithdraVerify";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Routes */}
      {/* <nav className="flex gap-6 mb-8 text-lg absolute top-1 left-4 z-10">
        <Link to="/" className="hover:text-yellow-400">
          Home
        </Link>
        <Link to="/login" className="hover:text-yellow-400">
          login
        </Link>
        <Link to="/otp" className="hover:text-yellow-400">
          OtpVerification
        </Link>
        <Link to="/Withdra" className="hover:text-yellow-400">
          WithdrawalCenter
        </Link>
        <Link to="/success" className="hover:text-yellow-400">
          WithdrawalSuccess
        </Link>
        <Link to="/WithdraVerify" className="hover:text-yellow-400">
          WithdraVerify
        </Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/withdra" element={<WithdrawalCenter />} />
        <Route path="/success" element={<WithdrawalSuccess />} />
        <Route path="/withdraverify" element={<WithdraVerify />} />
      </Routes>
    </div>
  );
}

export default App;
