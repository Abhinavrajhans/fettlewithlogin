import React from 'react'
import './AboutUs.css'
function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to our calorie calculator and diet planner application! We are passionate about helping you maintain a healthy lifestyle by providing you with tools to manage your daily calorie intake and plan nutritious meals.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to empower individuals to make informed choices about their diet and nutrition. We believe that a balanced diet is key to achieving overall well-being, and our goal is to make it easier for you to reach your health and fitness goals.
      </p>
      <h2>Meet the Team</h2>
      <div className="team-members">
        <div className="team-member">
          
          <h3>John Doe</h3>
          <p>Role: Co-founder & Developer</p>
        </div>
        <div className="team-member">
          <h3>Jane Smith</h3>
          <p>Role: Co-founder & Nutritionist</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
  );
}

export default AboutUs