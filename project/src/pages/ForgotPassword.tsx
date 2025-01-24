import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success('Reset link sent to your email');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(to bottom, lightcyan, white)',
      }}
    >
      <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Reset Password</h2>
          <p className="mt-2 text-gray-600">
            {!isSubmitted
              ? "Enter your email and we'll send you instructions to reset your password"
              : 'Check your email for the reset link'}
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="pl-10 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              Send Reset Link <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <div className="text-center">
              <Link
                to="/login"
                className="inline-flex items-center text-sm text-green-600 hover:text-green-500"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Login
              </Link>
            </div>
          </form>
        ) : (
          <div className="mt-8 space-y-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800">
                We've sent a password reset link to <strong>{email}</strong>. Please check your
                email and follow the instructions to reset your password.
              </p>
            </div>

            <div className="text-center space-y-4">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => setIsSubmitted(false)}
              >
                Try another email
              </Button>

              <Link
                to="/login"
                className="inline-flex items-center text-sm text-green-600 hover:text-green-500"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
