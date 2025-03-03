import React, {useState} from 'react';
import './Projects.css';
import chatbotImg from './chatbot.webp';
import weatherAppImg from './weather.jpeg';
import snakeGameImg from './snake-game.webp';
import qrCodeImg from './qrcode.jpeg';
import portfolioImg from './portfolio img.jpeg';


function Projects() {
    const projects = [
        {
            name: 'Chatbot',
            image: chatbotImg,
            description: 'An interactive chatbot that allows users to interact with their CSV files or databases and help in summarizing and visualizing.It allows users to Translate the output into different languages and even generate speech from text. It also includes additional features like chat history.',
            Link:'https://github.com/VooraManogna/chatbot',
        },
        {
            name: 'Weather App',
            image: weatherAppImg,
            description: 'A weather forecasting application that provides real-time weather updates based on users search or current geolocation. It also provides additional information like wind speed, humidity, precision etc.',
            Link:'https://vooramanogna.github.io/weather_app/',
        },
        {
            name: 'Snake Game',
            image: snakeGameImg,
            description: 'A classic user friendly snake game that offers intuitive controls and smooth animation which provides gaming experience and engaging gameplay.',
            Link:'https://vooramanogna.github.io/snakegame/',
        },
        {
            name: 'QR Code Generator',
            image: qrCodeImg,
            description: 'A tool to generate QR codes for URLs, text, or other data inputs with customizable options.',
            Link:' https://vooramanogna.github.io/portfolio/',
        },
        {
            name: 'Portfolio',
            image: portfolioImg,
            description: 'A personal portfolio website showcasing projects, skills, and professional profiles.',
            Link:' https://vooramanogna.github.io/portfolio/',
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
                        <a href={projects[currentIndex].Link} target="_blank" rel="noopener noreferrer">
                            <button className="github-btn">View</button>
                        </a>
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