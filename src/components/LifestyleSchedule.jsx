import React from 'react';
import { ArrowLeft, Clock, Sun, Moon, Activity, Wind, Droplets, Flame } from 'lucide-react';

export default function LifestyleSchedule({ user, onUpdateUser, onNavigate }) {

  const getConstitutionBase = () => {
    if (!user.constitution) return 'Balanced';
    return user.constitution.split('-')[0];
  };

  const lifestylePlans = {
    Vata: {
      title: 'Vata-Pacifying Lifestyle',
      description: 'Structured, grounding routines to balance air and space elements',
      dailySchedule: {
        '5:30-6:00': {
          time: '5:30-6:00 AM',
          activity: 'Wake up gently',
          description: 'Rise with the sun, avoid sudden movements',
          icon: Sun,
          color: 'text-yellow-600'
        },
        '6:30-7:00': {
          time: '6:30-7:00 AM',
          activity: 'Gentle yoga or stretching',
          description: 'Slow, grounding poses to center the mind',
          icon: Activity,
          color: 'text-green-600'
        },
        '7:00-7:30': {
          time: '7:00-7:30 AM',
          activity: 'Meditation or breathing',
          description: 'Calming pranayama to center and focus',
          icon: Wind,
          color: 'text-purple-600'
        },
        '7:30-8:00': {
          time: '7:30-8:00 AM',
          activity: 'Warm breakfast',
          description: 'Nourishing, warm meal to ground energy',
          icon: Flame,
          color: 'text-orange-600'
        },
        '8:00-12:00': {
          time: '8:00 AM - 12:00 PM',
          activity: 'Morning work/activities',
          description: 'Focus on creative and analytical tasks',
          icon: Sun,
          color: 'text-yellow-600'
        },
        '12:00-13:00': {
          time: '12:00-1:00 PM',
          activity: 'Main meal (lunch)',
          description: 'Warm, nourishing meal - largest of the day',
          icon: Flame,
          color: 'text-orange-600'
        },
        '13:00-14:00': {
          time: '1:00-2:00 PM',
          activity: 'Rest or light activity',
          description: 'Gentle walk or relaxation to aid digestion',
          icon: Wind,
          color: 'text-purple-600'
        },
        '14:00-18:00': {
          time: '2:00-6:00 PM',
          activity: 'Afternoon activities',
          description: 'Continue work or creative pursuits',
          icon: Sun,
          color: 'text-yellow-600'
        },
        '18:00-19:00': {
          time: '6:00-7:00 PM',
          activity: 'Light dinner',
          description: 'Warm, light meal to end the day',
          icon: Flame,
          color: 'text-orange-600'
        },
        '19:00-21:00': {
          time: '7:00-9:00 PM',
          activity: 'Evening wind-down',
          description: 'Gentle activities, reading, or quiet time',
          icon: Moon,
          color: 'text-indigo-600'
        },
        '21:00-22:00': {
          time: '9:00-10:00 PM',
          activity: 'Bedtime routine',
          description: 'Warm bath, meditation, prepare for sleep',
          icon: Moon,
          color: 'text-indigo-600'
        },
        '22:00': {
          time: '10:00 PM',
          activity: 'Sleep',
          description: 'Early bedtime for adequate rest',
          icon: Moon,
          color: 'text-indigo-600'
        }
      },
      weeklyRoutine: [
        'Monday: Focus on grounding activities',
        'Tuesday: Creative projects and artistic pursuits',
        'Wednesday: Social connections and communication',
        'Thursday: Learning and intellectual activities',
        'Friday: Gentle exercise and nature time',
        'Saturday: Rest and relaxation',
        'Sunday: Planning and preparation for the week'
      ],
    },
    Pitta: {
      title: 'Pitta-Pacifying Lifestyle',
      description: 'Cooling, calming routines to balance fire and water elements',
      dailySchedule: {
        '5:00-5:30': {
          time: '5:00-5:30 AM',
          activity: 'Early wake-up',
          description: 'Rise before the sun to avoid heat buildup',
          icon: Sun,
          color: 'text-yellow-600'
        },
        '7:00-7:30': {
          time: '7:00-7:30 AM',
          activity: 'Cooling meditation',
          description: 'Moon breathing or cooling pranayama',
          icon: Wind,
          color: 'text-purple-600'
        },
        '7:30-8:00': {
          time: '7:30-8:00 AM',
          activity: 'Cooling breakfast',
          description: 'Fresh fruits, cooling foods',
          icon: Flame,
          color: 'text-orange-600'
        },
        '8:00-12:00': {
          time: '8:00 AM - 12:00 PM',
          activity: 'Morning work',
          description: 'Tackle challenging tasks during peak energy',
          icon: Sun,
          color: 'text-yellow-600'
        },
        '12:00-13:00': {
          time: '12:00-1:00 PM',
          activity: 'Main meal',
          description: 'Balanced meal with cooling elements',
          icon: Flame,
          color: 'text-orange-600'
        },
        '13:00-14:00': {
          time: '1:00-2:00 PM',
          activity: 'Rest in cool place',
          description: 'Avoid direct sun, stay in shade',
          icon: Wind,
          color: 'text-purple-600'
        },
        '18:00-19:00': {
          time: '6:00-7:00 PM',
          activity: 'Light dinner',
          description: 'Cooling, light meal',
          icon: Flame,
          color: 'text-orange-600'
        },
        '19:00-21:00': {
          time: '7:00-9:00 PM',
          activity: 'Cooling activities',
          description: 'Gentle walk, reading, or quiet time',
          icon: Moon,
          color: 'text-indigo-600'
        },
        '21:00-22:00': {
          time: '9:00-10:00 PM',
          activity: 'Cooling bedtime routine',
          description: 'Cool shower, meditation, prepare for sleep',
          icon: Moon,
          color: 'text-indigo-600'
        },
        '22:00': {
          time: '10:00 PM',
          activity: 'Sleep',
          description: 'Regular bedtime for adequate rest',
          icon: Moon,
          color: 'text-indigo-600'
        }
      },
      weeklyRoutine: [
        'Monday: Focus on organization and planning',
        'Tuesday: Creative and artistic activities',
        'Wednesday: Social connections and networking',
        'Thursday: Learning and skill development',
        'Friday: Physical activities and exercise',
        'Saturday: Rest and relaxation',
        'Sunday: Reflection and preparation'
      ],
    },
    Kapha: {
      title: 'Kapha-Pacifying Lifestyle',
      description: 'Energizing, stimulating routines to balance earth and water elements',
      dailySchedule: {
        '5:00-5:30': {
          time: '5:00-5:30 AM',
          activity: 'Early wake-up',
          description: 'Rise early to avoid sluggishness',
          icon: Sun,
          color: 'text-yellow-600'
        },
        '7:30-8:00': {
          time: '7:30-8:00 AM',
          activity: 'Energizing meditation',
          description: 'Active breathing or energizing pranayama',
          icon: Wind,
          color: 'text-purple-600'
        },
        '8:00-8:30': {
          time: '8:00-8:30 AM',
          activity: 'Light breakfast',
          description: 'Light, warm meal to stimulate digestion',
          icon: Flame,
          color: 'text-orange-600'
        },
        '8:30-12:00': {
          time: '8:30 AM - 12:00 PM',
          activity: 'Morning work',
          description: 'Tackle challenging, stimulating tasks',
          icon: Sun,
          color: 'text-yellow-600'
        },
        '12:00-13:00': {
          time: '12:00-1:00 PM',
          activity: 'Main meal',
          description: 'Balanced meal with stimulating spices',
          icon: Flame,
          color: 'text-orange-600'
        },
        '13:00-14:00': {
          time: '1:00-2:00 PM',
          activity: 'Active rest',
          description: 'Light walk or gentle movement',
          icon: Activity,
          color: 'text-green-600'
        },
        '18:00-19:00': {
          time: '6:00-7:00 PM',
          activity: 'Light dinner',
          description: 'Early, light meal',
          icon: Flame,
          color: 'text-orange-600'
        },
        '19:00-21:00': {
          time: '7:00-9:00 PM',
          activity: 'Evening activities',
          description: 'Social time, hobbies, or learning',
          icon: Moon,
          color: 'text-indigo-600'
        },
        '21:00-22:00': {
          time: '9:00-10:00 PM',
          activity: 'Bedtime routine',
          description: 'Light reading, gentle meditation',
          icon: Moon,
          color: 'text-indigo-600'
        },
        '22:00': {
          time: '10:00 PM',
          activity: 'Sleep',
          description: 'Regular bedtime for adequate rest',
          icon: Moon,
          color: 'text-indigo-600'
        }
      },
      weeklyRoutine: [
        'Monday: Focus on new projects and challenges',
        'Tuesday: Physical activities and exercise',
        'Wednesday: Social connections and networking',
        'Thursday: Learning and skill development',
        'Friday: Creative and artistic pursuits',
        'Saturday: Outdoor activities and adventure',
        'Sunday: Planning and goal setting'
      ],
    },
    Balanced: {
      title: 'Balanced Lifestyle',
      description: 'Harmonious routines that support all constitutions',
      dailySchedule: {
        '6:00-6:30': {
          time: '6:00-6:30 AM',
          activity: 'Gentle wake-up',
          description: 'Rise naturally with the sun',
          icon: Sun,
          color: 'text-yellow-600'
        },
        '6:30-7:00': {
          time: '6:30-7:00 AM',
          activity: 'Morning routine',
          description: 'Personal hygiene and preparation',
          icon: Droplets,
          color: 'text-blue-600'
        },
        '7:00-8:00': {
          time: '7:00-8:00 AM',
          activity: 'Exercise or yoga',
          description: 'Moderate physical activity',
          icon: Activity,
          color: 'text-green-600'
        },
        '8:00-8:30': {
          time: '8:00-8:30 AM',
          activity: 'Meditation',
          description: 'Mindfulness or breathing practice',
          icon: Wind,
          color: 'text-purple-600'
        },
        '8:30-9:00': {
          time: '8:30-9:00 AM',
          activity: 'Breakfast',
          description: 'Nourishing morning meal',
          icon: Flame,
          color: 'text-orange-600'
        },
        '9:00-12:00': {
          time: '9:00 AM - 12:00 PM',
          activity: 'Morning work',
          description: 'Focus on important tasks',
          icon: Sun,
          color: 'text-yellow-600'
        },
        '12:00-13:00': {
          time: '12:00-1:00 PM',
          activity: 'Lunch',
          description: 'Balanced midday meal',
          icon: Flame,
          color: 'text-orange-600'
        },
        '13:00-14:00': {
          time: '1:00-2:00 PM',
          activity: 'Rest period',
          description: 'Light rest or gentle activity',
          icon: Wind,
          color: 'text-purple-600'
        },
        '14:00-18:00': {
          time: '2:00-6:00 PM',
          activity: 'Afternoon work',
          description: 'Continue work or activities',
          icon: Sun,
          color: 'text-yellow-600'
        },
        '18:00-19:00': {
          time: '6:00-7:00 PM',
          activity: 'Dinner',
          description: 'Light evening meal',
          icon: Flame,
          color: 'text-orange-600'
        },
        '19:00-21:00': {
          time: '7:00-9:00 PM',
          activity: 'Evening time',
          description: 'Relaxation, hobbies, or social time',
          icon: Moon,
          color: 'text-indigo-600'
        },
        '21:00-22:00': {
          time: '9:00-10:00 PM',
          activity: 'Bedtime routine',
          description: 'Wind down and prepare for sleep',
          icon: Moon,
          color: 'text-indigo-600'
        },
        '22:00': {
          time: '10:00 PM',
          activity: 'Sleep',
          description: 'Restful sleep for recovery',
          icon: Moon,
          color: 'text-indigo-600'
        }
      },
      weeklyRoutine: [
        'Monday: Focus on planning and organization',
        'Tuesday: Creative and artistic activities',
        'Wednesday: Social connections and communication',
        'Thursday: Learning and personal development',
        'Friday: Physical activities and exercise',
        'Saturday: Rest and relaxation',
        'Sunday: Reflection and preparation'
      ],
    }
  };

  const currentPlan = lifestylePlans[getConstitutionBase()];
  const scheduleEntries = Object.entries(currentPlan.dailySchedule);

  const saveLifestylePlan = () => {
    const updatedUser = {
      ...user,
      lifestylePlan: {
        constitution: getConstitutionBase(),
        plan: currentPlan,
        createdDate: new Date().toISOString()
      }
    };
    onUpdateUser(updatedUser);
    onNavigate('dashboard');
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => onNavigate('dashboard')}
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </button>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Lifestyle Schedule</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{currentPlan.title}</h2>
          <p className="text-gray-600 text-lg">{currentPlan.description}</p>
        </div>

        {/* Daily Schedule */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Daily Schedule</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {scheduleEntries.map(([key, schedule]) => {
              const IconComponent = schedule.icon;
              return (
                <div key={key} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${schedule.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                      <IconComponent className={`w-6 h-6 ${schedule.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{schedule.activity}</h4>
                        <span className="text-sm text-gray-500 font-medium">{schedule.time}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{schedule.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weekly Routine */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Weekly Routine</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentPlan.weeklyRoutine.map((routine, index) => (
              <div key={index} className="bg-white rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-blue-700 text-sm">{routine}</span>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Lifestyle Tips */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Lifestyle Tips for {getConstitutionBase()} Constitution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Morning Routine</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Wake up at consistent times</li>
                <li>• Start with gentle movements</li>
                <li>• Include mindfulness practice</li>
                <li>• Eat a nourishing breakfast</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Evening Routine</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Wind down with calming activities</li>
                <li>• Avoid stimulating content</li>
                <li>• Create a peaceful environment</li>
                <li>• Maintain consistent bedtime</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={saveLifestylePlan}
            className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 font-semibold transition-colors"
          >
            Save Lifestyle Plan
          </button>
        </div>
      </div>
    </div>
  );
}
