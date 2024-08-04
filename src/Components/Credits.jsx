// eslint-disable-next-line no-unused-vars
import React from 'react';
import './csss/credits.css';
import Boxes from '../assets/Team/Box.jpg';
import Abishith from '../assets/Team/Abishith.jpg';
import Aby from '../assets/Team/Aby.jpg';
import Aishwarya from '../assets/Team/Aishwarya.jpg';
import Ashwin from '../assets/Team/Ashwin.jpg';
import Athira from '../assets/Team/Athira.jpg';
import Dilshith from '../assets/Team/Dilshith.jpg';
import Nakul from '../assets/Team/Nakul.jpg';
import Parvathi from '../assets/Team/Parvathi.jpg';
import Sreeraj from '../assets/Team/Sreeraj.jpg';

const Team = () => {
  const members = [
    { name: 'Abishith', position: 'Content team', photo: Boxes, hoverPhoto: Abishith },
    { name: 'Aby Pious', position: 'Content team', photo: Boxes, hoverPhoto: Aby },
    { name: 'Aiswarya', position: 'Content team', photo: Boxes, hoverPhoto: Aishwarya },
    { name: 'Ashwin', position: 'Content team', photo: Boxes, hoverPhoto: Ashwin },
    { name: 'Athira', position: 'Content team', photo: Boxes, hoverPhoto: Athira },
    { name: 'Dilshith', position: 'Content team', photo: Boxes, hoverPhoto: Dilshith },
    { name: 'Nakul', position: 'Content team', photo: Boxes, hoverPhoto: Nakul },
    { name: 'Parvathi', position: 'Content team', photo: Boxes, hoverPhoto: Parvathi },
    { name: 'Sreeraj', position: 'Content team', photo: Boxes, hoverPhoto: Sreeraj },
  ];

  return (
    <div>
      <div className="team-section">
        <h1 className="team-heading">Meet Our Team</h1>
      </div>
      <div className="team-container">
        {members.map((member, index) => (
          <div key={index} className="team-member">
            <div className="image-container">
              <img src={member.photo} alt={member.name} className="default-photo" />
              <img src={member.hoverPhoto} alt={member.name} className="hover-photo" />
            </div>
            <div className="member-name">{member.name}</div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Team;
