import { useState } from 'react';
import { 
  Mic, 
  Heart, 
  Stethoscope, 
  MessageCircle, 
  Pause, 
  Clock, 
  CheckCircle,
  Send,
  RotateCw
} from 'lucide-react';

// Sample health data
const healthData = {
  vitals: {
    heartRate: 72,
    bloodPressure: '120/80',
    oxygenLevel: 98
  },
  recentCheckups: [
    { date: '2024-03-15', type: 'General Health', status: 'Completed' },
    { date: '2024-02-20', type: 'Cardiac Screening', status: 'Normal' }
  ],
  chatHistory: [
    { sender: 'AI', message: 'How are you feeling today?' },
    { sender: 'User', message: 'I\'ve been feeling a bit tired lately.' }
  ]
};

const HealthAssistant = () => {
  const [chatMessages, setChatMessages] = useState(healthData.chatHistory);
  const [newMessage, setNewMessage] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const updatedMessages = [
        ...chatMessages,
        { sender: 'User', message: newMessage }
      ];
      setChatMessages(updatedMessages);
      setNewMessage('');
    }
  };

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    // In a real app, you'd implement voice-to-text functionality here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-cyan-800 mb-2">Personal Health Assistant</h1>
          <p className="text-gray-600">Your comprehensive health monitoring and support system</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Vitals Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Heart className="text-cyan-600 w-8 h-8" />
                <h2 className="text-xl font-semibold text-cyan-800">Vital Signs</h2>
              </div>
              <Clock className="text-gray-400 w-5 h-5" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Heart Rate</span>
                <div className="flex items-center gap-2">
                  <Pause className="text-cyan-500 w-5 h-5" />
                  <span className="font-bold text-cyan-800">{healthData.vitals.heartRate} bpm</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Blood Pressure</span>
                <span className="font-bold text-cyan-800">{healthData.vitals.bloodPressure}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Oxygen Level</span>
                <span className="font-bold text-cyan-800">{healthData.vitals.oxygenLevel}%</span>
              </div>
            </div>
          </div>

          {/* Chatbot Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:col-span-2 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="text-cyan-600 w-8 h-8" />
              <h2 className="text-xl font-semibold text-cyan-800">Health Assistant Chat</h2>
            </div>
            <div className="flex-grow overflow-y-auto mb-4 space-y-3 pr-2">
              {chatMessages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg max-w-[80%] ${
                    msg.sender === 'AI' 
                    ? 'bg-cyan-100 text-cyan-800 self-start' 
                    : 'bg-cyan-500 text-white self-end ml-auto'
                  }`}
                >
                  {msg.message}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <input 
                  type="text" 
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your health question..."
                  className="w-full p-3 pr-10 rounded-lg bg-white text-gray-800 border border-gray-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
                <button 
                  onClick={handleVoiceInput}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 ${
                    isListening ? 'text-red-500' : 'text-cyan-500'
                  }`}
                >
                  <Mic className="w-5 h-5" />
                </button>
              </div>
              <button 
                onClick={handleSendMessage}
                className="bg-cyan-500 text-white p-3 rounded-lg hover:bg-cyan-600"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Recent Checkups */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Stethoscope className="text-cyan-600 w-8 h-8" />
              <h2 className="text-xl font-semibold text-cyan-800">Recent Checkups</h2>
            </div>
            <div className="space-y-4">
              {healthData.recentCheckups.map((checkup, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center p-3 bg-cyan-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-cyan-800">{checkup.type}</p>
                    <p className="text-sm text-gray-600">{checkup.date}</p>
                  </div>
                  <CheckCircle 
                    className={`w-6 h-6 ${
                      checkup.status === 'Completed' 
                      ? 'text-green-500' 
                      : 'text-cyan-500'
                    }`} 
                  />
                </div>
              ))}
              <button className="w-full bg-cyan-500 text-white p-2 rounded-lg hover:bg-cyan-600 flex items-center justify-center gap-2">
                <RotateCw className="w-4 h-4" />
                Refresh Checkups
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthAssistant;
