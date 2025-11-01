import React, { useState, useEffect } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import './App.css';

// Import components
import WelcomeScreen from './components/WelcomeScreen';
import UserDashboard from './components/UserDashboard';
import ConstitutionAssessment from './components/ConstitutionAssessment';
import NutritionGuide from './components/NutritionGuide';
import LifestyleSchedule from './components/LifestyleSchedule';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  const [currentView, setCurrentView] = useState('welcome');
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Load data on mount
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('ayurvedaUsers') || '[]');
    setUsers(savedUsers);
    setIsLoading(false);
  }, []);

  // Save users when they change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('ayurvedaUsers', JSON.stringify(users));
    }
  }, [users, isLoading]);

  const createUser = (userData) => {
    const newUser = {
      id: Date.now(),
      ...userData,
      constitution: null,
      nutritionPlan: null,
      lifestylePlan: null,
      createdAt: new Date().toISOString()
    };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    setCurrentView('dashboard');
    return newUser;
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
    setCurrentUser(updatedUser);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter(u => u.id !== userId));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('welcome');
    setShowMobileMenu(false);
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    setCurrentView('dashboard');
    setShowMobileMenu(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-primary-600 font-medium">Loading Ayurveda Wellness Platform...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Navigation Header */}
      {currentUser && (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <span className="ml-3 text-xl font-bold text-gray-900">Ayurveda Wellness</span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <button
                    onClick={() => setCurrentView('dashboard')}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      currentView === 'dashboard' 
                        ? 'bg-primary-100 text-primary-700' 
                        : 'text-gray-600 hover:text-primary-700'
                    }`}
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => setCurrentView('assessment')}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      currentView === 'assessment' 
                        ? 'bg-primary-100 text-primary-700' 
                        : 'text-gray-600 hover:text-primary-700'
                    }`}
                  >
                    Assessment
                  </button>
                  <button
                    onClick={() => setCurrentView('nutrition')}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      currentView === 'nutrition' 
                        ? 'bg-primary-100 text-primary-700' 
                        : 'text-gray-600 hover:text-primary-700'
                    }`}
                  >
                    Nutrition
                  </button>
                  <button
                    onClick={() => setCurrentView('lifestyle')}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      currentView === 'lifestyle' 
                        ? 'bg-primary-100 text-primary-700' 
                        : 'text-gray-600 hover:text-primary-700'
                    }`}
                  >
                    Lifestyle
                  </button>
                </div>
              </div>

              {/* User Menu */}
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-700">Welcome, {currentUser.name}</span>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-1 text-gray-600 hover:text-primary-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary-700 hover:bg-primary-100"
                >
                  {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {showMobileMenu && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <button
                  onClick={() => { setCurrentView('dashboard'); setShowMobileMenu(false); }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-700 hover:bg-primary-100 w-full text-left"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => { setCurrentView('assessment'); setShowMobileMenu(false); }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-700 hover:bg-primary-100 w-full text-left"
                >
                  Assessment
                </button>
                <button
                  onClick={() => { setCurrentView('nutrition'); setShowMobileMenu(false); }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-700 hover:bg-primary-100 w-full text-left"
                >
                  Nutrition
                </button>
                <button
                  onClick={() => { setCurrentView('lifestyle'); setShowMobileMenu(false); }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-700 hover:bg-primary-100 w-full text-left"
                >
                  Lifestyle
                </button>
                <button
                  onClick={handleLogout}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-700 hover:bg-primary-100 w-full text-left"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </nav>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'welcome' && (
          <WelcomeScreen 
            users={users} 
            onCreateUser={createUser} 
            onLogin={handleLogin}
            onAdminAccess={() => setCurrentView('admin')}
          />
        )}
        {currentView === 'dashboard' && currentUser && (
          <UserDashboard user={currentUser} onNavigate={setCurrentView} onUpdateUser={updateUser} />
        )}
        {currentView === 'assessment' && currentUser && (
          <ConstitutionAssessment 
            user={currentUser} 
            onUpdateUser={updateUser} 
            onNavigate={setCurrentView} 
          />
        )}
        {currentView === 'nutrition' && currentUser && (
          <NutritionGuide 
            user={currentUser} 
            onUpdateUser={updateUser} 
            onNavigate={setCurrentView} 
          />
        )}
        {currentView === 'lifestyle' && currentUser && (
          <LifestyleSchedule 
            user={currentUser} 
            onUpdateUser={updateUser} 
            onNavigate={setCurrentView} 
          />
        )}
        {currentView === 'admin' && (
          <AdminDashboard 
            users={users} 
            onDeleteUser={deleteUser}
            onLoginUser={handleLogin}
            onBack={() => setCurrentView('welcome')}
          />
        )}
      </main>
    </div>
  );
}