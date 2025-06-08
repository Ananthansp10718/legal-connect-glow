import React, { useState } from 'react';
import { 
  Search, 
  Shield, 
  ShieldOff,
  CheckCircle,
  XCircle,
  Clock,
  Bell,
  Settings,
  LogOut,
  Menu,
  Home,
  Users,
  UserCheck,
  Calendar,
  FileText,
  BarChart3,
  DollarSign,
  User,
  MoreHorizontal,
  Star
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const LawyersListing = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [actionType, setActionType] = useState('');
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'cards'

  const lawyers = [
    {
      id: 1,
      name: 'Dr. Emily Carter',
      email: 'emily.carter@email.com',
      phone: '+91 98765 43210',
      registeredOn: '2024-11-15',
      verificationStatus: 'Verified',
      accountStatus: 'Active',
      specializations: ['Corporate Law', 'Contract Law'],
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=64&h=64&fit=crop&crop=face',
      rating: 4.9,
      totalAppointments: 156,
      experience: '8 years'
    },
    {
      id: 2,
      name: 'Robert Martinez',
      email: 'robert.martinez@email.com',
      phone: '+91 87654 32109',
      registeredOn: '2024-10-20',
      verificationStatus: 'Verified',
      accountStatus: 'Active',
      specializations: ['Criminal Law', 'Civil Rights'],
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
      rating: 4.8,
      totalAppointments: 142,
      experience: '12 years'
    },
    {
      id: 3,
      name: 'Dr. Lisa Anderson',
      email: 'lisa.anderson@email.com',
      phone: '+91 76543 21098',
      registeredOn: '2024-12-01',
      verificationStatus: 'Pending',
      accountStatus: 'Active',
      specializations: ['Family Law', 'Divorce Law'],
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
      rating: 4.7,
      totalAppointments: 89,
      experience: '6 years'
    },
    {
      id: 4,
      name: 'Michael Thompson',
      email: 'michael.thompson@email.com',
      phone: '+91 65432 10987',
      registeredOn: '2024-09-10',
      verificationStatus: 'Verified',
      accountStatus: 'Blocked',
      specializations: ['Tax Law', 'Business Law'],
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
      rating: 4.6,
      totalAppointments: 67,
      experience: '10 years'
    },
    {
      id: 5,
      name: 'Dr. Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 54321 09876',
      registeredOn: '2024-08-15',
      verificationStatus: 'Rejected',
      accountStatus: 'Active',
      specializations: ['Immigration Law', 'International Law'],
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
      rating: 4.3,
      totalAppointments: 23,
      experience: '4 years'
    }
  ];

  const sidebarItems = [
    { name: 'Dashboard', icon: Home, active: false },
    { name: 'Lawyer Verification', icon: Shield, active: false },
    { name: 'Users', icon: Users, active: false },
    { name: 'Lawyers', icon: UserCheck, active: true },
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

  const getVerificationStatusIcon = (status) => {
    switch (status) {
      case 'Verified':
        return <CheckCircle className="h-4 w-4 text-[#28C76F]" />;
      case 'Pending':
        return <Clock className="h-4 w-4 text-[#FACC15]" />;
      case 'Rejected':
        return <XCircle className="h-4 w-4 text-[#EA5455]" />;
      default:
        return null;
    }
  };

  const getVerificationStatusColor = (status) => {
    switch (status) {
      case 'Verified':
        return 'bg-[#28C76F] bg-opacity-10 text-[#28C76F]';
      case 'Pending':
        return 'bg-[#FACC15] bg-opacity-10 text-[#FACC15]';
      case 'Rejected':
        return 'bg-[#EA5455] bg-opacity-10 text-[#EA5455]';
      default:
        return 'bg-gray-100 text-gray-600';
    }
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
            <h1 className="text-3xl font-bold text-[#2E2E2E] mb-2">Lawyers</h1>
            <p className="text-[#6E6E6E]">Manage all registered legal professionals on the platform. Total: {lawyers.length}</p>
          </div>

          {/* Search & Filter Panel */}
          <Card className="bg-white border border-[#D9D9D9] rounded-xl shadow-sm mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1 relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6E6E6E]" />
                  <Input
                    placeholder="Search by name, email, or specialization..."
                    className="border-[#D9D9D9] focus:border-[#007AFF] pl-10"
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
                      <SelectItem value="tax">Tax Law</SelectItem>
                      <SelectItem value="immigration">Immigration Law</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-48 border-[#D9D9D9]">
                      <SelectValue placeholder="Verification Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="verified">Verified</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-48 border-[#D9D9D9]">
                      <SelectValue placeholder="Account Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="blocked">Blocked</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex border border-[#D9D9D9] rounded-lg">
                    <Button 
                      variant={viewMode === 'table' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('table')}
                      className={viewMode === 'table' ? 'bg-[#007AFF] text-white' : 'text-[#6E6E6E]'}
                    >
                      Table
                    </Button>
                    <Button 
                      variant={viewMode === 'cards' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('cards')}
                      className={viewMode === 'cards' ? 'bg-[#007AFF] text-white' : 'text-[#6E6E6E]'}
                    >
                      Cards
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lawyers Display */}
          {viewMode === 'table' ? (
            <Card className="bg-white border border-[#D9D9D9] rounded-xl shadow-sm">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-[#D9D9D9]">
                      <TableHead className="text-[#2E2E2E] font-semibold">Lawyer</TableHead>
                      <TableHead className="text-[#2E2E2E] font-semibold">Contact</TableHead>
                      <TableHead className="text-[#2E2E2E] font-semibold">Verification</TableHead>
                      <TableHead className="text-[#2E2E2E] font-semibold">Account Status</TableHead>
                      <TableHead className="text-[#2E2E2E] font-semibold">Performance</TableHead>
                      <TableHead className="text-[#2E2E2E] font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {lawyers.map((lawyer) => (
                      <TableRow key={lawyer.id} className="border-b border-[#D9D9D9] hover:bg-[#F5F5F5] transition-colors">
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <img 
                              src={lawyer.avatar} 
                              alt={lawyer.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="text-[#2E2E2E] font-medium">{lawyer.name}</p>
                              <p className="text-[#6E6E6E] text-sm">{lawyer.experience} experience</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p className="text-[#2E2E2E]">{lawyer.email}</p>
                            <p className="text-[#6E6E6E]">{lawyer.phone}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 w-fit ${getVerificationStatusColor(lawyer.verificationStatus)}`}>
                            {getVerificationStatusIcon(lawyer.verificationStatus)}
                            <span>{lawyer.verificationStatus}</span>
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            lawyer.accountStatus === 'Active' 
                              ? 'bg-[#28C76F] bg-opacity-10 text-[#28C76F]' 
                              : 'bg-[#EA5455] bg-opacity-10 text-[#EA5455]'
                          }`}>
                            {lawyer.accountStatus}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span className="text-[#2E2E2E] font-medium">{lawyer.rating}</span>
                            </div>
                            <p className="text-[#6E6E6E]">{lawyer.totalAppointments} appointments</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          {lawyer.accountStatus === 'Active' ? (
                            <Button 
                              size="sm"
                              onClick={() => handleAction(lawyer, 'block')}
                              className="bg-[#EA5455] hover:bg-[#EA5455]/90 text-white"
                            >
                              <ShieldOff className="h-4 w-4 mr-1" />
                              Block
                            </Button>
                          ) : (
                            <Button 
                              size="sm"
                              onClick={() => handleAction(lawyer, 'unblock')}
                              className="bg-[#28C76F] hover:bg-[#28C76F]/90 text-white"
                            >
                              <Shield className="h-4 w-4 mr-1" />
                              Unblock
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lawyers.map((lawyer) => (
                <Card key={lawyer.id} className="bg-white border border-[#D9D9D9] rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={lawyer.avatar} 
                          alt={lawyer.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-[#2E2E2E] font-semibold">{lawyer.name}</h3>
                          <p className="text-[#6E6E6E] text-sm">{lawyer.experience} experience</p>
                          <div className="flex items-center space-x-1 mt-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            <span className="text-[#2E2E2E] text-sm font-medium">{lawyer.rating}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        lawyer.accountStatus === 'Active' 
                          ? 'bg-[#28C76F] bg-opacity-10 text-[#28C76F]' 
                          : 'bg-[#EA5455] bg-opacity-10 text-[#EA5455]'
                      }`}>
                        {lawyer.accountStatus}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#6E6E6E]">Email:</span>
                        <span className="text-[#2E2E2E] truncate ml-2">{lawyer.email}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#6E6E6E]">Verification:</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getVerificationStatusColor(lawyer.verificationStatus)}`}>
                          {getVerificationStatusIcon(lawyer.verificationStatus)}
                          <span>{lawyer.verificationStatus}</span>
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#6E6E6E]">Appointments:</span>
                        <span className="text-[#2E2E2E]">{lawyer.totalAppointments}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-[#6E6E6E] text-sm mb-2">Specializations:</p>
                      <div className="flex flex-wrap gap-1">
                        {lawyer.specializations.map((spec, index) => (
                          <span key={index} className="px-2 py-1 bg-[#2C7BE5] bg-opacity-10 text-[#2C7BE5] text-xs rounded-full">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      {lawyer.accountStatus === 'Active' ? (
                        <Button 
                          size="sm"
                          onClick={() => handleAction(lawyer, 'block')}
                          className="flex-1 bg-[#EA5455] hover:bg-[#EA5455]/90 text-white"
                        >
                          <ShieldOff className="h-4 w-4 mr-1" />
                          Block
                        </Button>
                      ) : (
                        <Button 
                          size="sm"
                          onClick={() => handleAction(lawyer, 'unblock')}
                          className="flex-1 bg-[#28C76F] hover:bg-[#28C76F]/90 text-white"
                        >
                          <Shield className="h-4 w-4 mr-1" />
                          Unblock
                        </Button>
                      )}
                      <Button 
                        size="sm"
                        variant="outline"
                        className="border-[#D9D9D9]"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="bg-white border border-[#D9D9D9]">
          <DialogHeader>
            <DialogTitle className="text-[#2E2E2E]">Confirm Action</DialogTitle>
            <DialogDescription className="text-[#6E6E6E]">
              Are you sure you want to {actionType} {selectedLawyer?.name}? 
              {actionType === 'block' && ' They will no longer be able to provide legal services on the platform.'}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)} className="border-[#D9D9D9]">
              Cancel
            </Button>
            <Button 
              onClick={confirmAction}
              className={actionType === 'unblock' ? 'bg-[#28C76F] hover:bg-[#28C76F]/90' : 'bg-[#EA5455] hover:bg-[#EA5455]/90'}
            >
              {actionType === 'unblock' ? 'Unblock' : 'Block'}
            </Button>
          </DialogFooter>
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

export default LawyersListing;
