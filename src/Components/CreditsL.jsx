import React from 'react';
import './csss/credits.css';
import Box1 from '../assets/Team/Box1.png';
import Box2 from '../assets/Team/Box2.png';
import Box from '../assets/Team/Box.jpg';
import Abishith from '../assets/Team/Abishith.jpg';
import Aby from '../assets/Team/Aby.jpg';
import Aishwarya from '../assets/Team/Aishwarya.jpg';
import Ashwin from '../assets/Team/Ashwin.jpg';
import Athira from '../assets/Team/Athira.jpg';
import Dilshith from '../assets/Team/Dilshith.jpg';
import Nakul from '../assets/Team/Nakul.jpg';
import Parvathi from '../assets/Team/Parvathi.jpg';
import Sreeraj from '../assets/Team/Sreeraj.jpg';

const TeamL = () => {
  const members = [
    { name: 'Abishith', position: 'Content team', photo: Box, hoverPhoto: Abishith, githubUrl: 'https://github.com/Abishith16' },
    { name: 'Aby Pious', position: 'Content team', photo: Box1, hoverPhoto: Aby, githubUrl: 'https://github.com/abypious' },
    { name: 'Aiswarya', position: 'Content team', photo: Box2, hoverPhoto: Aishwarya, githubUrl: 'https://github.com/aiswaryakrishnakumar' },
    { name: 'Ashwin', position: 'Content team', photo: Box2, hoverPhoto: Ashwin, githubUrl: 'https://github.com/maybeAshwin' },
    { name: 'Athira', position: 'Content team', photo: Box1, hoverPhoto: Athira, githubUrl: 'https://github.com/AthiraVijayan01' },
    { name: 'Dilshith', position: 'Content team', photo: Box, hoverPhoto: Dilshith, githubUrl: 'https://github.com/abnormaldil' },
    { name: 'Nakul', position: 'Content team', photo: Box, hoverPhoto: Nakul, githubUrl: 'https://github.com/Heisenberg324' },
    { name: 'Parvathi', position: 'Content team', photo: Box1, hoverPhoto: Parvathi, githubUrl: 'https://github.com/parushub' },
    { name: 'Sreeraj', position: 'Content team', photo: Box2, hoverPhoto: Sreeraj, githubUrl: 'https://github.com/sreerajk001' },
  ];

  return (
    <div>
      <div className="team-section">
        <h1 className="team-heading">Meet Our Team</h1>
      </div>
      <div className="team-container">
        {members.map((member, index) => (
          <a href={member.githubUrl} key={index} target="_blank" rel="noopener noreferrer" className="team-member-link">
            <div className="team-member">
              <div className="image-container">
                <img src={member.photo} alt={member.name} className="default-photo" />
                <img src={member.hoverPhoto} alt={member.name} className="hover-photo" />
              </div>
              <div className="member-name">{member.name}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamL;
