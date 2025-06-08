
import React, { useState } from 'react';
import { 
  Users, 
  UserCheck, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Bell,
  Search,
  Settings,
  LogOut,
  Menu,
  Home,
  Shield,
  FileText,
  BarChart3,
  User
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sample data for charts
  const bookingTrends = [
    { month: 'Jan', bookings: 65 },
    { month: 'Feb', bookings: 78 },
    { month: 'Mar', bookings: 90 },
    { month: 'Apr', bookings: 81 },
    { month: 'May', bookings: 95 },
    { month: 'Jun', bookings: 110 }
  ];

  const appointmentStatus = [
    { name: 'Completed', value: 65, color: '#28C76F' },
    { name: 'Pending', value: 25, color: '#4BB3FD' },
    { name: 'Cancelled', value: 10, color: '#EA5455' }
  ];

  const revenueGrowth = [
    { month: 'Jan', revenue: 45000 },
    { month: 'Feb', revenue: 52000 },
    { month: 'Mar', revenue: 48000 },
    { month: 'Apr', revenue: 61000 },
    { month: 'May', revenue: 55000 },
    { month: 'Jun', revenue: 67000 }
  ];

  const usersVsLawyers = [
    { month: 'Jan', users: 1200, lawyers: 95 },
    { month: 'Feb', users: 1350, lawyers: 108 },
    { month: 'Mar', users: 1480, lawyers: 122 },
    { month: 'Apr', users: 1620, lawyers: 135 },
    { month: 'May', users: 1750, lawyers: 148 },
    { month: 'Jun', users: 1890, lawyers: 162 }
  ];

  const recentActivities = [
    { id: 1, action: 'New lawyer registered', name: 'Dr. Sarah Wilson', time: '2 hours ago', type: 'lawyer' },
    { id: 2, action: 'Appointment confirmed', name: 'John Smith', time: '3 hours ago', type: 'appointment' },
    { id: 3, action: 'User report submitted', name: 'Alice Johnson', time: '5 hours ago', type: 'report' },
    { id: 4, action: 'Appointment cancelled', name: 'Michael Brown', time: '6 hours ago', type: 'appointment' }
  ];

  const topLawyers = [
    { id: 1, name: 'Dr. Emily Carter', rating: 4.9, specialization: 'Corporate Law', bookings: 156, image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=64&h=64&fit=crop&crop=face' },
    { id: 2, name: 'Robert Martinez', rating: 4.8, specialization: 'Criminal Law', bookings: 142, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face' },
    { id: 3, name: 'Dr. Lisa Anderson', rating: 4.7, specialization: 'Family Law', bookings: 128, image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face' }
  ];

  const sidebarItems = [
    { name: 'Dashboard', icon: Home, active: true },
    { name: 'Lawyer Verification', icon: Shield, active: false },
    { name: 'Users', icon: Users, active: false },
    { name: 'Lawyers', icon: UserCheck, active: false },
    { name: 'Appointments', icon: Calendar, active: false },
    { name: 'Specialisation', icon: FileText, active: false },
    { name: 'Reports', icon: BarChart3, active: false },
    { name: 'Revenue', icon: DollarSign, active: false }
  ];

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
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white border border-[#D9D9D9] rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#6E6E6E] text-sm font-medium">Total Users</p>
                    <p className="text-2xl font-bold text-[#2E2E2E]">2,048</p>
                    <div className="flex items-center space-x-1 mt-2">
                      <TrendingUp className="h-4 w-4 text-[#28C76F]" />
                      <span className="text-[#28C76F] text-sm font-medium">+12.5%</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-[#2C7BE5] bg-opacity-10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-[#2C7BE5]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[#D9D9D9] rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#6E6E6E] text-sm font-medium">Total Lawyers</p>
                    <p className="text-2xl font-bold text-[#2E2E2E]">324</p>
                    <div className="flex items-center space-x-1 mt-2">
                      <TrendingUp className="h-4 w-4 text-[#28C76F]" />
                      <span className="text-[#28C76F] text-sm font-medium">+8.2%</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-[#4BB3FD] bg-opacity-10 rounded-full flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-[#4BB3FD]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[#D9D9D9] rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#6E6E6E] text-sm font-medium">Appointments</p>
                    <p className="text-2xl font-bold text-[#2E2E2E]">1,256</p>
                    <div className="flex items-center space-x-1 mt-2">
                      <TrendingDown className="h-4 w-4 text-[#EA5455]" />
                      <span className="text-[#EA5455] text-sm font-medium">-3.1%</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-[#4BB3FD] bg-opacity-10 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-[#4BB3FD]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[#D9D9D9] rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#6E6E6E] text-sm font-medium">Revenue</p>
                    <p className="text-2xl font-bold text-[#2E2E2E]">₹67,000</p>
                    <div className="flex items-center space-x-1 mt-2">
                      <TrendingUp className="h-4 w-4 text-[#28C76F]" />
                      <span className="text-[#28C76F] text-sm font-medium">+15.3%</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-[#28C76F] bg-opacity-10 rounded-full flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-[#28C76F]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Booking Trends */}
            <Card className="bg-white border border-[#D9D9D9] rounded-xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-[#2E2E2E] text-lg font-semibold">Booking Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={bookingTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#D9D9D9" />
                    <XAxis dataKey="month" stroke="#6E6E6E" />
                    <YAxis stroke="#6E6E6E" />
                    <Tooltip />
                    <Line type="monotone" dataKey="bookings" stroke="#2C7BE5" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Appointment Status */}
            <Card className="bg-white border border-[#D9D9D9] rounded-xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-[#2E2E2E] text-lg font-semibold">Appointment Status</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={appointmentStatus}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {appointmentStatus.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center space-x-4 mt-4">
                  {appointmentStatus.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-[#6E6E6E] text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Revenue Growth */}
            <Card className="bg-white border border-[#D9D9D9] rounded-xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-[#2E2E2E] text-lg font-semibold">Revenue Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueGrowth}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#D9D9D9" />
                    <XAxis dataKey="month" stroke="#6E6E6E" />
                    <YAxis stroke="#6E6E6E" />
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" stroke="#4BB3FD" fill="#4BB3FD" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Users vs Lawyers Growth */}
            <Card className="bg-white border border-[#D9D9D9] rounded-xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-[#2E2E2E] text-lg font-semibold">Users vs Lawyers Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={usersVsLawyers}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#D9D9D9" />
                    <XAxis dataKey="month" stroke="#6E6E6E" />
                    <YAxis stroke="#6E6E6E" />
                    <Tooltip />
                    <Bar dataKey="users" fill="#2C7BE5" name="Users" />
                    <Bar dataKey="lawyers" fill="#4BB3FD" name="Lawyers" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="flex justify-center space-x-4 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#2C7BE5]"></div>
                    <span className="text-[#6E6E6E] text-sm">Users</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#4BB3FD]"></div>
                    <span className="text-[#6E6E6E] text-sm">Lawyers</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity and Top Lawyers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <Card className="bg-white border border-[#D9D9D9] rounded-xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-[#2E2E2E] text-lg font-semibold">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#F5F5F5] transition-colors">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.type === 'lawyer' ? 'bg-[#4BB3FD] bg-opacity-10' : 
                        activity.type === 'appointment' ? 'bg-[#2C7BE5] bg-opacity-10' : 
                        'bg-[#28C76F] bg-opacity-10'
                      }`}>
                        {activity.type === 'lawyer' ? <UserCheck className="h-5 w-5 text-[#4BB3FD]" /> : 
                         activity.type === 'appointment' ? <Calendar className="h-5 w-5 text-[#2C7BE5]" /> : 
                         <FileText className="h-5 w-5 text-[#28C76F]" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-[#2E2E2E] font-medium">{activity.action}</p>
                        <p className="text-[#6E6E6E] text-sm">{activity.name}</p>
                      </div>
                      <span className="text-[#A1A1A1] text-sm">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Performing Lawyers */}
            <Card className="bg-white border border-[#D9D9D9] rounded-xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-[#2E2E2E] text-lg font-semibold">Top Performing Lawyers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topLawyers.map((lawyer) => (
                    <div key={lawyer.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-[#F5F5F5] transition-colors">
                      <img 
                        src={lawyer.image} 
                        alt={lawyer.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="text-[#2E2E2E] font-semibold">{lawyer.name}</h4>
                        <p className="text-[#6E6E6E] text-sm">{lawyer.specialization}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[#2E2E2E] font-semibold">⭐ {lawyer.rating}</p>
                        <p className="text-[#6E6E6E] text-sm">{lawyer.bookings} bookings</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-[#D9D9D9] py-4 px-6 mt-8">
        <div className="text-center text-[#6E6E6E] text-sm">
          © 2025 LexConnect. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboard;
