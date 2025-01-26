import React, {useState} from 'react';
import './Projects.css';
// import chatbotImg from './chatbot.png';
// import weatherAppImg from './weather_app.png';
// import snakeGameImg from './snake_game.png';
// import qrCodeImg from './qr_code.png';
// import portfolioImg from './portfolio.png';

import codechefImg from './codechef img.jpeg';
// import leetcodeImg from './leetcode img.png';
// import githubImg from './github img.png';

function Projects() {
    const projects = [
        {
            name: 'Chatbot',
            image: codechefImg,
            description: 'An interactive chatbot that allows users to query CSV files or databases. Features include data visualization, chat history, text-to-speech, and output translation.',
        },
        {
            name: 'Weather App',
            image: codechefImg,
            description: 'A weather forecasting application providing real-time updates and location-based predictions.',
        },
        {
            name: 'Snake Game',
            image: codechefImg,
            description: 'A classic snake game built with JavaScript, featuring intuitive controls and engaging gameplay.',
        },
        {
            name: 'QR Code Generator',
            image: codechefImg,
            description: 'A tool to generate QR codes for URLs, text, or other data inputs with customizable options.',
        },
        {
            name: 'Portfolio',
            image: codechefImg,
            description: 'A personal portfolio website showcasing projects, skills, and professional profiles.',
        },
    ];

//     return (
//         <section id="projects" className="projects">
//             <h2>Projects</h2>
//             <div className="projects-container">
//                 {projects.map((project, index) => (
//                     <div key={index} className="project-card">
//                         <div className="project-image-wrapper">
//                             <img src={project.image} alt={project.name} className="project-image" />
//                         </div>
//                         <div className="project-description">
//                             <h3>{project.name}</h3>
//                             <p>{project.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

// export default Projects;



const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="projects-carousel">
                <button className="carousel-btn prev" onClick={handlePrev}>&lt;</button>
                <div className="project-card">
                    <div className="project-image-wrapper">
                        <img src={projects[currentIndex].image} alt={projects[currentIndex].name} className="project-image" />
                    </div>
                    <div className="project-description">
                        <h3>{projects[currentIndex].name}</h3>
                        <p>{projects[currentIndex].description}</p>
                    </div>
                </div>
                <button className="carousel-btn next" onClick={handleNext}>&gt;</button>
            </div>
            <div className="carousel-indicators">
                {projects.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
}

export default Projects;