import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './csss/Quit.css'; // Ensure this is the updated CSS file

const QuitAlcohol = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation


  // Define tasks for each week with detailed descriptions
  const AlcoholTasks = {
    week1: [
      { day: 1, description: 'Recognize the Issue', details: 'Acknowledge how alcohol influences your life and commit to making a change.' },
      { day: 2, description: 'Consult a Professional', details: 'Contact healthcare professionals for guidance on treatment options and support resources.' },
      { day: 3, description: 'Identify Your Triggers', details: 'Pinpoint specific situations, emotions, or individuals that lead to alcohol consumption.' },
      { day: 4, description: 'Build a Support System', details: 'Connect with friends, family, or support groups who can aid in your recovery process.' },
      { day: 5, description: 'Establish Clear Objectives', details: 'Recognize the consequences of alcohol use on your life and embrace the need for change.' },
    ],
    
    week2: [
      { day: 1, description: 'Establish a Safe Space', details: 'Eliminate alcohol and related triggers from your living spaces and frequently visited areas.' },
      { day: 2, description: 'Assess Treatment Alternatives', details: 'Explore various options like therapy, medication, or rehabilitation programs, or a combination of these.' },
      { day: 3, description: 'Cultivate Healthy Habits', details: 'Set consistent routines for meals, exercise, and sleep to enhance your overall well-being.' },
      { day: 4, description: 'Engage with Support Networks', details: 'Stay actively involved in support groups through regular attendance, whether online or in-person.' },
      { day: 5, description: 'Incorporate Mindfulness Practices', details: 'Use mindfulness techniques such as meditation or deep breathing to stay grounded and manage cravings.' },
    ],
    
    week3: [
      { day: 1, description: 'Master Stress Relief Methods', details: 'Adopt healthy stress management strategies like yoga, journaling, or pursuing hobbies.' },
      { day: 2, description: 'Include Physical Exercise', details: 'Regular physical activity can help alleviate stress and boost your mood.' },
      { day: 3, description: 'Adopt a Nutritious Diet', details: 'Consuming balanced meals supports your physical health and enhances mental clarity.' },
      { day: 4, description: 'Steer Clear of Risky Scenarios', details: 'Avoid environments or people that could tempt you to consume alcohol.' },
      { day: 5, description: 'Invest in Personal Development', details: 'Explore new hobbies, skills, or interests that enrich your life and keep you motivated.' },
    ],
    
    week4: [
      { day: 1, description: 'Recognize Your Achievements', details: 'Celebrate and appreciate your progress, regardless of the size of the milestone.' },
      { day: 2, description: 'Sustain Therapy or Counseling', details: 'Continued professional support is essential for maintaining sobriety and addressing deep-seated issues.' },
      { day: 3, description: 'Enhance Coping Skills', details: 'Strengthen your ability to manage cravings and stress by adopting new coping strategies.' },
      { day: 4, description: 'Reconnect with Positive Influences', details: 'Spend time with individuals who support your recovery and contribute to your well-being.' },
      { day: 5, description: 'Stay Dedicated to Sobriety', details: 'Reaffirm your commitment to a life without alcohol and keep your goals in focus.' },
    ],
    
    week5: [
      { day: 1, description: 'Evaluate Challenges and Triumphs', details: 'Reflect on what strategies have been successful and the obstacles you’ve encountered.' },
      { day: 2, description: 'Strategize for Long-Term Sobriety', details: 'Create a plan to maintain your sobriety and continue your personal growth over the long term.' },
      { day: 3, description: 'Sustain a Healthy Lifestyle', details: 'Continue following healthy routines in eating, exercise, and sleep to support your ongoing recovery.' },
      { day: 4, description: 'Anticipate and Manage Relapses', details: 'Recognize that setbacks may occur and develop a plan to address them if they do.' },
      { day: 5, description: 'Craft a Satisfying Alcohol-Free Life', details: 'Focus on building a life filled with purpose, happiness, and strong, healthy relationships.' },
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
    navigate('/mainpage', { replace: true }); // Navigate to navbarlogin page
  };

  return (
    <div className="body">
      {['week1', 'week2', 'week3', 'week4', 'week5'].map((week) => (
        <section
          data-page={week}
          key={week}
          className={`page ${currentWeek === week ? 'active' : ''}`}
        >
          <h1 className='h1'>Quit Alcohol</h1>
          
          <h2 className='h2'>{`Week ${week.slice(-1)}`}</h2>
          
          <div className="content-box">
            <ul>
              {AlcoholTasks[week].map((step, index) => (
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

export default QuitAlcohol;
