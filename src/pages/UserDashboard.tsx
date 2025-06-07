import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Bell, 
  User, 
  LogOut, 
  Search, 
  Calendar, 
  MessageCircle, 
  FileText, 
  Video, 
  MapPin, 
  Star,
  Clock,
  ArrowRight,
  Users,
  CheckCircle,
  Upload,
  ChevronDown
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const UserDashboard = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const upcomingAppointments = [
    {
      id: 1,
      lawyer: "Dr. Sarah Johnson",
      specialty: "Corporate Law",
      date: "Today",
      time: "2:00 PM",
      type: "Online",
      status: "Confirmed",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      lawyer: "Mr. David Chen",
      specialty: "Criminal Defense",
      date: "Tomorrow",
      time: "10:30 AM",
      type: "Offline",
      status: "Pending",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const recentActivities = [
    { icon: FileText, text: "Document uploaded - Contract Review.pdf", time: "2 hours ago", color: "text-blue-600" },
    { icon: MessageCircle, text: "New message from Dr. Sarah Johnson", time: "4 hours ago", color: "text-green-600" },
    { icon: CheckCircle, text: "Appointment confirmed with Mr. David Chen", time: "1 day ago", color: "text-emerald-600" },
    { icon: Upload, text: "Legal document shared successfully", time: "2 days ago", color: "text-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navbar */}
      <nav className="glass-nav sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LegalConnect
              </h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Find Lawyers</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">My Appointments</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">My Chats</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">My Documents</a>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Notification Bell */}
              <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
              </button>

              {/* Profile Dropdown */}
              <DropdownMenu open={isProfileDropdownOpen} onOpenChange={setIsProfileDropdownOpen}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center space-x-2 p-2 rounded-xl hover:bg-white/20 transition-colors">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
                      alt="Profile" 
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="hidden md:block text-gray-700 font-medium">Ananthan</span>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="w-48 bg-white/90 backdrop-blur-md border border-white/20 shadow-xl rounded-xl"
                >
                  <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer hover:bg-white/50 rounded-lg">
                    <User className="w-4 h-4 text-blue-600" />
                    <span>My Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer hover:bg-white/50 rounded-lg text-red-600">
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            👋 Welcome back, Ananthan!
          </h1>
          <p className="text-xl text-gray-600">
            Let's get you connected with the right lawyer today.
          </p>
        </div>

        {/* Banner Section */}
        <div className="mb-8 relative rounded-3xl overflow-hidden h-96 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h2 className="text-5xl font-bold mb-4">Book trusted legal consultations</h2>
              <p className="text-xl opacity-90 mb-6">Online or offline - your choice</p>
              <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Find a Lawyer
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Appointments */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Appointments */}
            <div className="glass-card rounded-2xl p-6 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Your Upcoming Appointments</h3>
                <Button variant="outline" size="sm" className="hover:bg-white/50">
                  View All
                </Button>
              </div>

              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="bg-white/30 border border-white/20 rounded-xl p-4 hover:bg-white/40 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={appointment.avatar} 
                          alt={appointment.lawyer}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-800">{appointment.lawyer}</h4>
                          <p className="text-gray-600 text-sm">{appointment.specialty}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {appointment.date}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {appointment.time}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            appointment.type === 'Online' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-purple-100 text-purple-800'
                          }`}>
                            {appointment.type === 'Online' ? <Video className="w-3 h-3 inline mr-1" /> : <MapPin className="w-3 h-3 inline mr-1" />}
                            {appointment.type}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            appointment.status === 'Confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {appointment.status}
                          </span>
                        </div>
                        {appointment.type === 'Online' && appointment.status === 'Confirmed' && (
                          <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700">
                            Join Meeting
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">12</h4>
                <p className="text-gray-600">Total Consultations</p>
              </div>

              <div className="glass-card rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">8</h4>
                <p className="text-gray-600">Lawyers Consulted</p>
              </div>

              <div className="glass-card rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">24</h4>
                <p className="text-gray-600">Documents Shared</p>
              </div>
            </div>
          </div>

          {/* Right Column - Activities */}
          <div className="space-y-8">
            {/* Recent Activities */}
            <div className="glass-card rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Activities</h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/20 transition-colors">
                    <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0`}>
                      <activity.icon className={`w-4 h-4 ${activity.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 font-medium">{activity.text}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-blue-600 hover:text-blue-800">
                View All Activities
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="glass-card rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl">
                  <Search className="w-4 h-4 mr-2" />
                  Find New Lawyer
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-white/50 rounded-xl">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-white/50 rounded-xl">
                  <FileText className="w-4 h-4 mr-2" />
                  Upload Document
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-white/50 rounded-xl">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message Lawyer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-white/10 backdrop-blur-md border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LegalConnect
              </h3>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Find Lawyers</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms</a>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/20 text-center">
            <p className="text-gray-500">© 2025 LegalConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserDashboard;
