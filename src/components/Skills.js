import React from 'react';
import './Skills.css';

function Skills() {
    
        const skillCategories = [
            {
                title: 'Programming Languages',
                skills: ['Python', 'C++', 'C'],
            },
            {
                title: 'Front-End',
                skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Streamlit', 'Figma'],
            },
            {
                title: 'Back-End',
                skills: ['SQL', 'MongoDB', 'Node.js', 'Flask'],
            },
            {
                title: 'Others',
                skills: ['Data Structures and Algorithms', 'Git', 'GitHub', 'Problem Solving', 'Networking (Basics)'],
            },
    ];

    return (
        <section id="skills" className="skills">
            <h2 className="fade-in">My Skills</h2>
            <div className="skills-grid">
            {skillCategories.map((category, index) => (
                <div key={index} className="skill-card slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <h3>{category.title}</h3>
                    <ul>
                        {category.skills.map((skill, i) => (
                            <li
                                key={i}
                                className="skill-item"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
                ))}
            </div>    
        </section>
    );
}

export default Skills;