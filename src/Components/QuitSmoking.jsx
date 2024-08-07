import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './csss/Quit.css'; // Ensure this is the updated CSS file

const QuitSmoking = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  // Define tasks for each week with detailed descriptions
  const SmokingTasks = {
    week1: [
      { day: 1, description: 'Acknowledge the Problem', details: 'Recognize the impact of smoking on your life and accept the need for change.' },
      { day: 2, description: 'Set a Date for Quiting', details: 'Choose a date within the next two weeks to quit smoking.' },
      { day: 3, description: 'Understand Your Triggers', details: 'Identify situations, emotions, or people that prompt smoking.' },
      { day: 4, description: 'Develop a Support Network', details: 'Reach out to friends, family, or support groups who can assist in your quit journey.' },
      { day: 5, description: 'Set Clear Goals', details: 'Define what you want to achieve and outline a plan to quit smoking.' },
    ],
    week2: [
      { day: 1, description: 'Create a Smoke-Free Environment', details: 'Remove cigarettes and smoking-related items from your home and places you frequent.' },
      { day: 2, description: 'Consider Nicotine Replacement Therapy', details: 'Explore options like patches, gum, or lozenges to manage withdrawal symptoms.' },
      { day: 3, description: 'Develop Healthy Routines', details: 'Establish regular schedules for meals, exercise, and sleep to support overall well-being.' },
      { day: 4, description: 'Stay Connected with Support Groups', details: 'Regularly attend meetings or sessions, both online and offline, to stay engaged with your quit journey.' },
      { day: 5, description: 'Practice Mindfulness', details: 'Use techniques like meditation or deep breathing to stay present and manage cravings.' },
    ],
    week3: [
      { day: 1, description: 'Learn Stress Management Techniques', details: 'Find healthy ways to cope with stress, such as yoga, journaling, or hobbies.' },
      { day: 2, description: 'Engage in Physical Activity', details: 'Regular exercise can help reduce stress and improve mood.' },
      { day: 3, description: 'Maintain a Balanced Diet', details: 'Eating nutritious meals supports physical health and can improve mental clarity.' },
      { day: 4, description: 'Avoid High-Risk Situations', details: 'Stay away from places or people that could tempt you to smoke.' },
      { day: 5, description: 'Focus on Personal Growth', details: 'Pursue new interests, skills, or hobbies that enrich your life and keep you motivated.' },
    ],
    week4: [
      { day: 1, description: 'Celebrate Your Progress', details: 'Acknowledge and reward your achievements, no matter how small.' },
      { day: 2, description: 'Continue Counseling or Therapy', details: 'Ongoing professional support can help maintain your smoke-free lifestyle and address underlying issues.' },
      { day: 3, description: 'Strengthen Coping Mechanisms', details: 'Build resilience by learning new strategies to handle cravings and stress.' },
      { day: 4, description: 'Reconnect with Positive Influences', details: 'Spend time with people who encourage your smoke-free lifestyle and well-being.' },
      { day: 5, description: 'Stay Committed to Your Recovery', details: 'Reaffirm your commitment to a smoke-free life and stay focused on your goals.' },
    ],
    week5: [
      { day: 1, description: 'Reflect on Challenges and Successes', details: 'Consider what has worked well and what challenges you\'ve faced.' },
      { day: 2, description: 'Plan for Long-Term Recovery', details: 'Develop strategies to sustain your smoke-free lifestyle and continue personal growth.' },
      { day: 3, description: 'Maintain a Healthy Lifestyle', details: 'Keep up with healthy eating, exercise, and sleep routines to support your smoke-free journey.' },
      { day: 4, description: 'Prepare for Potential Relapses', details: 'Understand that setbacks can happen and create a plan to handle them.' },
      { day: 5, description: 'Build a Fulfilling Smoke-Free Life', details: 'Focus on creating a life filled with purpose, joy, and healthy relationships.' },
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
    navigate('/mainpage', { replace: true }); // Navigate to mainpage
  };

  return (
    <div className="body">
      {['week1', 'week2', 'week3', 'week4', 'week5'].map((week) => (
        <section
          data-page={week}
          key={week}
          className={`page ${currentWeek === week ? 'active' : ''}`}
        >
          <h1 className='h1'>Quit Smoking</h1>
          
          <h2 className='h2'>{`Week ${week.slice(-1)}`}</h2>
          
          <div className="content-box">
            <ul>
              {SmokingTasks[week].map((step, index) => (
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

export default QuitSmoking;
