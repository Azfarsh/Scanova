import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, Settings as Lungs, Microscope, Bot, ArrowRight, Shield, Activity } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Lungs className="h-10 w-10 text-cyan-500" />,
      title: 'Lung Cancer Detection',
      description: 'Early detection of lung cancer using advanced AI algorithms to analyze chest X-rays and CT scans.',
      benefits: ['98% accuracy rate', '5-minute scanning process', 'Instant results'],
    },
    {
      icon: <Microscope className="h-10 w-10 text-cyan-500" />,
      title: 'Breast Cancer Screening',
      description: 'Comprehensive breast cancer screening using machine learning analysis of mammograms.',
      benefits: ['Early detection', 'Non-invasive process', 'Regular monitoring'],
    },
    {
      icon: <Shield className="h-10 w-10 text-cyan-500" />,
      title: 'Skin Cancer Analysis',
      description: 'Advanced dermatological analysis using computer vision to detect potential skin cancer.',
      benefits: ['Real-time analysis', 'High precision', 'Continuous monitoring'],
    },
    {
      icon: <Activity className="h-10 w-10 text-cyan-500" />,
      title: 'Tuberculosis Detection',
      description: 'Rapid TB screening through AI-powered analysis of chest radiographs.',
      benefits: ['Quick results', 'Cost-effective', 'High accuracy'],
    },
    {
      icon: <Brain className="h-10 w-10 text-cyan-500" />,
      title: 'Parkinson Assessment',
      description: 'Early detection of Parkinson disease through movement analysis and AI diagnostics.',
      benefits: ['Non-invasive testing', 'Continuous monitoring', 'Early intervention'],
    },
    {
      icon: <Bot className="h-10 w-10 text-cyan-500" />,
      title: 'AI Health Assistant',
      description: 'Personal health recommendations and guidance powered by advanced AI.',
      benefits: ['24/7 availability', 'Personalized care', 'Instant support'],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative h-[45rem] w-[95rem] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hom.jpg"
            alt="Medical Technology"
            className="w-full h-full object-cover animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-700/50 to-cyan-700/50" />
        </div>
        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Advanced Medical Screening
            <br />
            <span className="text-cyan-300">Powered by AI</span>
          </h1>
          <p className="text-lg text-cyan-50 mb-6 max-w-4xl mx-auto">
            Early detection and prevention through cutting-edge artificial intelligence technology.
            Get accurate medical screening results within minutes.
          </p>
          <div className="flex justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/register">
                Get Started <ArrowRight className="ml-1.5 h-3 w-3" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md text-white border-white/25 hover:bg-white/20 transition-all duration-300"
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 bg-gradient-to-b from-cyan-50 to-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-cyan-900 mb-3">Our Services</h2>
            <p className="text-lg text-cyan-700 max-w-3xl mx-auto">
              Comprehensive medical screening services using state-of-the-art AI technology for early detection and prevention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-900 mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="text-sm text-cyan-600 mb-3 text-center">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-cyan-500 text-sm">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full border-cyan-200 text-cyan-600 hover:bg-cyan-50 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300"
                  >
                    <Link to="/dashboard">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 bg-gradient-to-r from-cyan-600 to-cyan-400 animate-slide-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-lg text-cyan-50 mb-6">
            Join thousands of users who trust our AI-powered medical screening services for early detection and prevention.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white hover:bg-cyan-50 text-cyan-600 transform hover:scale-105 transition-all duration-300"
          >
            <Link to="/register">
              Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;