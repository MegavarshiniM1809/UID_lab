import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
<img src="/Profile.jpg" alt="Megavarshini M" className="profile-pic" />


        <h1>Megavarshini M</h1>
        <h3>Full Stack Developer</h3>

        <section className="about">
          <h2>About Me</h2>
          <p>
            Passionate developer skilled in web development and database management. 
            Experienced in multiple programming languages with hands-on project work.
          </p>
        </section>

        <section className="skills">
          <h2>Programming Languages</h2>
          <ul>
            <li>Java</li>
            <li>C</li>
            <li>C++</li>
            <li>Python</li>
          </ul>
        </section>

        <section className="strengths">
          <h2>Core Strengths</h2>
          <ul>
            <li>Web Development (MERN)</li>
            <li>Database Management</li>
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
          </ul>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li><strong>Travel Budget Planner</strong> (MERN) – A real-time trip cost planner with flight and accommodation estimation.</li>
            <li><strong>Billing Software</strong> (Python + SQL) – A billing system with database integration for managing transactions.</li>
            <li><strong>Portfolio Website</strong> (React) – A personal portfolio to showcase skills and projects.</li>
          </ul>
        </section>

        <section className="education">
          <h2>Education</h2>
          <p>
            B.Tech Information Technology – 3rd Year<br />
            <em>Building expertise in software engineering and full-stack development.</em>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Profile;
