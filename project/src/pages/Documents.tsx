import { useState } from 'react';
import { Search, Upload, Download, Eye, Trash2, FileText, Filter, SortDesc, Grid, List } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Document {
  id: string;
  name: string;
  type: string;
  date: string;
  size: string;
  status?: string;
}

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [documents] = useState<Document[]>([
    { id: '1', name: 'Blood Test Results.pdf', type: 'PDF', date: '2024-03-10', size: '2.4 MB', status: 'Recent' },
    { id: '2', name: 'X-Ray Report.jpg', type: 'Image', date: '2024-03-09', size: '5.1 MB', status: 'Important' },
    { id: '3', name: 'Medical History.docx', type: 'Document', date: '2024-03-08', size: '1.2 MB' },
    { id: '4', name: 'Prescription.pdf', type: 'PDF', date: '2024-03-07', size: '0.5 MB' },
    { id: '5', name: 'MRI Scan.dcm', type: 'DICOM', date: '2024-03-06', size: '15.8 MB', status: 'Archived' },
  ]);

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTypeColor = (type: string) => {
    const colors = {
      'PDF': 'bg-cyan-100 text-cyan-600',
      'Image': 'bg-emerald-100 text-emerald-600',
      'Document': 'bg-blue-100 text-blue-600',
      'DICOM': 'bg-purple-100 text-purple-600'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  const getStatusBadge = (status?: string) => {
    if (!status) return null;
    
    const statusColors = {
      'Recent': 'bg-cyan-100 text-cyan-600',
      'Important': 'bg-rose-100 text-rose-600',
      'Archived': 'bg-gray-100 text-gray-600'
    };

    if (status in statusColors) {
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status as keyof typeof statusColors]}`}>
          {status}
        </span>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Stats */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Medical Documents</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-cyan-500 to-cyan-600">
              <CardContent className="p-4">
                <p className="text-white text-sm">Total Documents</p>
                <p className="text-white text-2xl font-bold">{documents.length}</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600">
              <CardContent className="p-4">
                <p className="text-white text-sm">Recent Uploads</p>
                <p className="text-white text-2xl font-bold">3</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600">
              <CardContent className="p-4">
                <p className="text-white text-sm">Storage Used</p>
                <p className="text-white text-2xl font-bold">24.8 MB</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600">
              <CardContent className="p-4">
                <p className="text-white text-sm">Shared Files</p>
                <p className="text-white text-2xl font-bold">2</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Search and Actions Bar */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative w-full">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-cyan-500" />
              <input
                type="text"
                placeholder="Search documents..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button className="p-2 text-gray-600 hover:text-cyan-600 rounded-lg hover:bg-cyan-50">
                <Filter className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-cyan-600 rounded-lg hover:bg-cyan-50">
                <SortDesc className="w-5 h-5" />
              </button>
              <button 
                className="p-2 text-gray-600 hover:text-cyan-600 rounded-lg hover:bg-cyan-50"
                onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
              >
                {viewMode === 'list' ? <Grid className="w-5 h-5" /> : <List className="w-5 h-5" />}
              </button>
            </div>
            <button className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-cyan-700 flex items-center gap-2 shadow-sm">
              <Upload className="w-5 h-5" />
              Upload Document
            </button>
          </div>
        </div>

        {/* Documents Grid/List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {viewMode === 'list' ? (
            <div className="grid grid-cols-1 divide-y divide-gray-200">
              {filteredDocuments.map((doc) => (
                <div key={doc.id} className="p-4 hover:bg-gray-50 transition-colors duration-150">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${getTypeColor(doc.type)}`}>
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">{doc.name}</h3>
                        <div className="flex gap-4 text-sm text-gray-500">
                          <span>{doc.type}</span>
                          <span>{doc.date}</span>
                          <span>{doc.size}</span>
                          {getStatusBadge(doc.status)}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-600 hover:text-cyan-600 rounded-lg hover:bg-cyan-50 transition-colors duration-150">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-cyan-600 rounded-lg hover:bg-cyan-50 transition-colors duration-150">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors duration-150">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {filteredDocuments.map((doc) => (
                <Card key={doc.id} className="hover:shadow-md transition-shadow duration-150">
                  <CardContent className="p-4">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className={`p-2 rounded-lg ${getTypeColor(doc.type)}`}>
                          <FileText className="w-6 h-6" />
                        </div>
                        {getStatusBadge(doc.status)}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800 mb-1">{doc.name}</h3>
                        <div className="text-sm text-gray-500 space-y-1">
                          <div>{doc.type}</div>
                          <div>{doc.date}</div>
                          <div>{doc.size}</div>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2 pt-2">
                        <button className="p-2 text-gray-600 hover:text-cyan-600 rounded-lg hover:bg-cyan-50">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-cyan-600 rounded-lg hover:bg-cyan-50">
                          <Download className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-rose-600 rounded-lg hover:bg-rose-50">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Documents;