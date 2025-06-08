import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Shield, 
  ShieldOff,
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
  MoreHorizontal
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

const UsersListing = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [actionType, setActionType] = useState('');
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'cards'

  const users = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      registeredOn: '2024-12-15',
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
      totalAppointments: 12,
      lastLogin: '2025-01-06'
    },
    {
      id: 2,
      name: 'Alice Johnson',
      email: 'alice.johnson@email.com',
      registeredOn: '2024-11-28',
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
      totalAppointments: 8,
      lastLogin: '2025-01-05'
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'michael.brown@email.com',
      registeredOn: '2024-10-10',
      status: 'Blocked',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
      totalAppointments: 3,
      lastLogin: '2024-12-20'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@email.com',
      registeredOn: '2024-12-02',
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=64&h=64&fit=crop&crop=face',
      totalAppointments: 15,
      lastLogin: '2025-01-06'
    },
    {
      id: 5,
      name: 'David Miller',
      email: 'david.miller@email.com',
      registeredOn: '2024-09-15',
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face',
      totalAppointments: 22,
      lastLogin: '2025-01-04'
    },
    {
      id: 6,
      name: 'Emma Davis',
      email: 'emma.davis@email.com',
      registeredOn: '2024-08-20',
      status: 'Blocked',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
      totalAppointments: 1,
      lastLogin: '2024-11-15'
    }
  ];

  const sidebarItems = [
    { name: 'Dashboard', icon: Home, active: false },
    { name: 'Lawyer Verification', icon: Shield, active: false },
    { name: 'Users', icon: Users, active: true },
    { name: 'Lawyers', icon: UserCheck, active: false },
    { name: 'Appointments', icon: Calendar, active: false },
    { name: 'Specialisation', icon: FileText, active: false },
    { name: 'Reports', icon: BarChart3, active: false },
    { name: 'Revenue', icon: DollarSign, active: false }
  ];

  const handleAction = (user, action) => {
    setSelectedUser(user);
    setActionType(action);
    setShowConfirmDialog(true);
  };

  const confirmAction = () => {
    console.log(`${actionType} user:`, selectedUser);
    setShowConfirmDialog(false);
    setSelectedUser(null);
    setActionType('');
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
            <h1 className="text-3xl font-bold text-[#2E2E2E] mb-2">Users</h1>
            <p className="text-[#6E6E6E]">Manage platform clients. Total Users: {users.length}</p>
          </div>

          {/* Search & Filter Panel */}
          <Card className="bg-white border border-[#D9D9D9] rounded-xl shadow-sm mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1 relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6E6E6E]" />
                  <Input
                    placeholder="Search by name or email..."
                    className="border-[#D9D9D9] focus:border-[#007AFF] pl-10"
                  />
                </div>
                <div className="flex gap-3">
                  <Select>
                    <SelectTrigger className="w-48 border-[#D9D9D9]">
                      <SelectValue placeholder="All Status" />
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

          {/* Users Display */}
          {viewMode === 'table' ? (
            <Card className="bg-white border border-[#D9D9D9] rounded-xl shadow-sm">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-[#D9D9D9]">
                      <TableHead className="text-[#2E2E2E] font-semibold">User</TableHead>
                      <TableHead className="text-[#2E2E2E] font-semibold">Email</TableHead>
                      <TableHead className="text-[#2E2E2E] font-semibold">Registered On</TableHead>
                      <TableHead className="text-[#2E2E2E] font-semibold">Status</TableHead>
                      <TableHead className="text-[#2E2E2E] font-semibold">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id} className="border-b border-[#D9D9D9] hover:bg-[#F5F5F5] transition-colors">
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <img 
                              src={user.avatar} 
                              alt={user.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="text-[#2E2E2E] font-medium">{user.name}</p>
                              <p className="text-[#6E6E6E] text-sm">{user.totalAppointments} appointments</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-[#6E6E6E]">{user.email}</TableCell>
                        <TableCell className="text-[#6E6E6E]">{user.registeredOn}</TableCell>
                        <TableCell>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            user.status === 'Active' 
                              ? 'bg-[#28C76F] bg-opacity-10 text-[#28C76F]' 
                              : 'bg-[#EA5455] bg-opacity-10 text-[#EA5455]'
                          }`}>
                            {user.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          {user.status === 'Active' ? (
                            <Button 
                              size="sm"
                              onClick={() => handleAction(user, 'block')}
                              className="bg-[#EA5455] hover:bg-[#EA5455]/90 text-white"
                            >
                              <ShieldOff className="h-4 w-4 mr-1" />
                              Block
                            </Button>
                          ) : (
                            <Button 
                              size="sm"
                              onClick={() => handleAction(user, 'unblock')}
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
              {users.map((user) => (
                <Card key={user.id} className="bg-white border border-[#D9D9D9] rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={user.avatar} 
                          alt={user.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-[#2E2E2E] font-semibold">{user.name}</h3>
                          <p className="text-[#6E6E6E] text-sm">{user.email}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.status === 'Active' 
                          ? 'bg-[#28C76F] bg-opacity-10 text-[#28C76F]' 
                          : 'bg-[#EA5455] bg-opacity-10 text-[#EA5455]'
                      }`}>
                        {user.status}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#6E6E6E]">Registered:</span>
                        <span className="text-[#2E2E2E]">{user.registeredOn}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#6E6E6E]">Appointments:</span>
                        <span className="text-[#2E2E2E]">{user.totalAppointments}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[#6E6E6E]">Last Login:</span>
                        <span className="text-[#2E2E2E]">{user.lastLogin}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      {user.status === 'Active' ? (
                        <Button 
                          size="sm"
                          onClick={() => handleAction(user, 'block')}
                          className="flex-1 bg-[#EA5455] hover:bg-[#EA5455]/90 text-white"
                        >
                          <ShieldOff className="h-4 w-4 mr-1" />
                          Block
                        </Button>
                      ) : (
                        <Button 
                          size="sm"
                          onClick={() => handleAction(user, 'unblock')}
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
              Are you sure you want to {actionType} {selectedUser?.name}? 
              {actionType === 'block' && ' They will no longer be able to access the platform.'}
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

export default UsersListing;
