import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, RotateCcw } from 'lucide-react';

export default function ConstitutionAssessment({ user, onUpdateUser, onNavigate }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [constitution, setConstitution] = useState(null);

  const questions = [
    {
      id: 1,
      text: "What best describes your body build?",
      options: {
        vata: "Thin, light frame with prominent joints",
        pitta: "Medium build with good muscle definition",
        kapha: "Solid, heavy build with well-developed muscles"
      }
    },
    {
      id: 2,
      text: "How would you describe your skin?",
      options: {
        vata: "Dry, thin, cool to touch, prone to cracking",
        pitta: "Sensitive, warm, prone to rashes and acne",
        kapha: "Thick, oily, smooth, cool to touch"
      }
    },
    {
      id: 3,
      text: "What about your hair?",
      options: {
        vata: "Thin, dry, brittle, tends to be curly",
        pitta: "Fine, straight, early graying, tendency to baldness",
        kapha: "Thick, oily, wavy, strong and lustrous"
      }
    },
    {
      id: 4,
      text: "How are your eyes?",
      options: {
        vata: "Small, dry, dark, active movement",
        pitta: "Medium, sharp, penetrating, light-sensitive",
        kapha: "Large, attractive, calm, thick eyelashes"
      }
    },
    {
      id: 5,
      text: "Describe your appetite and digestion:",
      options: {
        vata: "Irregular appetite, variable digestion, tendency to gas",
        pitta: "Strong appetite, good digestion, can't skip meals",
        kapha: "Steady appetite, slow but steady digestion"
      }
    },
    {
      id: 6,
      text: "How do you sleep?",
      options: {
        vata: "Light sleep, easily disturbed, tendency to insomnia",
        pitta: "Moderate sleep, can wake up early, vivid dreams",
        kapha: "Deep, heavy sleep, difficult to wake up"
      }
    },
    {
      id: 7,
      text: "What's your preferred climate?",
      options: {
        vata: "Warm, humid climates",
        pitta: "Cool, dry climates",
        kapha: "Warm, dry climates"
      }
    },
    {
      id: 8,
      text: "How do you handle stress?",
      options: {
        vata: "Feel anxious, worried, scattered thoughts",
        pitta: "Become angry, irritable, critical",
        kapha: "Feel sluggish, withdrawn, avoid confrontation"
      }
    },
    {
      id: 9,
      text: "What's your typical energy pattern?",
      options: {
        vata: "Bursts of energy followed by fatigue",
        pitta: "Steady, intense energy throughout the day",
        kapha: "Slow to start, steady energy, good endurance"
      }
    },
    {
      id: 10,
      text: "How would you describe your speech?",
      options: {
        vata: "Fast, talkative, voice may be thin or hoarse",
        pitta: "Sharp, precise, clear, may be loud",
        kapha: "Slow, deliberate, deep, melodious voice"
      }
    },
    {
      id: 11,
      text: "What about your memory?",
      options: {
        vata: "Quick to learn, quick to forget, creative",
        pitta: "Sharp, precise, good with details",
        kapha: "Slow to learn, excellent long-term memory"
      }
    },
    {
      id: 12,
      text: "How do you make decisions?",
      options: {
        vata: "Quick decisions, may change mind frequently",
        pitta: "Quick, decisive, confident choices",
        kapha: "Slow, deliberate, thoughtful decisions"
      }
    }
  ];

  const handleAnswer = (questionId, dosha) => {
    setAnswers(prev => ({ ...prev, [questionId]: dosha }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateConstitution = () => {
    const counts = { vata: 0, pitta: 0, kapha: 0 };
    
    Object.values(answers).forEach(dosha => {
      if (counts.hasOwnProperty(dosha)) {
        counts[dosha]++;
      }
    });

    // Find the dominant dosha
    const sortedDoshas = Object.entries(counts)
      .sort(([,a], [,b]) => b - a);

    const [primary, primaryCount] = sortedDoshas[0];
    const [secondary, secondaryCount] = sortedDoshas[1];

    let result;
    if (primaryCount >= 6) {
      // Single dominant dosha
      result = primary.charAt(0).toUpperCase() + primary.slice(1);
    } else if (primaryCount >= 4 && secondaryCount >= 3) {
      // Dual dosha constitution
      result = `${primary.charAt(0).toUpperCase() + primary.slice(1)}-${secondary.charAt(0).toUpperCase() + secondary.slice(1)}`;
    } else {
      // Balanced constitution
      result = "Balanced";
    }

    setConstitution(result);
    setShowResults(true);
  };

  const saveConstitution = () => {
    if (constitution) {
      const updatedUser = {
        ...user,
        constitution: constitution,
        assessmentDate: new Date().toISOString()
      };
      onUpdateUser(updatedUser);
      onNavigate('dashboard');
    }
  };

  const resetAssessment = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setShowResults(false);
    setConstitution(null);
  };

  const getConstitutionDescription = (constitution) => {
    const descriptions = {
      'Vata': {
        title: 'Vata Constitution',
        description: 'Air and Space elements dominate. You are creative, energetic, and adaptable but may experience anxiety, dry skin, and irregular digestion.',
        characteristics: ['Creative and artistic', 'Quick to learn and forget', 'Enthusiastic and energetic', 'Tendency toward anxiety', 'Irregular appetite and sleep']
      },
      'Pitta': {
        title: 'Pitta Constitution',
        description: 'Fire and Water elements dominate. You are intelligent, focused, and determined but may experience anger, inflammation, and heat sensitivity.',
        characteristics: ['Sharp intellect', 'Strong leadership qualities', 'Good digestion', 'Tendency toward anger', 'Heat sensitivity']
      },
      'Kapha': {
        title: 'Kapha Constitution',
        description: 'Earth and Water elements dominate. You are calm, patient, and loving but may experience sluggishness, weight gain, and congestion.',
        characteristics: ['Calm and patient', 'Strong and steady', 'Good long-term memory', 'Tendency toward lethargy', 'Slow metabolism']
      },
      'Balanced': {
        title: 'Balanced Constitution',
        description: 'All three doshas are in harmony. You have the best of all constitutions with natural balance and resilience.',
        characteristics: ['Natural balance', 'Good health', 'Adaptable', 'Stable energy', 'Rare imbalances']
      }
    };

    return descriptions[constitution] || descriptions['Balanced'];
  };

  if (showResults) {
    const description = getConstitutionDescription(constitution);
    
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Assessment Complete!</h2>
            <p className="text-gray-600">Your Ayurvedic constitution has been identified</p>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{description.title}</h3>
            <p className="text-gray-700 mb-6 text-lg">{description.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Characteristics:</h4>
                <ul className="space-y-2">
                  {description.characteristics.map((char, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-700">{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Assessment Summary:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Total Questions:</span>
                    <span className="font-medium">{questions.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Answered:</span>
                    <span className="font-medium">{Object.keys(answers).length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-medium">{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={saveConstitution}
              className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 font-semibold transition-colors"
            >
              Save & Continue
            </button>
            <button
              onClick={resetAssessment}
              className="flex items-center space-x-2 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-400 font-semibold transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Assessment</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const isAnswered = answers[currentQ.id];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto">
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
            <span className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Constitution Assessment</h2>
          <p className="text-gray-600">
            Answer these questions honestly to discover your unique Ayurvedic constitution
          </p>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            {currentQ.text}
          </h3>
          
          <div className="space-y-3">
            {Object.entries(currentQ.options).map(([dosha, option]) => (
              <label
                key={dosha}
                className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  answers[currentQ.id] === dosha
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name={`question-${currentQ.id}`}
                  value={dosha}
                  checked={answers[currentQ.id] === dosha}
                  onChange={() => handleAnswer(currentQ.id, dosha)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded-full border-2 mr-4 flex items-center justify-center ${
                  answers[currentQ.id] === dosha
                    ? 'border-primary-500 bg-primary-500'
                    : 'border-gray-300'
                }`}>
                  {answers[currentQ.id] === dosha && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-gray-700 font-medium">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
              currentQuestion === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={calculateConstitution}
              disabled={!isAnswered}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                isAnswered
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Complete Assessment
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              disabled={!isAnswered}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                isAnswered
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
