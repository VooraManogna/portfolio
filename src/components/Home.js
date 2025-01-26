import React from 'react';
import './Home.css';

function Home() {
    return (
        <section id="home" className="home">
            <div className="home-content">
                <div className="text">
                    <h1 className='fade-in'>Hello, I'm Manogna</h1>
                    <p className='slide-in'>A passionate computer science engineer and front-end developer. Welcome to my portfolio!</p>
                </div>
                <img src="your-photo.jpg" alt="Manogna's Photo" className="profile-photo zoom-in" />
            </div>
        </section>
    );
}

export default Home;