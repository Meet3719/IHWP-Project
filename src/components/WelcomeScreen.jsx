import React, { useState } from 'react';
import { UserPlus, Users, Shield, ArrowRight, Sparkles } from 'lucide-react';

export default function WelcomeScreen({ users, onCreateUser, onLogin, onAdminAccess }) {
  const [showNewUserForm, setShowNewUserForm] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [adminPin, setAdminPin] = useState('');
  const [showAdminForm, setShowAdminForm] = useState(false);

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (newUserName.trim()) {
      onCreateUser({
        name: newUserName.trim(),
        email: '',
        age: '',
        gender: ''
      });
      setNewUserName('');
      setShowNewUserForm(false);
    }
  };

  const handleAdminAccess = (e) => {
    e.preventDefault();
    if (adminPin === 'admin123') {
      onAdminAccess();
      setAdminPin('');
      setShowAdminForm(false);
    } else {
      alert('Invalid admin PIN');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center pulse-glow">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-primary-600">Ayurveda Wellness</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover your unique constitution and unlock personalized wellness recommendations 
            based on ancient Ayurvedic wisdom and modern health science.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* New User Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">New to Ayurveda?</h3>
              <p className="text-gray-600 mb-6">
                Start your wellness journey with a personalized constitution assessment
              </p>
              <button
                onClick={() => setShowNewUserForm(true)}
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 font-semibold transition-colors"
              >
                Create Profile
              </button>
            </div>
          </div>

          {/* Returning User Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Returning User</h3>
              <p className="text-gray-600 mb-6">
                Continue your wellness journey with your existing profile
              </p>
              {users.length === 0 ? (
                <p className="text-gray-500 text-sm">No existing profiles found</p>
              ) : (
                <div className="space-y-2">
                  {users.slice(0, 3).map(user => (
                    <button
                      key={user.id}
                      onClick={() => onLogin(user)}
                      className="w-full p-3 bg-secondary-50 hover:bg-secondary-100 rounded-lg text-left border border-secondary-200 transition-colors"
                    >
                      <div className="font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-600">
                        Constitution: {user.constitution || 'Not assessed'}
                      </div>
                    </button>
                  ))}
                  {users.length > 3 && (
                    <p className="text-sm text-gray-500">+{users.length - 3} more users</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Admin Access Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Admin Access</h3>
              <p className="text-gray-600 mb-6">
                Manage users and view system analytics
              </p>
              <button
                onClick={() => setShowAdminForm(true)}
                className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 font-semibold transition-colors"
              >
                Admin Login
              </button>
            </div>
          </div>
        </div>

        {/* New User Form Modal */}
        {showNewUserForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Profile</h2>
              <form onSubmit={handleCreateUser} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 font-semibold transition-colors"
                  >
                    Create Profile
                  </button>
                  <button
                    type="button"
                    onClick={() => { setShowNewUserForm(false); setNewUserName(''); }}
                    className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-400 font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Admin Form Modal */}
        {showAdminForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Admin Access</h2>
              <form onSubmit={handleAdminAccess} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Admin PIN
                  </label>
                  <input
                    type="password"
                    value={adminPin}
                    onChange={(e) => setAdminPin(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter admin PIN"
                    required
                  />
                </div>
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 font-semibold transition-colors"
                  >
                    Access Admin
                  </button>
                  <button
                    type="button"
                    onClick={() => { setShowAdminForm(false); setAdminPin(''); }}
                    className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-400 font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
