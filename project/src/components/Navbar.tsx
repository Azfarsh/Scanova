import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  UserCircle, 
  Menu, 
  X, 
  Home, 
  Info, 
  Settings,
  MessageSquare,
  LogIn,
  UserCog
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-cyan-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                src="/images/lolo.jpg"
                alt="Logo"
                className="h-14 w-14 rounded-full"
              />
              <span className="text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors duration-300">
                Scanova
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className="flex items-center space-x-1 px-4 py-2 text-white hover:bg-cyan-400 rounded-lg transition-all duration-300"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            
            <Link 
              to="/services" 
              className="flex items-center space-x-1 px-4 py-2 text-white hover:bg-cyan-400 rounded-lg transition-all duration-300"
            >
              <Settings className="h-4 w-4" />
              <span>Services</span>
            </Link>
            
            <Link 
              to="/about" 
              className="flex items-center space-x-1 px-4 py-2 text-white hover:bg-cyan-400 rounded-lg transition-all duration-300"
            >
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
            
            <Link 
              to="/contact" 
              className="flex items-center space-x-1 px-4 py-2 text-white hover:bg-cyan-400 rounded-lg transition-all duration-300"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Contact</span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div 
                  className="ml-2 text-white hover:bg-cyan-400 transition-colors duration-300 p-2 rounded-full cursor-pointer"
                >
                  <UserCircle className="h-6 w-6" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 mt-2 bg-white shadow-lg rounded-lg border-none">
                <DropdownMenuItem className="flex items-center space-x-2 hover:bg-cyan-50 cursor-pointer">
                  <UserCog className="h-4 w-4" />
                  <Link to="/profile" className="flex-1">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2 hover:bg-cyan-50 cursor-pointer">
                  <LogIn className="h-4 w-4" />
                  <Link to="/login" className="flex-1">Login</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-cyan-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-cyan-600">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="flex items-center space-x-2 px-3 py-2 text-cyan-600 hover:bg-cyan-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            
            <Link
              to="/services"
              className="flex items-center space-x-2 px-3 py-2 text-cyan-600 hover:bg-cyan-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="h-4 w-4" />
              <span>Services</span>
            </Link>
            
            <Link
              to="/about"
              className="flex items-center space-x-2 px-3 py-2 text-cyan-600 hover:bg-cyan-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
            
            <Link
              to="/contact"
              className="flex items-center space-x-2 px-3 py-2 text-cyan-600 hover:bg-cyan-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <MessageSquare className="h-4 w-4" />
              <span>Contact</span>
            </Link>
            
            <Link
              to="/profile"
              className="flex items-center space-x-2 px-3 py-2 text-cyan-600 hover:bg-cyan-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <UserCog className="h-4 w-4" />
              <span>Profile</span>
            </Link>
            
            <Link
              to="/login"
              className="flex items-center space-x-2 px-3 py-2 text-cyan-600 hover:bg-cyan-50 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
