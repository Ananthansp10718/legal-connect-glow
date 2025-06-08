
import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Eye, 
  Download, 
  Check, 
  X, 
  Calendar,
  Mail,
  Phone,
  FileText,
  Image,
  Bell,
  Settings,
  LogOut,
  Menu,
  Home,
  Shield,
  Users,
  UserCheck,
  BarChart3,
  DollarSign,
  User
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LawyerVerification = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [actionType, setActionType] = useState('');
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const pendingLawyers = [
    {
      id: 1,
      name: 'Dr. Sarah Wilson',
      email: 'sarah.wilson@email.com',
      phone: '+91 98765 43210',
      registrationDate: '2025-01-05',
      specializations: ['Corporate Law', 'Contract Law'],
      status: 'Pending',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=64&h=64&fit=crop&crop=face',
      documents: [
        { type: 'ID Proof', name: 'Aadhar_Card.pdf', url: '#', fileType: 'pdf' },
        { type: 'Bar License', name: 'Bar_License.pdf', url: '#', fileType: 'pdf' },
        { type: 'LLB Certificate', name: 'LLB_Certificate.jpg', url: '#', fileType: 'image' },
        { type: 'Photo', name: 'Profile_Photo.jpg', url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face', fileType: 'image' }
      ]
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      email: 'michael.rodriguez@email.com',
      phone: '+91 87654 32109',
      registrationDate: '2025-01-04',
      specializations: ['Criminal Law', 'Civil Rights'],
      status: 'Pending',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
      documents: [
        { type: 'ID Proof', name: 'Passport.pdf', url: '#', fileType: 'pdf' },
        { type: 'Bar License', name: 'Bar_Council_License.pdf', url: '#', fileType: 'pdf' },
        { type: 'LLM Certificate', name: 'LLM_Criminal_Law.pdf', url: '#', fileType: 'pdf' },
        { type: 'Photo', name: 'Professional_Photo.jpg', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face', fileType: 'image' }
      ]
    },
    {
      id: 3,
      name: 'Dr. Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 76543 21098',
      registrationDate: '2025-01-03',
      specializations: ['Family Law', 'Women Rights'],
      status: 'Pending',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
      documents: [
        { type: 'ID Proof', name: 'Driving_License.pdf', url: '#', fileType: 'pdf' },
        { type: 'Bar License', name: 'State_Bar_License.pdf', url: '#', fileType: 'pdf' },
        { type: 'Specialization Certificate', name: 'Family_Law_Certificate.jpg', url: '#', fileType: 'image' },
        { type: 'Photo', name: 'ID_Photo.jpg', url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face', fileType: 'image' }
      ]
    }
  ];

  const sidebarItems = [
    { name: 'Dashboard', icon: Home, active: false },
    { name: 'Lawyer Verification', icon: Shield, active: true },
    { name: 'Users', icon: Users, active: false },
    { name: 'Lawyers', icon: UserCheck, active: false },
    { name: 'Appointments', icon: Calendar, active: false },
    { name: 'Specialisation', icon: FileText, active: false },
    { name: 'Reports', icon: BarChart3, active: false },
    { name: 'Revenue', icon: DollarSign, active: false }
  ];

  const handleAction = (lawyer, action) => {
    setSelectedLawyer(lawyer);
    setActionType(action);
    setShowConfirmDialog(true);
  };

  const confirmAction = () => {
    console.log(`${actionType} lawyer:`, selectedLawyer);
    setShowConfirmDialog(false);
    setSelectedLawyer(null);
    setActionType('');
  };

  const viewDocument = (document) => {
    setSelectedDocument(document);
    setShowDocumentModal(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Top Navbar */}
      <nav className="bg-white border-b border-[#D9D9D9] px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-[#2E2E2E]"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold text-[#2E2E2E] font-serif">LexConnect</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-[#6E6E6E]">
              <Bell className="h-5 w-5" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-10 h-10 rounded-full bg-[#007AFF] flex items-center justify-center text-white font-semibold">
                  A
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white border border-[#D9D9D9]">
                <DropdownMenuItem className="flex items-center space-x-2 text-[#2E2E2E]">
                  <User className="h-4 w-4" />
                  <span>View Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2 text-[#2E2E2E]">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2 text-[#EA5455]">
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white border-r border-[#D9D9D9] min-h-screen transition-all duration-300 sticky top-[73px] overflow-hidden`}>
          <nav className="p-4">
            <ul className="space-y-2">
              {sidebarItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                      item.active 
                        ? 'bg-[#007AFF] text-white' 
                        : 'text-[#6E6E6E] hover:bg-[#F5F5F5]'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {sidebarOpen && <span className="font-medium">{item.name}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#2E2E2E] mb-2">Lawyer Verification</h1>
            <p className="text-[#6E6E6E]">Review and verify newly registered lawyers awaiting approval.</p>
          </div>

          {/* Search & Filter Panel */}
          <Card className="bg-white border border-[#D9D9D9] rounded-xl shadow-sm mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search by name, email, or specialization..."
                    className="border-[#D9D9D9] focus:border-[#007AFF]"
                    icon={<Search className="h-4 w-4" />}
                  />
                </div>
                <div className="flex gap-3">
                  <Select>
                    <SelectTrigger className="w-48 border-[#D9D9D9]">
                      <SelectValue placeholder="Specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporate">Corporate Law</SelectItem>
                      <SelectItem value="criminal">Criminal Law</SelectItem>
                      <SelectItem value="family">Family Law</SelectItem>
                      <SelectItem value="civil">Civil Law</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-48 border-[#D9D9D9]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lawyer Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {pendingLawyers.map((lawyer) => (
              <Card key={lawyer.id} className="bg-white border border-[#D9D9D9] rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <img 
                      src={lawyer.avatar} 
                      alt={lawyer.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-[#2E2E2E] font-semibold text-lg">{lawyer.name}</h3>
                      <div className="flex items-center space-x-1 text-[#6E6E6E] text-sm mt-1">
                        <Mail className="h-4 w-4" />
                        <span>{lawyer.email}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-[#6E6E6E] text-sm mt-1">
                        <Phone className="h-4 w-4" />
                        <span>{lawyer.phone}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-[#6E6E6E] text-sm mt-1">
                        <Calendar className="h-4 w-4" />
                        <span>Registered: {lawyer.registrationDate}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                      {lawyer.status}
                    </span>
                  </div>

                  {/* Specializations */}
                  <div className="mb-4">
                    <p className="text-[#2E2E2E] font-medium mb-2">Specializations:</p>
                    <div className="flex flex-wrap gap-2">
                      {lawyer.specializations.map((spec, index) => (
                        <span key={index} className="px-3 py-1 bg-[#2C7BE5] bg-opacity-10 text-[#2C7BE5] text-sm rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Documents */}
                  <div className="mb-6">
                    <p className="text-[#2E2E2E] font-medium mb-3">Documents:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {lawyer.documents.map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-[#F5F5F5] rounded-lg">
                          <div className="flex items-center space-x-2">
                            {doc.fileType === 'pdf' ? (
                              <FileText className="h-4 w-4 text-[#EA5455]" />
                            ) : (
                              <Image className="h-4 w-4 text-[#2C7BE5]" />
                            )}
                            <span className="text-[#2E2E2E] text-sm font-medium">{doc.type}</span>
                          </div>
                          <div className="flex space-x-1">
                            <Button 
                              size="sm" 
                              variant="ghost"
                              onClick={() => viewDocument(doc)}
                              className="p-1 h-8 w-8 text-[#2C7BE5] hover:bg-[#2C7BE5] hover:bg-opacity-10"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="ghost"
                              className="p-1 h-8 w-8 text-[#6E6E6E] hover:bg-gray-100"
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button 
                      onClick={() => handleAction(lawyer, 'approve')}
                      className="flex-1 bg-[#28C76F] hover:bg-[#28C76F]/90 text-white"
                    >
                      <Check className="h-4 w-4 mr-2" />
                      Approve
                    </Button>
                    <Button 
                      onClick={() => handleAction(lawyer, 'reject')}
                      variant="destructive"
                      className="flex-1 bg-[#EA5455] hover:bg-[#EA5455]/90"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Reject
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="bg-white border border-[#D9D9D9]">
          <DialogHeader>
            <DialogTitle className="text-[#2E2E2E]">Confirm Action</DialogTitle>
            <DialogDescription className="text-[#6E6E6E]">
              Are you sure you want to {actionType} {selectedLawyer?.name}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)} className="border-[#D9D9D9]">
              Cancel
            </Button>
            <Button 
              onClick={confirmAction}
              className={actionType === 'approve' ? 'bg-[#28C76F] hover:bg-[#28C76F]/90' : 'bg-[#EA5455] hover:bg-[#EA5455]/90'}
            >
              {actionType === 'approve' ? 'Approve' : 'Reject'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Document View Modal */}
      <Dialog open={showDocumentModal} onOpenChange={setShowDocumentModal}>
        <DialogContent className="bg-white border border-[#D9D9D9] max-w-4xl max-h-[80vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-[#2E2E2E]">{selectedDocument?.type}</DialogTitle>
            <DialogDescription className="text-[#6E6E6E]">
              {selectedDocument?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            {selectedDocument?.fileType === 'image' ? (
              <img 
                src={selectedDocument.url} 
                alt={selectedDocument.name}
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <div className="flex items-center justify-center h-96 bg-[#F5F5F5] rounded-lg">
                <div className="text-center">
                  <FileText className="h-16 w-16 text-[#EA5455] mx-auto mb-4" />
                  <p className="text-[#2E2E2E] font-medium">PDF Document</p>
                  <p className="text-[#6E6E6E] text-sm">{selectedDocument?.name}</p>
                  <Button className="mt-4 bg-[#007AFF] hover:bg-[#007AFF]/90">
                    <Download className="h-4 w-4 mr-2" />
                    Download to View
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-white border-t border-[#D9D9D9] py-4 px-6 mt-8">
        <div className="text-center text-[#6E6E6E] text-sm">
          © 2025 LexConnect. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LawyerVerification;
