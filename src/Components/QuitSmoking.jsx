import React, { useState, useEffect } from 'react';
import './QuitSmoking.css'; // Import the CSS file

const QuitSmoking = () => {
  // Define tasks for each week with detailed descriptions
  const tasks = {
    week1: [
      { day: 1, description: 'Commitment and Motivation', details: 'Reflect on why you want to quit smoking and remind yourself of these reasons daily.' },
      { day: 2, description: 'Assess Your Smoking Habits', details: 'Track when, where, and why you smoke to understand your habits better.' },
      { day: 3, description: 'Identify Triggers', details: 'Identify the situations, emotions, or people that trigger your urge to smoke.' },
      { day: 4, description: 'Create a Plan', details: 'Develop a personalized quit plan that includes your quit date and strategies to handle cravings.' },
      { day: 5, description: 'Stay Busy', details: 'Engage in activities that keep your mind and hands busy to distract yourself from smoking.' },
    ],
    week2: [
      { day: 1, description: 'Find Alternatives', details: 'Find healthy alternatives to replace the act of smoking, such as chewing gum or using a stress ball.' },
      { day: 2, description: 'Set a Quit Date', details: 'Choose a date to quit smoking and mark it on your calendar as a commitment to yourself.' },
      { day: 3, description: 'Remove Smoking Accessories', details: 'Get rid of cigarettes, lighters, and ashtrays from your home, car, and workplace.' },
      { day: 4, description: 'Inform Friends and Family', details: 'Let your friends and family know about your plan to quit so they can support you.' },
      { day: 5, description: 'Stay Active', details: 'Incorporate physical activities into your daily routine to help reduce cravings and improve your mood.' },
    ],
    week3: [
      { day: 1, description: 'Avoid Triggers', details: 'Avoid places and situations that you associate with smoking to reduce temptation.' },
      { day: 2, description: 'Practice Relaxation', details: 'Use relaxation techniques like deep breathing or meditation to manage stress and cravings.' },
      { day: 3, description: 'Healthy Eating', details: 'Focus on eating a balanced diet to support your body during the quitting process.' },
      { day: 4, description: 'Stay Hydrated', details: 'Drink plenty of water to help flush toxins from your body and reduce cravings.' },
      { day: 5, description: 'Track Your Progress', details: 'Keep a journal of your progress to stay motivated and identify any patterns in your cravings.' },
    ],
    week4: [
      { day: 1, description: 'Reward Yourself', details: 'Celebrate your milestones by rewarding yourself with something enjoyable.' },
      { day: 2, description: 'Join a Support Group', details: 'Participate in a support group to share experiences and gain encouragement from others.' },
      { day: 3, description: 'Stay Positive', details: 'Focus on the positive changes and benefits you experience from quitting smoking.' },
      { day: 4, description: 'Manage Stress', details: 'Develop healthy ways to cope with stress, such as exercise, hobbies, or talking to a friend.' },
      { day: 5, description: 'Stay Committed', details: 'Remind yourself of your reasons for quitting and stay committed to your goal.' },
    ],
    week5: [
      { day: 1, description: 'Reflect on Your Journey', details: 'Look back on how far you have come and the challenges you have overcome.' },
      { day: 2, description: 'Plan for the Future', details: 'Create a long-term plan to maintain your smoke-free lifestyle and handle potential relapses.' },
      { day: 3, description: 'Avoid Overconfidence', details: 'Stay vigilant and don’t let overconfidence lead you back to smoking.' },
      { day: 4, description: 'Continue Healthy Habits', details: 'Maintain the healthy habits you have developed during your quitting journey.' },
      { day: 5, description: 'Celebrate Milestones', details: 'Acknowledge and celebrate each milestone, no matter how small, as a step towards a smoke-free life.' },
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

  return (
    <div>
      {['week1', 'week2', 'week3', 'week4', 'week5'].map((week) => (
        <section
          data-page={week}
          key={week}
          className={`page ${currentWeek === week ? 'active' : ''}`}
        >
          <h1>Quit Smoking</h1>
          
          <h2>{`Week ${week.slice(-1)}`}</h2>
          
          <ul>
            {tasks[week].map((step, index) => (
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
            {currentWeek !== 'week5' && (
              <button className='btn btn-primary' onClick={nextWeek}>Next Week</button>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default QuitSmoking;
