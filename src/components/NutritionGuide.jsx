import React from 'react';
import { ArrowLeft, CheckCircle, XCircle, Clock, Utensils, Heart, AlertTriangle } from 'lucide-react';

export default function NutritionGuide({ user, onUpdateUser, onNavigate }) {

  const getConstitutionBase = () => {
    if (!user.constitution) return 'Balanced';
    return user.constitution.split('-')[0];
  };

  const nutritionPlans = {
    Vata: {
      title: 'Vata-Pacifying Nutrition',
      description: 'Warm, moist, grounding foods to balance air and space elements',
      principles: [
        'Favor warm, cooked foods over raw',
        'Include healthy fats like ghee and olive oil',
        'Eat at regular times to establish routine',
        'Choose sweet, sour, and salty tastes',
        'Avoid cold, dry, and bitter foods'
      ],
      foods: {
        beneficial: [
          'Warm soups and stews',
          'Cooked grains (rice, quinoa, oats)',
          'Root vegetables (sweet potato, carrots)',
          'Healthy fats (ghee, olive oil, avocado)',
          'Warm dairy (milk, yogurt)',
          'Sweet fruits (bananas, mangoes, dates)',
          'Nuts and seeds (almonds, sesame)',
          'Warm spices (ginger, cinnamon, cardamom)'
        ],
        avoid: [
          'Raw vegetables and salads',
          'Cold foods and drinks',
          'Dry foods (crackers, popcorn)',
          'Bitter vegetables (kale, arugula)',
          'Excessive caffeine',
          'Frozen foods',
          'Carbonated drinks',
          'Excessive raw fruits'
        ]
      },
      mealTiming: {
        breakfast: '7:00-8:00 AM - Warm, nourishing meal',
        lunch: '12:00-1:00 PM - Main meal of the day',
        dinner: '6:00-7:00 PM - Light, warm meal',
        snacks: 'Warm herbal teas, nuts, cooked fruits'
      },
      sampleMeals: {
        breakfast: [
          'Warm oatmeal with ghee and dates',
          'Scrambled eggs with cooked vegetables',
          'Warm milk with honey and spices'
        ],
        lunch: [
          'Rice with dal and cooked vegetables',
          'Quinoa bowl with roasted root vegetables',
          'Warm soup with whole grain bread'
        ],
        dinner: [
          'Light soup with cooked grains',
          'Steamed vegetables with rice',
          'Warm herbal tea with nuts'
        ]
      }
    },
    Pitta: {
      title: 'Pitta-Pacifying Nutrition',
      description: 'Cooling, hydrating foods to balance fire and water elements',
      principles: [
        'Favor cooling, sweet, and bitter foods',
        'Include plenty of fresh vegetables',
        'Eat at regular times to maintain balance',
        'Choose sweet, bitter, and astringent tastes',
        'Avoid hot, spicy, and sour foods'
      ],
      foods: {
        beneficial: [
          'Fresh vegetables and salads',
          'Cooling fruits (cucumber, melons)',
          'Sweet fruits (grapes, pears, sweet berries)',
          'Cooling herbs (mint, cilantro, dill)',
          'Coconut and coconut water',
          'Fresh dairy (milk, yogurt)',
          'Whole grains (rice, barley, wheat)',
          'Cooling spices (fennel, coriander)'
        ],
        avoid: [
          'Hot, spicy foods',
          'Sour foods (vinegar, citrus)',
          'Excessive salt',
          'Fried and oily foods',
          'Alcohol and caffeine',
          'Hot spices (chili, black pepper)',
          'Fermented foods',
          'Excessive meat'
        ]
      },
      mealTiming: {
        breakfast: '7:00-8:00 AM - Light, cooling meal',
        lunch: '12:00-1:00 PM - Main meal with fresh foods',
        dinner: '6:00-7:00 PM - Light, cooling meal',
        snacks: 'Fresh fruits, coconut water, herbal teas'
      },
      sampleMeals: {
        breakfast: [
          'Fresh fruit salad with coconut',
          'Cooling smoothie with cucumber and mint',
          'Fresh yogurt with berries'
        ],
        lunch: [
          'Fresh salad with cooling vegetables',
          'Rice with fresh vegetables and herbs',
          'Fresh soup with cooling ingredients'
        ],
        dinner: [
          'Light salad with fresh vegetables',
          'Steamed vegetables with rice',
          'Fresh fruit with cooling herbs'
        ]
      }
    },
    Kapha: {
      title: 'Kapha-Pacifying Nutrition',
      description: 'Light, warming foods to balance earth and water elements',
      principles: [
        'Favor light, warm, and dry foods',
        'Include pungent, bitter, and astringent tastes',
        'Eat lighter meals to avoid sluggishness',
        'Choose warm, cooked foods',
        'Avoid heavy, oily, and sweet foods'
      ],
      foods: {
        beneficial: [
          'Light, warm vegetables',
          'Pungent spices (ginger, black pepper, cayenne)',
          'Bitter vegetables (leafy greens, bitter melon)',
          'Light grains (quinoa, millet, barley)',
          'Warming herbs (basil, oregano, thyme)',
          'Light proteins (legumes, fish)',
          'Warm beverages (ginger tea, herbal teas)',
          'Fresh fruits (apples, pears, berries)'
        ],
        avoid: [
          'Heavy, oily foods',
          'Sweet foods and desserts',
          'Dairy products',
          'Cold foods and drinks',
          'Excessive salt',
          'Fried foods',
          'Heavy grains (wheat, rice)',
          'Sweet fruits (bananas, mangoes)'
        ]
      },
      mealTiming: {
        breakfast: '8:00-9:00 AM - Light, warming meal',
        lunch: '12:00-1:00 PM - Main meal with light foods',
        dinner: '5:00-6:00 PM - Light, early dinner',
        snacks: 'Warm herbal teas, light fruits, nuts'
      },
      sampleMeals: {
        breakfast: [
          'Light quinoa with warming spices',
          'Steamed vegetables with herbs',
          'Warm herbal tea with light fruits'
        ],
        lunch: [
          'Light soup with vegetables and spices',
          'Steamed vegetables with light grains',
          'Fresh salad with warming dressings'
        ],
        dinner: [
          'Light vegetable stir-fry',
          'Steamed vegetables with herbs',
          'Warm herbal tea'
        ]
      }
    },
    Balanced: {
      title: 'Balanced Nutrition',
      description: 'A harmonious approach to nutrition for all constitutions',
      principles: [
        'Include all six tastes in your meals',
        'Eat seasonal, fresh foods',
        'Maintain regular meal times',
        'Listen to your body\'s needs',
        'Practice mindful eating'
      ],
      foods: {
        beneficial: [
          'Seasonal fruits and vegetables',
          'Whole grains and legumes',
          'Healthy fats (olive oil, ghee, nuts)',
          'Fresh herbs and spices',
          'Quality proteins',
          'Fresh dairy in moderation',
          'Warm beverages',
          'Natural sweeteners'
        ],
        avoid: [
          'Processed and packaged foods',
          'Excessive sugar and salt',
          'Artificial additives',
          'Overcooked foods',
          'Excessive caffeine',
          'Alcohol in excess',
          'Fried foods',
          'Cold foods in excess'
        ]
      },
      mealTiming: {
        breakfast: '7:00-8:00 AM - Nourishing start to the day',
        lunch: '12:00-1:00 PM - Main meal with variety',
        dinner: '6:00-7:00 PM - Light, satisfying meal',
        snacks: 'Fresh fruits, nuts, herbal teas'
      },
      sampleMeals: {
        breakfast: [
          'Balanced breakfast with grains and fruits',
          'Fresh smoothie with seasonal ingredients',
          'Warm porridge with nuts and fruits'
        ],
        lunch: [
          'Varied meal with different food groups',
          'Fresh salad with protein and grains',
          'Warm soup with seasonal vegetables'
        ],
        dinner: [
          'Light, balanced meal',
          'Steamed vegetables with grains',
          'Fresh fruit with herbal tea'
        ]
      }
    }
  };

  const currentPlan = nutritionPlans[getConstitutionBase()];

  const saveNutritionPlan = () => {
    const updatedUser = {
      ...user,
      nutritionPlan: {
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
              <Utensils className="w-4 h-4" />
              <span>Nutrition Guide</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{currentPlan.title}</h2>
          <p className="text-gray-600 text-lg">{currentPlan.description}</p>
        </div>

        {/* Nutrition Principles */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Nutritional Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentPlan.principles.map((principle, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{principle}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Food Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Beneficial Foods */}
          <div className="bg-green-50 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-semibold text-green-800">Foods to Include</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentPlan.foods.beneficial.map((food, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700 text-sm">{food}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Foods to Avoid */}
          <div className="bg-red-50 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <XCircle className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold text-red-800">Foods to Avoid</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentPlan.foods.avoid.map((food, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-red-700 text-sm">{food}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Meal Timing */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-blue-800">Optimal Meal Timing</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(currentPlan.mealTiming).map(([meal, timing]) => (
              <div key={meal} className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 capitalize mb-2">{meal}</h4>
                <p className="text-sm text-gray-600">{timing}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Meals */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Sample Meal Ideas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(currentPlan.sampleMeals).map(([meal, ideas]) => (
              <div key={meal} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 capitalize mb-4 flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-primary-600" />
                  <span>{meal}</span>
                </h4>
                <ul className="space-y-2">
                  {ideas.map((idea, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{idea}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">Important Notes</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• These recommendations are general guidelines based on your constitution</li>
                <li>• Listen to your body and adjust according to your individual needs</li>
                <li>• Consult with a healthcare provider for specific dietary concerns</li>
                <li>• Seasonal and regional variations should be considered</li>
                <li>• Quality of food is as important as the type of food</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={saveNutritionPlan}
            className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 font-semibold transition-colors"
          >
            Save Nutrition Plan
          </button>
          <button
            onClick={() => onNavigate('lifestyle')}
            className="px-6 bg-secondary-600 text-white py-3 rounded-lg hover:bg-secondary-700 font-semibold transition-colors"
          >
            Continue to Lifestyle
          </button>
        </div>
      </div>
    </div>
  );
}
