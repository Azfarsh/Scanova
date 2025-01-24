import { useState } from 'react';
import { UserPlus, Star, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

function Doctors() {
  const [searchQuery, setSearchQuery] = useState('');

  const doctorCategories = [
    {
        specialty: "Cardiologists",
        description: "Specialists in the heart and cardiovascular system",
        doctors: [
          {
            name: "Dr. Ashok Seth",
            qualification: "MD, MBBS, DM, MRCP",
            experience: "38+ years of experience",
            image: "images/Dr.-Ashok-Seth-360x351.jpg.webp",
            rating: 4.9,
            specialization: "Interventional Cardiology"
          },
          {
            name: "Dr. T S Kler",
            qualification: "MD, FRCP, DM",
            experience: "30 years of experience",
            image: "images/Dr.T-S-Kler.webp",
            rating: 4.8,
            specialization: "Interventional Cardiology"
          },
          {
            name: "Dr. Aparna Jaswal",
            qualification: "MD, MBBS, DNB",
            experience: "25+ years of experience",
            image: "images/dr-aparna-jaswal-cardiologist-india.webp",
            rating: 4.7,
            specialization: "Interventional Cardiology"
          },
          {
            name: "Dr. Nidhi Rawal",
            qualification: "MD, FNB, MBBS",
            experience: "10 years of experience",
            image: "images/Dr-Nidhi-Rawal.jpg.webp",
            rating: 4.9,
            specialization: "Pediatric Cardiology"
          }
        ]
      },
      {
        specialty: "Neurologists",
        description: "Specialists in the brain, spine, and nervous system",
        doctors: [
          {
            name: "Dr. Mohit Bhatt",
            qualification: "MD, MBBS",
            experience: "35+ years of experience",
            image: "images/dr.-mohit-bhatt.webp",
            rating: 4.9,
            specialization: "General Neurology"
          },
          {
            name: "Dr. Sandeep Vaishya",
            qualification: "MD, MCh, MS",
            experience: "34+ years of experience",
            image: "images/dr.-sandeep-vaishya.webp",
            rating: 4.7,
            specialization: "Spine Surgery"
          },
          {
            name: "Dr. P K Sachdeva",
            qualification: "MD, MBBS, MS, MCh",
            experience: "33 years of experience",
            image: "images/dr-p-k-sachdeva-neurosurgeon.webp",
            rating: 4.8,
            specialization: "Neurosurgery, Spine Surgery"
          }
        ]
      },
      {
        specialty: "Oncologists",
        description: "Specialists in cancer treatment",
        doctors: [
          {
            name: "Dr. Kamran Khan",
            qualification: "MBBS, MS, Research Fellowship - Thoracic Oncology",
            experience: "18 years of experience",
            image: "images/Dr-Kamran-Khan.webp",
            rating: 4.9,
            specialization: "Surgical Oncology"
          },
          {
            name: "Dr. Anil Kamath",
            qualification: "MD, MBBS, FRCP",
            experience: "18 years of experience",
            image: "/images/Dr-Anil-Kamath.webp",
            rating: 4.8,
            specialization: "Surgical Oncology"
          },
          {
            name: "Dr. Meenu Walia",
            qualification: "MD, MBBS, DNB",
            experience: "27 years of experience",
            image: "images/Dr-Meenu-Walia.webp",
            rating: 4.9,
            specialization: "Medical Oncology"
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