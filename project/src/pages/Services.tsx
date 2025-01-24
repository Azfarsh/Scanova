
import { 
   Brain, 
   Apple, Star, 
   HeartPulse,  Shield, Dna, 
} from 'lucide-react';
import {  Settings as Lungs, Mic , Microscope
    ,} from 'lucide-react';
const Services = () => {
  const services = [
    {
      title: "Breast Cancer Detection",
      icon: <Microscope className="w-12 h-12 text-cyan-600" />,
      image: "images/can.jpg",
      description: "Early detection of breast cancer using advanced AI analysis of mammography images",
      benefits: [
        "95% accuracy in early detection",
        "Non-invasive screening process",
        "Results within 24-48 hours",
        "Regular monitoring and tracking",
        "Instant report generation"
      ],
      process: "Simply upload your mammogram images through our secure portal. Our AI system will analyze the images and provide detailed results with expert verification.",
     
    },
    {
      title: "Lung Disease Analysis",
      icon: <Lungs className="w-12 h-12 text-cyan-600" />,
      image: "images/can2.jpg",
      description: "Comprehensive analysis of lung conditions including tuberculosis and pneumonia through X-ray imaging",
      benefits: [
        "Multiple condition detection",
        "High accuracy results",
        "Quick turnaround time",
        "Treatment recommendations",
        "Progress tracking"
      ],
      process: "Upload your chest X-ray images to our platform. Our system analyzes for multiple conditions simultaneously.",
     
    },
    {
      title: "Parkinson's Voice Detection",
      icon: <Mic className="w-12 h-12 text-cyan-600" />,
      image: "images/parkin.webp",
      description: "Early detection of Parkinson's disease symptoms through voice pattern analysis",
      benefits: [
        "Non-invasive detection method",
        "Regular monitoring capability",
        "Early symptom identification",
        "Tracking of progression",
        "Secure data storage"
      ],
      process: "Record a voice sample through our mobile app. Our AI analyzes speech patterns for early signs.",
     
    },
    {
      title: "Personalized Health Assistant",
      icon: <Apple className="w-12 h-12 text-cyan-600" />,
      image: "images/peronal.jpg",
      description: "AI-powered health recommendations and medical document management system",
      benefits: [
        "Customized diet plans",
        "Exercise recommendations",
        "Secure document storage",
        "24/7 access to records",
        "Easy sharing with doctors"
      ],
      process: "Complete our health assessment and upload your medical documents. Receive personalized recommendations.",
    
    },
    {
        title: "Skin Cancer Detection",
        icon: <Mic className="w-12 h-12 text-cyan-600" />,
        image: "images/can1.jpg",
        description: "Early detection of breast cancer using advanced AI analysis of mammography images",
        benefits: [
          "93% accuracy in early detection",
        "Non-invasive screening process",
        "Results within 24-48 hours",
        "Regular monitoring and tracking",
        "Instant report generation"
        ],
        process: "Upload your chest X-ray images to our platform. Our system analyzes for multiple conditions simultaneously.",
       
      },
  ];

  const upcomingServices = [
    {
      title: "Heart Sound Analysis",
      icon: <HeartPulse className="w-8 h-8 text-cyan-600" />,
      description: "Detection of heart conditions through sound pattern analysis",
    
      features: ["Early detection of murmurs", "Rhythm analysis", "Real-time monitoring"]
    },
    {
      title: "Mental Health Assistant",
      icon: <Brain className="w-8 h-8 text-cyan-600" />,
      description: "AI-powered mental health monitoring and support",
     
      features: ["Mood tracking", "Voice pattern analysis", "Therapy recommendations"]
    },
   {
      title: "Lung Sound Analysis",
      icon: <Dna className="w-8 h-8 text-cyan-600" />,
      description: "Personal Lung analysis for health insights and disease prevention",
     
      features: ["Disease predisposition", "Nutrition insights", "Medication responses"]
    },
    {
      title: "Advanced Skin Analysis",
      icon: <Shield className="w-8 h-8 text-cyan-600" />,
      description: "Detailed skin condition analysis and tracking",
      
      features: ["Condition tracking", "Treatment effectiveness", "Prevention advice"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-green-50 py-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge AI-powered healthcare solutions for early detection and better treatment outcomes
          </p>
        </div>

        {/* Current Services */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
              style={{
                animation: `slideIn 0.6s ease-out ${index * 0.2}s backwards`
              }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 p-12">
                  <div className="flex items-center mb-8">
                    <div className="bg-gradient-to-br from-cyan-100 to-green-100 p-4 rounded-xl">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 ml-6">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="bg-gradient-to-r from-cyan-50 to-green-50 p-8 rounded-2xl mb-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-gray-700">
                          <Star className="w-5 h-5 text-cyan-600 mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">How it works:</h3>
                    <p className="text-gray-600">{service.process}</p>
                  </div>
                  
                  
                </div>
                
                <div className="md:w-1/2 bg-gradient-to-br from-cyan-500 to-green-500 p-12 flex items-center justify-center">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-lg max-w-full h-auto transform hover:scale-105 transition-duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Services */}
        <div className="mt-32 mb-12">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Upcoming Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingServices.map((service, index) => (
              <div 
                key={service.title}
                className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.2}s backwards`
                }}
              >
                <div className="bg-gradient-to-br from-cyan-100 to-green-100 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-gray-700">
                      <Star className="w-4 h-4 text-cyan-600 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Services;