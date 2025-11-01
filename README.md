# Ayurveda Wellness Platform

A streamlined React-based web application for Ayurvedic wellness assessment and personalized health recommendations based on constitution analysis.

## Description

The Ayurveda Wellness Platform is designed to help users discover their unique Ayurvedic constitution through a simple questionnaire and receive personalized recommendations for nutrition and lifestyle. The application features a clean, intuitive interface with basic user management capabilities.

## Features

- 🔐 **User Authentication**: Simple user registration and login system
- 📋 **Constitution Assessment**: Interactive questionnaire to determine your Ayurvedic constitution
- 🍎 **Personalized Nutrition Guide**: Basic dietary recommendations based on your constitution
- ⏰ **Lifestyle Schedule**: Simple daily routine recommendations
- 👥 **Admin Dashboard**: Basic user management interface
- 📱 **Responsive Design**: Clean, mobile-friendly design
- 💾 **Local Data Persistence**: Secure local storage for user data

## Technology Stack

- **Frontend**: React 19.2.0
- **Styling**: Tailwind CSS 3.4.18
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Testing**: React Testing Library



### Core Components
- `WelcomeScreen`: Simple welcome and user selection
- `UserDashboard`: Basic dashboard with progress overview
- `ConstitutionAssessment`: Streamlined questionnaire
- `NutritionGuide`: Essential nutrition recommendations
- `LifestyleSchedule`: Basic lifestyle planning
- `AdminDashboard`: Simple user management

## Installation Steps

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```

3. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The application will automatically reload when you make changes

## Project Structure

```
src/
├── components/
│   ├── WelcomeScreen.jsx        # Simple welcome and user selection
│   ├── UserDashboard.jsx        # Basic user dashboard
│   ├── ConstitutionAssessment.jsx # Constitution questionnaire
│   ├── NutritionGuide.jsx       # Essential nutrition recommendations
│   ├── LifestyleSchedule.jsx    # Basic lifestyle planning
│   └── AdminDashboard.jsx       # Simple admin panel
├── App.js                       # Main application component
├── App.css                      # Custom styles
├── index.js                     # Application entry point
└── index.css                    # Base styles
```

## Usage

### For New Users
1. **Create Profile**: Register with your name and basic information
2. **Constitution Assessment**: Complete the questionnaire
3. **Nutrition Guide**: Access dietary recommendations
4. **Lifestyle Schedule**: Get daily routine suggestions

### For Returning Users
1. **Login**: Select your existing profile
2. **Dashboard**: View your progress and access features
3. **Update Information**: Modify your assessments and plans

### For Administrators
1. **Admin Access**: Use PIN "admin123" to access admin panel
2. **User Management**: View and manage all users
3. **Basic Analytics**: Monitor user engagement

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Constitution Types

The application supports all major Ayurvedic constitutions:

- **Vata**: Air and Space elements - Creative, energetic, adaptable
- **Pitta**: Fire and Water elements - Intelligent, focused, determined
- **Kapha**: Earth and Water elements - Calm, patient, loving
- **Balanced**: Harmonious combination of all elements
- **Dual Constitutions**: Combinations like Vata-Pitta, Vata-Kapha, Pitta-Kapha


## Browser Support

This application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



## Future Enhancements

- [ ] Backend integration for data persistence
- [ ] User authentication with secure login
