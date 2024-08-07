import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './csss/Quit.css'; // Ensure this is the updated CSS file

const QuitDrug = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  // Define tasks for each week with detailed descriptions
  const DrugTasks = {
    week1: [
      { day: 1, description: 'Acknowledge the Problem', details: 'Understand the consequences of drug use and accept the need for change.' },
      { day: 2, description: 'Reach Out for Support', details: 'Speak with healthcare providers for treatment advice and resources.' },
      { day: 3, description: 'Identify Triggers', details: 'Recognize situations, emotions, or people that lead to drug use.' },
      { day: 4, description: 'Build a Support Network', details: 'Connect with friends, family, or support groups to aid your recovery journey.' },
      { day: 5, description: 'Set Clear Goals', details: 'Determine your objectives, whether to reduce use or quit entirely, and plan accordingly.' },
    ],
    week2: [
      { day: 1, description: 'Create a Safe Space', details: 'Eliminate drugs and related items from your home and frequently visited places.' },
      { day: 2, description: 'Investigate Treatment Methods', details: 'Look into therapy, medication, rehab programs, or combinations.' },
      { day: 3, description: 'Establish Healthy Routines', details: 'Set regular schedules for eating, exercising, and sleeping to boost well-being.' },
      { day: 4, description: 'Stay Engaged with Support Groups', details: 'Regularly attend meetings or sessions, both online and in person, to remain connected to recovery.' },
      { day: 5, description: 'Practice Mindfulness', details: 'Use meditation or deep breathing techniques to stay present and manage cravings.' },
    ],
    week3: [
      { day: 1, description: 'Learn Stress Management', details: 'Discover healthy ways to handle stress, such as yoga, journaling, or hobbies.' },
      { day: 2, description: 'Participate in Physical Activity', details: 'Engage in regular exercise to reduce stress and enhance mood.' },
      { day: 3, description: 'Maintain a Balanced Diet', details: 'Consume nutritious meals to support physical health and mental clarity.' },
      { day: 4, description: 'Avoid Risky Situations', details: 'Steer clear of places or people that might tempt you to use drugs.' },
      { day: 5, description: 'Focus on Personal Development', details: 'Explore new interests, skills, or hobbies that enrich your life and keep you motivated.' },
    ],
    week4: [
      { day: 1, description: 'Celebrate Your Achievements', details: 'Recognize and reward your progress, no matter how small.' },
      { day: 2, description: 'Continue Therapy', details: 'Ongoing professional support can help maintain sobriety and address underlying issues.' },
      { day: 3, description: 'Strengthen Coping Skills', details: 'Enhance resilience by learning new strategies to handle cravings and stress.' },
      { day: 4, description: 'Reconnect with Positive People', details: 'Spend time with individuals who support your recovery and well-being.' },
      { day: 5, description: 'Stay Dedicated to Recovery', details: 'Reaffirm your commitment to a sober life and keep focused on your goals.' },
    ],
    week5: [
      { day: 1, description: 'Reflect on Progress', details: 'Review what has worked well and what challenges you\'ve faced.' },
      { day: 2, description: 'Plan for Sustained Recovery', details: 'Create strategies to maintain your sobriety and continue personal growth.' },
      { day: 3, description: 'Maintain Healthy Habits', details: 'Keep up with nutritious eating, regular exercise, and good sleep routines to support recovery.' },
      { day: 4, description: 'Prepare for Relapses', details: 'Understand that setbacks can occur and make a plan to deal with them.' },
      { day: 5, description: 'Build a Fulfilling Life', details: 'Concentrate on creating a life full of purpose, joy, and healthy relationships.' },
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
          <h1 className='h1'>Quit Drug Addiction</h1>
          
          <h2 className='h2'>{`Week ${week.slice(-1)}`}</h2>
          
          <div className="content-box">
            <ul>
              {DrugTasks[week].map((step, index) => (
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

export default QuitDrug;
