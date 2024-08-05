import React, { useRef } from "react";
import alcoho from "../assets/alocohol.png";
import drug from "../assets/drug.png";
import porn from "../assets/porn-hub.png";
import screen from "../assets/screen.png";
import smoke from "../assets/smoke.png";
import './csss/Land.css'

const Land = () => {
  const containerRef = useRef(null);
  let hoverTimer = null;

  const handleMouseOver = () => {
    hoverTimer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 3000); // 3000ms = 3 seconds
  };

  const handleMouseOut = () => {
    clearTimeout(hoverTimer);
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="welcome">Welcome to De-Mentor</h1>
      </header>

      <div className="addiction-container">
        <div
          className="addiction-card"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src={alcoho} alt="Alcohol Addiction" />
          <div className="overlay">
            Alcohol addiction is a chronic condition characterized by an
            inability to control or stop drinking despite negative consequences.
            {/* <button className="overlay-button">Proceed</button> */}
          </div>
          <div>
            {" "}
            <p className="heading">Alcohol Addiction</p>
          </div>
          {/* <p>Find support and resources for alcohol addiction.</p> */}
        </div>
        <div
          className="addiction-card"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src={drug} alt="Drug Addiction" />
          <div className="overlay">
          Drug addiction is a persistent and debilitating chronic disease marked by an 
          overwhelming and compulsive urge to seek out and use drugs.
          
            <div>
              <p className="heading">Drug Addiction</p>
            </div>
            {/* <button className="overlay-button">Proceed</button> */}
          </div>

          {/* <p>Get help and information on drug addiction.</p> */}
        </div>
        <div
          className="addiction-card"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src={porn} alt="Porn Addiction" />
          <div className="overlay">
            Porn addiction involves excessive porn consumption, negatively
            affecting mental health, relationships, and daily life.
            {/* <button className="overlay-button">Proceed</button> */}
          </div>
          <p className="heading">Porn Addiction</p>
          {/* <p>Resources and support for porn addiction.</p> */}
        </div>
        <div
          className="addiction-card"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src={screen} alt="Screen Addiction" />
          <div className="overlay">
            Screen addiction is the excessive use of digital devices, leading to
            negative impacts on mental and physical well-being.
            {/* <button className="overlay-button">Proceed</button> */}
          </div>
          <p className="heading">Screen Addiction</p>
          {/* <p>Learn about screen addiction and find help.</p> */}
        </div>
        <div
          className="addiction-card"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src={smoke} alt="Smoke Addictions" />
          <div className="overlay">
          Smoke addiction, is a condition where an individual develops a compulsive reliance on nicotine, a stimulant found in 
          tobacco products.
            {/* <button className="overlay-button">Proceed</button> */}
          </div>
          <p className="heading">Smoke Addictions</p>
          {/* <p>Resources and support for other addictions.</p> */}
        </div>
      </div>

      <div ref={containerRef} className="additional-content">
        <div className="additional-card">
          {/* <p>Some additional content here.</p> */}
        </div>
        <div className="additional-card">
          {/* <p>More additional content here.</p> */}
        </div>

        <div className="additional-card">
          {/* <p>More additional content here.</p> */}
        </div>
        <div className="additional-card">
          {/* <p>Some additional content here.</p> */}
        </div>
        <div className="additional-card">
          {/* <p>More additional content here.</p> */}
        </div>
      </div>
    </div>
  );
};

export default Land;
