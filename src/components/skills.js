import React from 'react';
import colorSharp from "../assets/img/color-sharp.png";

const SkillRing = ({ skill, percentage }) => {
  const radius = 50;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="skill-ring">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#262626"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="url(#gradient)"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#AA367C" />
            <stop offset="100%" stopColor="#4A2FBD" />
          </linearGradient>
        </defs>
      </svg>
      <div className="percentage">{percentage}%</div>
      <div className="skill-name">{skill}</div>
    </div>
  );
};

export const Skills = () => {
  const skills = [
    { name: "Software Engineering", level: 95 },
    { name: "Web Development", level: 85 },
    { name: "Data Engineering", level: 75 },
    { name: "AI/ML (Basics)", level: 65 }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Here's my skill level in each domain:</p>
              <div className="skill-rings">
                {skills.map((skill, index) => (
                  <SkillRing key={index} skill={skill.name} percentage={skill.level} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background Image" />
    </section>
  );
}