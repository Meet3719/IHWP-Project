import React from 'react';
import { ArrowLeft, Users, Trash2, BarChart3, Calendar, TrendingUp } from 'lucide-react';

export default function AdminDashboard({ users, onDeleteUser, onLoginUser, onBack }) {

  const getStats = () => {
    const totalUsers = users.length;
    const usersWithConstitution = users.filter(u => u.constitution).length;
    const usersWithNutrition = users.filter(u => u.nutritionPlan).length;
    const usersWithLifestyle = users.filter(u => u.lifestylePlan).length;
    const usersWithProgress = users.filter(u => u.progress && u.progress.length > 0).length;
    
    const constitutionStats = users.reduce((acc, user) => {
      const constitution = user.constitution || 'Not Assessed';
      acc[constitution] = (acc[constitution] || 0) + 1;
      return acc;
    }, {});

    return {
      totalUsers,
      usersWithConstitution,
      usersWithNutrition,
      usersWithLifestyle,
      usersWithProgress,
      constitutionStats
    };
  };

  const stats = getStats();


  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Welcome</span>
          </button>
          <h2 className="text-3xl font-bold text-gray-900">Admin Dashboard</h2>
          <p className="text-gray-600">Manage users and monitor system analytics</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Total Users</p>
                <p className="text-2xl font-bold">{stats.totalUsers}</p>
              </div>
              <Users className="w-8 h-8 text-blue-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">With Constitution</p>
                <p className="text-2xl font-bold">{stats.usersWithConstitution}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-green-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Nutrition Plans</p>
                <p className="text-2xl font-bold">{stats.usersWithNutrition}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100 text-sm">Lifestyle Plans</p>
                <p className="text-2xl font-bold">{stats.usersWithLifestyle}</p>
              </div>
              <Calendar className="w-8 h-8 text-yellow-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm">Active Users</p>
                <p className="text-2xl font-bold">{stats.usersWithProgress}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-red-200" />
            </div>
          </div>
        </div>


        {/* Users List */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Users ({users.length})
            </h3>
          </div>
          
          {users.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No users registered yet.</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {users.map(user => (
                <div key={user.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-semibold text-lg">
                          {user.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="text-lg font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">
                          Constitution: {user.constitution || 'Not Assessed'}
                        </div>
                        <div className="text-sm text-gray-500">
                          Created: {new Date(user.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center space-x-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.nutritionPlan ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                          }`}>
                            Nutrition: {user.nutritionPlan ? '✓' : '✗'}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.lifestylePlan ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                          }`}>
                            Lifestyle: {user.lifestylePlan ? '✓' : '✗'}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {/* <button
                          onClick={() => onLoginUser(user)}
                          className="text-primary-600 hover:text-primary-900 px-3 py-1 text-sm font-medium"
                        >
                          Login as User
                        </button> */}
                        <button
                          onClick={() => onDeleteUser(user.id)}
                          className="text-red-600 hover:text-red-900 flex items-center space-x-1 px-3 py-1 text-sm font-medium"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
