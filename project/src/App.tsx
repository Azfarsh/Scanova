import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import Dashboard from '@/pages/Dashboard';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Documents from './pages/Documents';
import HealthAssistant from './pages/Healthassisstant';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/assisstant" element={<HealthAssistant />} />
        </Routes>
        <Footer />
        <Toaster />
        
      </div>
    </Router>
  );
}

export default App;