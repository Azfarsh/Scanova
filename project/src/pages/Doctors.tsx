import { useState } from 'react';
import { UserPlus, Star, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

function Doctors() {
  const [searchQuery, setSearchQuery] = useState('');

  const doctorCategories = [
    {
      specialty: "Cardiologists",
      description: "Heart and cardiovascular system specialists",
      doctors: [
        {
          name: "Dr. Michael Chen",
          qualification: "MD, FACC",
          experience: "15 years experience",
          image: "/api/placeholder/200/200",
          rating: 4.9,
          specialization: "Interventional Cardiology"
        },
        {
          name: "Dr. Sarah Johnson",
          qualification: "MD, PhD",
          experience: "12 years experience",
          image: "/api/placeholder/200/200",
          rating: 4.8,
          specialization: "Nuclear Cardiology"
        },
        {
          name: "Dr. Robert Kim",
          qualification: "MD, FACC",
          experience: "18 years experience",
          image: "/api/placeholder/200/200",
          rating: 4.7,
          specialization: "Pediatric Cardiology"
        },
        {
          name: "Dr. Laura Martinez",
          qualification: "MD, FACC",
          experience: "10 years experience",
          image: "/api/placeholder/200/200",
          rating: 4.9,
          specialization: "Electrophysiology"
        }
      ]
    },
    {
      specialty: "Neurologists",
      description: "Brain, spine, and nervous system specialists",
      doctors: [
        {
          name: "Dr. David Wilson",
          qualification: "MD, FAAN",
          experience: "18 years experience",
          image: "/api/placeholder/200/200",
          rating: 4.9,
          specialization: "Multiple Sclerosis"
        },
        {
          name: "Dr. Emily Brown",
          qualification: "MD, PhD",
          experience: "14 years experience",
          image: "/api/placeholder/200/200",
          rating: 4.7,
          specialization: "Epilepsy"
        },
        {
          name: "Dr. James Park",
          qualification: "MD, FAAN",
          experience: "16 years experience",
          image: "/api/placeholder/200/200",
          rating: 4.8,
          specialization: "Movement Disorders"
        }
      ]
    },
    {
      specialty: "Oncologists",
      description: "Cancer treatment specialists",
      doctors: [
        {
          name: "Dr. Robert Lee",
          qualification: "MD, FASCO",
          experience: "20 years experience",
          image: "/api/placeholder/200/200",
          rating: 4.9,
          specialization: "Medical Oncology"
        },
        {
          name: "Dr. Maria Rodriguez",
          qualification: "MD, FASCO",
          experience: "15 years experience",
          image: "/api/placeholder/200/200",
          rating: 4.8,
          specialization: "Radiation Oncology"
        },
        {
          name: "Dr. Steven Chang",
          qualification: "MD, FASCO",
          experience: "17 years experience",
          image: "/api/placeholder/200/200",
          rating: 4.9,
          specialization: "Surgical Oncology"
        }
      ]
    }
  ];

  // Filter doctors based on search query
  const filteredCategories = doctorCategories.map(category => ({
    ...category,
    doctors: category.doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.doctors.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Specialists</h1>
          <p className="text-gray-600 mb-4">Connect with top medical specialists in various fields</p>
          
          {/* Search Bar */}
          <div className="relative w-full max-w-2xl mb-2">
            <Input
              type="text"
              placeholder="Search by doctor name, specialty, or expertise..."
              className="w-full pl-10 pr-4 py-2 border-gray-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-12">
          {filteredCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Category Header */}
              <div className="bg-cyan-50 p-6 border-b border-cyan-100">
                <h2 className="text-2xl font-bold text-cyan-800">{category.specialty}</h2>
                <p className="text-cyan-600 mt-1">{category.description}</p>
              </div>
              
              {/* Doctors Grid */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.doctors.map((doctor, doctorIndex) => (
                    <div 
                      key={doctorIndex} 
                      className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-20 h-20 rounded-full object-cover border-2 border-cyan-100"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-800 text-lg">{doctor.name}</h3>
                          <p className="text-sm text-gray-600">{doctor.qualification}</p>
                          <p className="text-sm text-cyan-600 font-medium">{doctor.specialization}</p>
                          <p className="text-sm text-gray-500">{doctor.experience}</p>
                          <div className="flex items-center gap-1 text-yellow-400 mt-1">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium">{doctor.rating}</span>
                          </div>
                        </div>
                      </div>
                      <button className="w-full bg-cyan-600 text-white py-2.5 rounded-lg hover:bg-cyan-700 flex items-center justify-center gap-2 transition-colors">
                        <UserPlus className="w-4 h-4" />
                        Schedule Consultation
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;