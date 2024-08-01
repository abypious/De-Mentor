import React, { useState, useEffect } from 'react';
import './Quit.css'; // Import the CSS file

const QuitScreen = () => {
  // Define tasks for each week with detailed descriptions
  const screenTasks = {
    week1: [
      { day: 1, description: 'Commitment and Motivation', details: 'Reflect on why you want to reduce screen time and remind yourself of these reasons daily.' },
      { day: 2, description: 'Assess Your Screen Habits', details: 'Track how much time you spend on screens and what activities you engage in.' },
      { day: 3, description: 'Identify Triggers', details: 'Identify the situations, emotions, or people that trigger excessive screen use.' },
      { day: 4, description: 'Create a Plan', details: 'Develop a personalized plan that includes specific goals and strategies to limit screen time.' },
      { day: 5, description: 'Stay Busy', details: 'Engage in activities that keep your mind and hands busy to distract yourself from screens.' },
    ],
    week2: [
      { day: 1, description: 'Find Alternatives', details: 'Find healthy alternatives to screen time, such as reading, exercising, or hobbies.' },
      { day: 2, description: 'Set Screen-Free Times', details: 'Designate certain times of the day as screen-free periods to break the habit.' },
      { day: 3, description: 'Limit Access to Screens', details: 'Remove or limit access to devices during meals, before bed, and in other key moments.' },
      { day: 4, description: 'Inform Friends and Family', details: 'Let your friends and family know about your plan to reduce screen time so they can support you.' },
      { day: 5, description: 'Stay Active', details: 'Incorporate physical activities into your daily routine to help reduce the urge to use screens.' },
    ],
    week3: [
      { day: 1, description: 'Avoid Triggers', details: 'Avoid situations and activities that you associate with excessive screen use to reduce temptation.' },
      { day: 2, description: 'Practice Relaxation', details: 'Use relaxation techniques like deep breathing or meditation to manage stress and cravings.' },
      { day: 3, description: 'Healthy Habits', details: 'Focus on developing healthy habits to replace your previous behavior.' },
      { day: 4, description: 'Stay Hydrated', details: 'Drink plenty of water to help reduce cravings and maintain overall health.' },
      { day: 5, description: 'Track Your Progress', details: 'Keep a journal of your progress to stay motivated and identify any patterns in your cravings.' },
    ],
    week4: [
      { day: 1, description: 'Reward Yourself', details: 'Celebrate your milestones by rewarding yourself with something enjoyable.' },
      { day: 2, description: 'Join a Support Group', details: 'Participate in a support group to share experiences and gain encouragement from others.' },
      { day: 3, description: 'Stay Positive', details: 'Focus on the positive changes and benefits you experience from reducing screen time.' },
      { day: 4, description: 'Manage Stress', details: 'Develop healthy ways to cope with stress, such as exercise, hobbies, or talking to a friend.' },
      { day: 5, description: 'Stay Committed', details: 'Remind yourself of your reasons for reducing screen time and stay committed to your goal.' },
    ],
    week5: [
      { day: 1, description: 'Reflect on Your Journey', details: 'Look back on how far you have come and the challenges you have overcome.' },
      { day: 2, description: 'Plan for the Future', details: 'Create a long-term plan to maintain your reduced screen time and handle potential relapses.' },
      { day: 3, description: 'Avoid Overconfidence', details: 'Stay vigilant and don’t let overconfidence lead you back to excessive screen use.' },
      { day: 4, description: 'Continue Healthy Habits', details: 'Maintain the healthy habits you have developed during your journey to reduce screen time.' },
      { day: 5, description: 'Celebrate Milestones', details: 'Acknowledge and celebrate each milestone, no matter how small, as a step towards a healthier relationship with screens.' },
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
          <h1>Quit Screen Addiction</h1>
          
          <h2>{`Week ${week.slice(-1)}`}</h2>
          
          <ul>
            {screenTasks[week].map((step, index) => (
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

export default QuitScreen;
