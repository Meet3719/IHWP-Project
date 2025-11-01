import React, { useState } from 'react';
import { 
  FileText, 
  Utensils, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  Plus,
  X,
  Edit3
} from 'lucide-react';

export default function UserDashboard({ user, onNavigate, onUpdateUser }) {
  const [newFollowUp, setNewFollowUp] = useState('');
  const [showAddFollowUp, setShowAddFollowUp] = useState(false);
  const getCompletionStatus = () => {
    const steps = [
      { key: 'constitution', label: 'Constitution Assessment', completed: !!user.constitution },
      { key: 'nutrition', label: 'Nutrition Plan', completed: !!user.nutritionPlan },
      { key: 'lifestyle', label: 'Lifestyle Schedule', completed: !!user.lifestylePlan }
    ];
    
    const completed = steps.filter(step => step.completed).length;
    return { steps, completed, total: steps.length };
  };

  const status = getCompletionStatus();

  const addFollowUp = () => {
    if (newFollowUp.trim()) {
      const followUp = {
        id: Date.now(),
        text: newFollowUp.trim(),
        status: 'pending',
        createdAt: new Date().toISOString()
      };
      
      const updatedUser = {
        ...user,
        followUps: [...(user.followUps || []), followUp]
      };
      onUpdateUser(updatedUser);
      setNewFollowUp('');
      setShowAddFollowUp(false);
    }
  };

  const toggleFollowUp = (followUpId) => {
    const updatedUser = {
      ...user,
      followUps: user.followUps.map(f => 
        f.id === followUpId 
          ? { ...f, status: f.status === 'pending' ? 'completed' : 'pending' }
          : f
      )
    };
    onUpdateUser(updatedUser);
  };

  const deleteFollowUp = (followUpId) => {
    const updatedUser = {
      ...user,
      followUps: user.followUps.filter(f => f.id !== followUpId)
    };
    onUpdateUser(updatedUser);
  };


  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
          <p className="text-primary-100 text-lg">
            Continue your personalized wellness journey
          </p>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="font-semibold text-gray-900 mb-4">Your Progress</h3>
        <div className="space-y-3">
          {status.steps.map((step, index) => (
            <div key={step.key} className="flex items-center space-x-3">
              {step.completed ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <AlertCircle className="w-5 h-5 text-gray-400" />
              )}
              <span className={`text-sm ${step.completed ? 'text-green-700' : 'text-gray-500'}`}>
                {step.label}
              </span>
            </div>
          ))}
          <div className="flex items-center space-x-3 pt-2 border-t border-gray-200">
            <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-primary-600 text-xs font-bold">
                {user.followUps?.length || 0}
              </span>
            </div>
            <span className="text-sm text-gray-600">
              Personal Follow-ups ({user.followUps?.filter(f => f.status === 'completed').length || 0} completed)
            </span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={() => onNavigate('assessment')}
            className="group p-6 border-2 border-primary-200 rounded-xl hover:border-primary-400 hover:bg-primary-50 transition-all duration-200 text-left"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                <FileText className="w-6 h-6 text-primary-600" />
              </div>
              <ArrowRight className="w-5 h-5 text-primary-600 group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Constitution Assessment</h3>
            <p className="text-sm text-gray-600 mb-4">
              Discover your unique Ayurvedic constitution through our comprehensive questionnaire
            </p>
            <div className="flex items-center space-x-2">
              {user.constitution ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <AlertCircle className="w-4 h-4 text-gray-400" />
              )}
              <span className={`text-xs font-medium ${user.constitution ? 'text-green-600' : 'text-gray-500'}`}>
                {user.constitution ? 'Completed' : 'Pending'}
              </span>
            </div>
          </button>

          <button
            onClick={() => onNavigate('nutrition')}
            disabled={!user.constitution}
            className={`group p-6 border-2 rounded-xl transition-all duration-200 text-left ${
              user.constitution
                ? 'border-secondary-200 hover:border-secondary-400 hover:bg-secondary-50'
                : 'border-gray-200 bg-gray-50 cursor-not-allowed'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                user.constitution
                  ? 'bg-secondary-100 group-hover:bg-secondary-200'
                  : 'bg-gray-100'
              }`}>
                <Utensils className={`w-6 h-6 ${user.constitution ? 'text-secondary-600' : 'text-gray-400'}`} />
              </div>
              {user.constitution && (
                <ArrowRight className="w-5 h-5 text-secondary-600 group-hover:translate-x-1 transition-transform" />
              )}
            </div>
            <h3 className={`font-semibold mb-2 ${user.constitution ? 'text-gray-900' : 'text-gray-500'}`}>
              Nutrition Guide
            </h3>
            <p className={`text-sm mb-4 ${user.constitution ? 'text-gray-600' : 'text-gray-400'}`}>
              Get personalized dietary recommendations based on your constitution
            </p>
            <div className="flex items-center space-x-2">
              {user.nutritionPlan ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <AlertCircle className="w-4 h-4 text-gray-400" />
              )}
              <span className={`text-xs font-medium ${user.nutritionPlan ? 'text-green-600' : 'text-gray-500'}`}>
                {user.nutritionPlan ? 'Available' : user.constitution ? 'Ready' : 'Complete Assessment First'}
              </span>
            </div>
          </button>

          <button
            onClick={() => onNavigate('lifestyle')}
            disabled={!user.constitution}
            className={`group p-6 border-2 rounded-xl transition-all duration-200 text-left ${
              user.constitution
                ? 'border-green-200 hover:border-green-400 hover:bg-green-50'
                : 'border-gray-200 bg-gray-50 cursor-not-allowed'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                user.constitution
                  ? 'bg-green-100 group-hover:bg-green-200'
                  : 'bg-gray-100'
              }`}>
                <Clock className={`w-6 h-6 ${user.constitution ? 'text-green-600' : 'text-gray-400'}`} />
              </div>
              {user.constitution && (
                <ArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
              )}
            </div>
            <h3 className={`font-semibold mb-2 ${user.constitution ? 'text-gray-900' : 'text-gray-500'}`}>
              Lifestyle Schedule
            </h3>
            <p className={`text-sm mb-4 ${user.constitution ? 'text-gray-600' : 'text-gray-400'}`}>
              Optimize your daily routine with personalized lifestyle recommendations
            </p>
            <div className="flex items-center space-x-2">
              {user.lifestylePlan ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <AlertCircle className="w-4 h-4 text-gray-400" />
              )}
              <span className={`text-xs font-medium ${user.lifestylePlan ? 'text-green-600' : 'text-gray-500'}`}>
                {user.lifestylePlan ? 'Available' : user.constitution ? 'Ready' : 'Complete Assessment First'}
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Dynamic Follow-ups */}
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Personal Follow-ups</h2>
          <button
            onClick={() => setShowAddFollowUp(!showAddFollowUp)}
            className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Follow-up</span>
          </button>
        </div>

        {/* Add Follow-up Form */}
        {showAddFollowUp && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex space-x-3">
              <input
                type="text"
                value={newFollowUp}
                onChange={(e) => setNewFollowUp(e.target.value)}
                placeholder="Add a personal follow-up..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && addFollowUp()}
              />
              <button
                onClick={addFollowUp}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 font-semibold transition-colors"
              >
                Add
              </button>
              <button
                onClick={() => { setShowAddFollowUp(false); setNewFollowUp(''); }}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 font-semibold transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Follow-ups List */}
        <div className="space-y-3">
          {(!user.followUps || user.followUps.length === 0) ? (
            <div className="text-center py-8 text-gray-500">
              <p>No follow-ups yet. Add your first personal follow-up!</p>
            </div>
          ) : (
            user.followUps.map(followUp => (
              <div
                key={followUp.id}
                className={`flex items-center justify-between p-4 rounded-lg border ${
                  followUp.status === 'completed' 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-amber-50 border-amber-200'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => toggleFollowUp(followUp.id)}
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      followUp.status === 'completed'
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    {followUp.status === 'completed' && <CheckCircle className="w-3 h-3" />}
                  </button>
                  <span className={`${
                    followUp.status === 'completed' 
                      ? 'line-through text-gray-600' 
                      : 'text-gray-900'
                  }`}>
                    {followUp.text}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    followUp.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {followUp.status === 'completed' ? 'Completed' : 'Pending'}
                  </span>
                  <button
                    onClick={() => deleteFollowUp(followUp.id)}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

        {/* Next Steps */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Next Steps</h2>
          <div className="space-y-4">
            {!user.constitution && (
              <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg">
                <p className="text-sm text-primary-800 font-medium">
                  Complete your constitution assessment to unlock personalized recommendations
                </p>
              </div>
            )}
            {user.constitution && !user.nutritionPlan && (
              <div className="p-4 bg-secondary-50 border border-secondary-200 rounded-lg">
                <p className="text-sm text-secondary-800 font-medium">
                  Get your personalized nutrition guide based on your {user.constitution} constitution
                </p>
              </div>
            )}
            {user.constitution && user.nutritionPlan && !user.lifestylePlan && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  Create your personalized lifestyle schedule for optimal wellness
                </p>
              </div>
            )}
            {user.constitution && user.nutritionPlan && user.lifestylePlan && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  🎉 Congratulations! You've completed your wellness setup.
                </p>
              </div>
            )}
          </div>
        </div>
    </div>
  );
}
