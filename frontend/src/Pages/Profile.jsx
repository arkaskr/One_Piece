import React, { useContext, useEffect } from "react";
import Title from "../Components/Title";
import {
  CircleUser,
  ClipboardList,
  LogOut,
  UserCog,
  BadgeCheck,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { ShopContext } from "../Context/ShopContext";
import { toast } from "react-toastify"; // Make sure toast is imported

const Profile = () => {
  const membershipStatus = "Premium Member";
  const isPremium = membershipStatus === "Premium Member";

  const { navigate, setToken, setCartItems, token } = useContext(ShopContext);

  // Redirect to login if no token
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const logout = () => {
    toast.info("Logout Successful", { autoClose: 1200 });
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  // If token is missing, you could optionally return null or a loading spinner here,
  // because redirect will happen anyway
  if (!token) return null;

  return (
    <div
      className={`w-[95%] max-w-6xl mx-auto px-4 py-6 rounded-lg ${
        isPremium
          ? "bg-gradient-to-br from-yellow-100 via-yellow-50 to-white border border-yellow-300 shadow-yellow-300"
          : "bg-slate-50"
      }`}
    >
      {/* Title Section */}
      <div className="text-3xl text-center mb-8">
        <Title text1={"WELCOME "} text2={"KING OF THE PIRATES"} />
      </div>

      {/* Profile Content */}
      <div className="flex flex-col lg:flex-row gap-6 px-0 sm:px-4">
        {/* Left Panel */}
        <div className="w-full lg:w-1/4 flex flex-col items-start gap-6">
          {/* Profile Header */}
          <div className="flex items-center gap-3">
            <CircleUser className="w-10 h-10 text-gray-700" />
            <div>
              <p className="text-base font-semibold">Hello,</p>
              <p className="text-sm text-gray-500 flex items-center">
                Monkey D. Luffy
                {isPremium && (
                  <span className="ml-2 text-xs bg-yellow-300 text-yellow-900 px-2 py-0.5 rounded-full font-medium">
                    Premium
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Account Settings */}
          <div
            className={`w-full p-4 rounded-lg shadow ${
              isPremium
                ? "bg-yellow-50 border border-yellow-300"
                : "bg-gray-100"
            }`}
          >
            <p
              className={`font-medium mb-4 ${
                isPremium ? "text-yellow-800" : "text-gray-600"
              }`}
            >
              Account Settings
            </p>

            {/* My Orders */}
            <div
              onClick={() => navigate("/orders")}
              className={`flex items-center gap-3 p-3 rounded-md shadow-sm cursor-pointer hover:bg-opacity-70 ${
                isPremium
                  ? "bg-yellow-100 hover:bg-yellow-200 text-yellow-900"
                  : "bg-white hover:bg-gray-50 text-gray-700"
              }`}
            >
              <ClipboardList />
              <span className="text-sm">My Orders</span>
            </div>

            {/* Edit Profile */}
            <div
              className={`flex items-center gap-3 mt-3 p-3 rounded-md shadow-sm cursor-pointer hover:bg-opacity-70 ${
                isPremium
                  ? "bg-yellow-100 hover:bg-yellow-200 text-yellow-900"
                  : "bg-white hover:bg-gray-50 text-gray-700"
              }`}
            >
              <UserCog />
              <span className="text-sm">Edit Profile</span>
            </div>

            {/* Logout */}
            <div
              onClick={logout}
              className={`flex items-center gap-3 mt-3 p-3 rounded-md shadow-sm cursor-pointer hover:bg-opacity-70 ${
                isPremium
                  ? "bg-yellow-100 hover:bg-yellow-200 text-yellow-900"
                  : "bg-white hover:bg-gray-50 text-gray-700"
              }`}
            >
              <LogOut />
              <span className="text-sm">Logout</span>
            </div>
          </div>
        </div>

        {/* Right Panel - Profile Details */}
        <div className="w-full flex-1 bg-white p-4 sm:p-6 rounded-lg shadow grid gap-4 grid-cols-1 sm:grid-cols-2">
          {/* Email */}
          <div
            className={`p-4 rounded-md flex items-start gap-3 border ${
              isPremium ? "border-yellow-300 bg-yellow-50" : "bg-gray-50"
            }`}
          >
            <Mail
              className={`mt-1 ${
                isPremium ? "text-yellow-600" : "text-gray-600"
              }`}
            />
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p
                className={`text-sm font-medium ${
                  isPremium ? "text-yellow-800" : "text-gray-700"
                }`}
              >
                luffy@onepiece.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div
            className={`p-4 rounded-md flex items-start gap-3 border ${
              isPremium ? "border-yellow-300 bg-yellow-50" : "bg-gray-50"
            }`}
          >
            <Phone
              className={`mt-1 ${
                isPremium ? "text-yellow-600" : "text-gray-600"
              }`}
            />
            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p
                className={`text-sm font-medium ${
                  isPremium ? "text-yellow-800" : "text-gray-700"
                }`}
              >
                +123 456 7890
              </p>
            </div>
          </div>

          {/* Address */}
          <div
            className={`p-4 rounded-md flex items-start gap-3 border sm:col-span-2 ${
              isPremium ? "border-yellow-300 bg-yellow-50" : "bg-gray-50"
            }`}
          >
            <MapPin
              className={`mt-1 ${
                isPremium ? "text-yellow-600" : "text-gray-600"
              }`}
            />
            <div>
              <p className="text-xs text-gray-500">Address</p>
              <p
                className={`text-sm font-medium ${
                  isPremium ? "text-yellow-800" : "text-gray-700"
                }`}
              >
                Thousand Sunny, Grand Line, One Piece World
              </p>
            </div>
          </div>

          {/* Membership */}
          <div
            className={`p-4 rounded-md flex items-start gap-3 border ${
              isPremium ? "border-yellow-300 bg-yellow-100" : "bg-gray-50"
            }`}
          >
            <BadgeCheck
              className={`mt-1 ${
                isPremium ? "text-yellow-600" : "text-gray-600"
              }`}
            />
            <div>
              <p className="text-xs text-gray-500">Membership</p>
              <p
                className={`text-sm font-medium ${
                  isPremium ? "text-yellow-800" : "text-gray-700"
                }`}
              >
                {membershipStatus}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
