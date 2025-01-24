import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Scanova</h3>
            <p className="text-white">
              Advanced medical screening solutions powered by AI technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/dashboard" className="text-white hover:text-green-600">Lung Cancer Detection</Link></li>
              <li><Link to="/dashboard" className="text-white hover:text-green-600">Breast Cancer Screening</Link></li>
              <li><Link to="/dashboard" className="text-white hover:text-green-600">Skin Cancer Analysis</Link></li>
              <li><Link to="/dashboard" className="text-white hover:text-green-600">AI Health Assistant</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white hover:text-green-600">About Us</Link></li>
              <li><Link to="/contact" className="text-white hover:text-green-600">Contact</Link></li>
              <li><Link to="/privacy" className="text-white hover:text-green-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white hover:text-green-600">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-600">
                <Facebook className="h-6 w-6" />
              </a>
              
              <a href="#" className="text-white hover:text-green-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-green-600">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-white">
            © {new Date().getFullYear()} Scanova. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
