
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import OTPVerification from "./pages/OTPVerification";
import OTPSendConfirmation from "./pages/OTPSendConfirmation";
import OTPSuccess from "./pages/OTPSuccess";
import ForgotPassword from "./pages/ForgotPassword";
import PasswordReset from "./pages/PasswordReset";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import LawyerVerification from "./pages/LawyerVerification";
import UsersListing from "./pages/UsersListing";
import LawyersListing from "./pages/LawyersListing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path="/otp-send-confirmation" element={<OTPSendConfirmation />} />
          <Route path="/otp-success" element={<OTPSuccess />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/lawyer-verification" element={<LawyerVerification />} />
          <Route path="/admin/users" element={<UsersListing />} />
          <Route path="/admin/lawyers" element={<LawyersListing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
