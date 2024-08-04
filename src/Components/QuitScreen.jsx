import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'; // Adjust the import path as needed
import './csss/Quit.css'; // Ensure this is the updated CSS file

const QuitScreen = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  // Define tasks for each week with detailed descriptions
  const ScreenTasks = {
    week1: [
      { day: 1, description: 'Acknowledge the Problem', details: 'Recognize the impact of excessive screen use on your life and accept the need for change.' },
      { day: 2, description: 'Set Screen Time Limits', details: 'Determine a daily limit for your screen use and set boundaries.' },
      { day: 3, description: 'Identify Your Triggers', details: 'Understand what situations, emotions, or times of day prompt excessive screen use.' },
      { day: 4, description: 'Create a Screen-Free Environment', details: 'Designate certain areas and times as screen-free to help reduce usage.' },
      { day: 5, description: 'Engage in Alternative Activities', details: 'Find hobbies or activities to replace screen time, such as reading, exercising, or spending time outdoors.' },
    ],
    week2: [
      { day: 1, description: 'Track Your Screen Time', details: 'Use apps or settings on your devices to monitor how much time you spend on screens.' },
      { day: 2, description: 'Establish a Routine', details: 'Create a daily schedule that includes screen-free periods and productive activities.' },
      { day: 3, description: 'Stay Connected Offline', details: 'Plan face-to-face interactions with friends and family to reduce reliance on digital communication.' },
      { day: 4, description: 'Set Goals and Rewards', details: 'Set short-term and long-term goals for reducing screen time, and reward yourself for achieving them.' },
      { day: 5, description: 'Practice Mindfulness', details: 'Use mindfulness techniques to become more aware of your screen usage and its effects on your well-being.' },
    ],
    week3: [
      { day: 1, description: 'Create a Bedtime Routine', details: 'Avoid screens at least one hour before bed to improve sleep quality.' },
      { day: 2, description: 'Limit Social Media Use', details: 'Set specific times for checking social media and avoid mindless scrolling.' },
      { day: 3, description: 'Engage in Physical Activity', details: 'Incorporate regular exercise into your daily routine to reduce screen time and improve health.' },
      { day: 4, description: 'Declutter Your Digital Space', details: 'Organize and clean up your digital devices to reduce distractions and improve productivity.' },
      { day: 5, description: 'Disconnect for a Day', details: 'Challenge yourself to spend an entire day without screens to reset your habits.' },
    ],
    week4: [
      { day: 1, description: 'Evaluate Your Progress', details: 'Reflect on your screen time reduction journey and identify areas for improvement.' },
      { day: 2, description: 'Reinforce Healthy Habits', details: 'Continue to build and reinforce healthy screen time habits that you have developed.' },
      { day: 3, description: 'Focus on Personal Development', details: 'Use your extra time to pursue new skills, hobbies, or personal goals.' },
      { day: 4, description: 'Stay Accountable', details: 'Share your progress with a friend or family member who can help keep you on track.' },
      { day: 5, description: 'Plan for Long-Term Success', details: 'Develop a long-term plan to maintain a healthy balance of screen time in your life.' },
    ],
    week5: [
      { day: 1, description: 'Celebrate Your Achievements', details: 'Take time to acknowledge and celebrate the progress you have made.' },
      { day: 2, description: 'Continue to Set Goals', details: 'Keep setting new goals to further reduce screen time and improve your well-being.' },
      { day: 3, description: 'Maintain a Healthy Lifestyle', details: 'Continue to prioritize physical activity, healthy eating, and sleep to support your overall well-being.' },
      { day: 4, description: 'Prepare for Potential Relapses', details: 'Have a plan in place to handle any setbacks and get back on track quickly.' },
      { day: 5, description: 'Build a Fulfilling Screen-Free Life', details: 'Focus on creating a life filled with purpose, joy, and meaningful offline activities.' },
    ],
  };

  // Define state for current week
  const [currentWeek, setCurrentWeek] = useState('week1');
  const [animating, setAnimating] = useState(false);

  // Define functions to handle week navigation
  const nextWeek = () => {
    if (!animating) {
      if (currentWeek === 'week1') setCurrentWeek('week2');
      else if (currentWeek === 'week2') setCurrentWeek('week3');
      else if (currentWeek === 'week3') setCurrentWeek('week4');
      else if (currentWeek === 'week4') setCurrentWeek('week5');
      setAnimating(true);
    }
  };

  const prevWeek = () => {
    if (!animating) {
      if (currentWeek === 'week5') setCurrentWeek('week4');
      else if (currentWeek === 'week4') setCurrentWeek('week3');
      else if (currentWeek === 'week3') setCurrentWeek('week2');
      else if (currentWeek === 'week2') setCurrentWeek('week1');
      setAnimating(true);
    }
  };

  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => setAnimating(false), 500); // Match with CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [animating]);

  const finishHandler = () => {
    navigate('/mainpage'); // Navigate to mainpage
  };

  return (
    <div className="body">
      {['week1', 'week2', 'week3', 'week4', 'week5'].map((week) => (
        <section
          data-page={week}
          key={week}
          className={`page ${currentWeek === week ? 'active' : ''}`}
        >
          <h1 className='h1'>Quit Screen Addiction</h1>
          
          <h2 className='h2'>{`Week ${week.slice(-1)}`}</h2>
          
          <div className="content-box">
            <ul>
              {ScreenTasks[week].map((step, index) => (
                <li key={index}>
                  <strong>Day {step.day}: {step.description}</strong>
                  <p>{step.details}</p>
                </li>
              ))}
            </ul>
            <div style={{ padding: '20px' }}>
              {currentWeek !== 'week1' && (
                <button className='btn btn-primary' onClick={prevWeek}>Previous Week</button>
              )}
              {currentWeek !== 'week5' ? (
                <button className='btn btn-primary' onClick={nextWeek}>Next Week</button>
              ) : (
                <button className='btn btn-primary' onClick={finishHandler}>Finished</button>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default QuitScreen;
