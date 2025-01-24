import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const countries = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany",
  "France", "Spain", "Italy", "Japan", "China", "India","Palestine","Afganistan"
];

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-gray-50 flex items-center justify-center">
      {/* Added gap at the top and bottom with py-12 */}
      <div className="max-w-6xl w-full bg-white rounded-4xl shadow-xl overflow-hidden py-14 my-14">
        <div className="flex flex-row">
          {/* Left side with image */}
          <div className="w-1/2 bg-gradient-to-br from-cyan-500 to-cyan-600 px-6 flex flex-col justify-center items-center gap-6">
            {/* Added gap between image and surrounding elements */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <h2 className="text-white text-3xl font-bold mb-4">
                  Welcome to Smart Screening
                </h2>
                <p className="text-cyan-50 text-lg">
                  Join our community of healthcare professionals
                </p>
              </div>
            <div className="animate-fade-in">
              <img
                src="images/doc.jpeg"
                alt="Doctor"
                className="rounded-xl shadow-lg mb-8 w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
              />
             
            </div>
          </div>

          {/* Right side with form */}
          <div className="w-1/2 bg-white px-12 py-8">
            {/* Added padding to provide space inside the form */}
            <div className="max-w-md mx-auto animate-slide-up">
              <h1 className="text-3xl font-bold text-gray-800 mb-8">Create Account</h1>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">First Name</label>
                    <input
                      type="text"
                      className="mt-2 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Last Name</label>
                    <input
                      type="text"
                      className="mt-2 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600">Country</label>
                  <select
                    className="mt-2 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600">Email</label>
                  <input
                    type="email"
                    className="mt-2 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600">Phone</label>
                  <input
                    type="tel"
                    className="mt-2 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-600">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="mt-2 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="mt-2 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Create Account
                </button>
              </form>

              <p className="mt-8 text-center text-gray-600">
                Already have an account? 
                <a href="/login" className="text-cyan-600 hover:text-cyan-700 font-medium ml-2">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
