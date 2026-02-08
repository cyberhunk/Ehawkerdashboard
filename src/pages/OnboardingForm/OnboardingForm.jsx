import { useState } from "react";
import bgImage from "../../assets/img.png";
import logo from "../../assets/logo.png";
import "./onboardingform.scss";

export default function OnboardingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    pin: "",
    role: "",
    organizationAssociated: "",
    organizationName: "",
    orgIdCard: null,
    ownsVehicle: "",
    vehicleBrand: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative p-3 flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full bg max-w-md backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white space-y-5"
      >
        <div className="flex items-center gap-2 justify-center">
          <img src={logo} alt="logo" className="h-6 object-cover" />
        </div>

        <h1 className="text-2xl font-semibold text-center text-red-500">
          Surakshit Saathi Onboarding
        </h1>

        <h2 className="text-lg font-semibold text-white mt-4">
          Enter Your Details
        </h2>

        {/* Full Name */}
        <div>
          <label className="text-sm text-gray-300">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Your Full Name"
            className="w-full mt-1 bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-sm placeholder-gray-400"
          />
        </div>

        {/* DOB + Gender */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm text-gray-300">Date Of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full mt-1 bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full mt-1 bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Pin + Role */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm text-gray-300">Pin Code</label>
            <input
              type="text"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
              placeholder="Residential pin code"
              className="w-full mt-1 bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full mt-1 bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm"
            >
              <option value="">Select your role</option>
              <option>Rider</option>
              <option>Volunteer</option>
              <option>Partner</option>
            </select>
          </div>
        </div>

        {/* Organization Association */}
        <p className="text-center text-sm text-gray-300">
          Are you associated with any organization?
        </p>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() =>
              setFormData({ ...formData, organizationAssociated: "Yes" })
            }
            className={`py-2 rounded-lg ${
              formData.organizationAssociated === "Yes"
                ? "bg-red-600"
                : "border border-white/20"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            onClick={() =>
              setFormData({ ...formData, organizationAssociated: "No" })
            }
            className={`py-2 rounded-lg ${
              formData.organizationAssociated === "No"
                ? "bg-red-600"
                : "border border-white/20"
            }`}
          >
            No
          </button>
        </div>

        {/* Organization Name */}
        {formData.organizationAssociated === "Yes" && (
          <>
            <div>
              <label className="text-sm text-gray-300">
                Associated Organization
              </label>
              <input
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                placeholder="Enter name of your Organization"
                className="w-full mt-1 bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">
                Organization’s ID Card
              </label>
              <input
                type="file"
                name="orgIdCard"
                onChange={handleChange}
                className="w-full mt-1 bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm"
              />
            </div>
          </>
        )}

        {/* 2 Wheeler */}
        <p className="text-center text-sm text-gray-300">
          Do you own a 2-Wheeler?
        </p>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, ownsVehicle: "Yes" })}
            className={`py-2 rounded-lg ${
              formData.ownsVehicle === "Yes"
                ? "bg-red-600"
                : "border border-white/20"
            }`}
          >
            Yes
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, ownsVehicle: "No" })}
            className={`py-2 rounded-lg ${
              formData.ownsVehicle === "No"
                ? "bg-red-600"
                : "border border-white/20"
            }`}
          >
            No
          </button>
        </div>

        {/* Brand */}
        {formData.ownsVehicle === "Yes" && (
          <div>
            <label className="text-sm text-gray-300">
              Which 2-Wheeler do you own?
            </label>
            <select
              name="vehicleBrand"
              value={formData.vehicleBrand}
              onChange={handleChange}
              className="w-full mt-1 bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm"
            >
              <option value="">Select the brand</option>
              <option>Hero</option>
              <option>Honda</option>
              <option>Bajaj</option>
              <option>TVS</option>
            </select>
          </div>
        )}

        {/* Terms */}
        <label className="flex items-start gap-2 text-xs text-gray-400">
          <input
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            className="accent-red-500 mt-1"
          />
          <span>
            I agree to the <span className="text-red-500">Terms of Use</span>,{" "}
            <span className="text-red-500">Privacy Policy</span>, Rules &
            Regulations, Data Collection Contract, Read the Pledge
          </span>
        </label>

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition"
        >
          Take The Pledge And Sign Up
        </button>
      </form>
    </div>
  );
}
