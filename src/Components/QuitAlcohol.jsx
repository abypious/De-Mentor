import React, { useState, useEffect } from 'react';

import './Quit.css'; // Import the CSS file

const QuitAlcohol = () => {
  // Define tasks for each week
  const alcoholTasks = {
    week1: [
      { day: 1, description: 'Commitment and Motivation' },
      { day: 2, description: 'Assess Your Drinking Habits' },
      { day: 3, description: 'Identify Triggers' },
      { day: 4, description: 'Create a Plan' },
      { day: 5, description: 'Stay Busy' },
    ],
    week2: [
      { day: 1, description: 'Find Alternatives' },
      { day: 2, description: 'Set a Quit Date' },
      { day: 3, description: 'Remove Alcohol from Your Home' },
      { day: 4, description: 'Inform Friends and Family' },
      { day: 5, description: 'Stay Active' },
    ],
    week3: [
      { day: 1, description: 'Avoid Triggers' },
      { day: 2, description: 'Practice Relaxation' },
      { day: 3, description: 'Healthy Eating' },
      { day: 4, description: 'Stay Hydrated' },
      { day: 5, description: 'Track Your Progress' },
    ],
    week4: [
      { day: 1, description: 'Reward Yourself' },
      { day: 2, description: 'Join a Support Group' },
      { day: 3, description: 'Stay Positive' },
      { day: 4, description: 'Manage Stress' },
      { day: 5, description: 'Stay Committed' },
    ],
    week5: [
      { day: 1, description: 'Reflect on Your Journey' },
      { day: 2, description: 'Plan for the Future' },
      { day: 3, description: 'Avoid Overconfidence' },
      { day: 4, description: 'Continue Healthy Habits' },
      { day: 5, description: 'Celebrate Milestones' },
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
          <h1>Quit Drinking</h1>
          
          <h2>{`Week ${week.slice(-1)}`}</h2>
          
          <ul>
            {alcoholTasks[week].map((step, index) => (
              <li key={index}>
                Day {step.day}: {step.description}
              </li>
            ))}
          </ul> <div style={{ padding: '20px' }}>
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

export default QuitAlcohol;