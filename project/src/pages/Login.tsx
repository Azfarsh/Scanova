import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google login
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        background: 'white', // Cloud blue background color
      }}
    >
      <div
        className="flex w-[60rem] h-[40rem] rounded-lg overflow-hidden shadow-lg my-14"
        style={{
          maxWidth: '100rem',
        }}
      >
        {/* Image Section */}
        <div
          className="w-2/3 flex items-center justify-center animate-fade-in my-14"
          style={{
            padding: '0.5rem',
            backgroundImage: `url(images/pro.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          
        </div>

        {/* Form Section */}
        <div className="w-2/3 bg-white flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome Back
            </h2>
            <p className="text-sm text-gray-600 mb-8">
              Please sign in to your account
            </p>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email */}
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex justify-end mt-2">
                  <Link
                    to="/forgot-password"
                    className="text-sm text-cyan-600 hover:text-cyan-700 transition"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              {/* Sign In */}
              <Button
                type="submit"
                className="w-full bg-cyan-600 text-white py-2 rounded-md hover:bg-cyan-700 transition duration-200"
              >
                Sign in <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {/* Google Login */}
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative bg-white px-4 text-sm text-gray-500">Or</div>
              </div>
              <Button
                type="button"
                variant="outline"
                className="w-full border border-red-600 text-red-600 py-2 rounded-md hover:bg-red-50 transition duration-200"
                onClick={handleGoogleLogin}
              >
                Sign in with Google
              </Button>
            </form>

            {/* Sign Up */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-cyan-600 hover:text-cyan-700 transition"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
