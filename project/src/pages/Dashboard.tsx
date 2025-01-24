import { useState, useRef } from "react";
import { Search, FileText, Brain, Settings as Lungs, Microscope, ChevronRight, Send, Mic, Upload, Image } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const documentSectionRef = useRef<HTMLDivElement>(null);

  const scrollToDocumentSection = () => {
    documentSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Skin Cancer Detection",
      icon: <Microscope className="w-6 h-6" />,
      description: "Upload skin images for instant AI analysis",
    },
    {
      title: "Breast Cancer Screening",
      icon: <Microscope className="w-6 h-6" />,
      description: "Analyze mammogram images with AI",
    },
    {
      title: "Lung Cancer Detection",
      icon: <Lungs className="w-6 h-6" />,
      description: "CT scan and X-ray analysis",
    },
    {
      title: "Tuberculosis Screening",
      icon: <Lungs className="w-6 h-6" />,
      description: "X-ray and CT scan analysis",
    },
    {
      title: "Parkinson's Detection",
      icon: <Brain className="w-6 h-6" />,
      description: "Voice recording analysis",
    },
    {
      title: "Medical Records",
      icon: <FileText className="w-6 h-6" />,
      description: "Store and manage your health records",
    },
  ];

  const doctors = [
    {
      name: "Dr. Sarah Chen",
      specialty: "Oncologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200",
      rating: 4.9,
    },
    {
      name: "Dr. James Wilson",
      specialty: "Neurologist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200",
      rating: 4.8,
    },
    {
      name: "Dr. Emily Parker",
      specialty: "Pulmonologist",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200",
      rating: 4.9,
    },
    {
      name: "Dr. John Carter",
      specialty: "Dermatologist",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=200",
      rating: 4.7,
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-cyan-500 text-white p-4 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Scanova</h1>
          <div className="relative flex-1 max-w-xl mx-4">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-800" />
            <input
              type="text"
              placeholder="Search your medical records..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
          <button onClick={scrollToDocumentSection} className="bg-cyan-600 p-2 rounded-lg hover:bg-cyan-700 flex items-center gap-2">
  <Upload className="w-5 h-5" />
  <span className="text-white">Upload</span>
</button>

          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 px-4 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-400 rounded-xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome to Scanova</h2>
          <p className="text-lg opacity-90">
            Your AI-powered healthcare assistant
          </p>
        </div>

        {/* Services Section */}
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-cyan-100 rounded-lg text-cyan-600">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h4>
              </div>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <button
                className="flex items-center text-cyan-500"
                onClick={() => setIsChatbotVisible(true)}
              >
                Start Screening <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Doctors Carousel */}
        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          Connect to Doctors
        </h3>
        <Slider {...carouselSettings} className="mb-12">
          {doctors.map((doctor, index) => (
            <div key={index} className="px-2">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {doctor.name}
                    </h4>
                    <p className="text-gray-600">{doctor.specialty}</p>
                    <div className="text-yellow-400">★ {doctor.rating}</div>
                  </div>
                </div>
                <button className="bg-cyan-600 w-full py-2 rounded-lg text-white hover:bg-cyan-500">
                  Connect to Doctor
                </button>
              </div>
            </div>
          ))}
        </Slider>

       {/* Document Storage Section */}
       <h3 className="text-2xl font-bold mb-6 text-gray-800" ref={documentSectionRef}>
  Document Storage
</h3>
<div className="bg-white p-6 rounded-xl shadow-sm">
  <p className="text-gray-600 mb-4">
    Upload and manage your medical documents securely.
  </p>
  <div className="flex flex-col gap-4">
    {/* Removed image and mic icons, kept their input types */}
    
    <div className="flex items-center gap-4">
      <Upload className="w-6 h-6 text-cyan-500" />
      <input type="file" accept=".pdf,.doc,.docx" className="flex-1" />
    </div>
   
    <button className="bg-cyan-600 px-4 py-2 rounded-lg text-white hover:bg-cyan-500 w-full">
      Upload Files
    </button>
  </div>
</div>

      </main>

  {/* Chatbot Sidebar */}
{isChatbotVisible && (
  <div className="fixed right-4 bottom-4 z-50 w-96">
    <div className="bg-white rounded-lg shadow-xl">
      <div className="bg-cyan-400 p-4 rounded-t-lg text-white flex justify-between items-center">
        <h3 className="font-semibold">Scanova AI Assistant</h3>
        <button
          onClick={() => setIsChatbotVisible(false)}
          className="text-white font-bold"
        >
          ✕
        </button>
      </div>
      <div className="h-96 p-4 overflow-y-auto bg-gray-200">
        <div className="bg-white p-3 rounded-lg mb-4">
          Hello! How can I assist you today?
        </div>
      </div>
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none bg-white text-black"
          />
          <button className="bg-cyan-500 text-white p-2 rounded-lg">
            <Send />
          </button>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <label htmlFor="voiceUpload" className="cursor-pointer">
            <Mic className="w-6 h-6 text-cyan-500" />
          </label>
          <input
            type="file"
            id="voiceUpload"
            className="hidden"
            accept="audio/*"
          />
          <label htmlFor="imageUpload" className="cursor-pointer">
            <Image className="w-6 h-6 text-cyan-500" />
          </label>
          <input
            type="file"
            id="imageUpload"
            className="hidden"
            accept="image/*"
          />
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default Dashboard;
