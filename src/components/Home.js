import React from 'react';
import './Home.css';
import manogna from './manogna photo.jpg';

function Home() {
    return (
        <section id="home" className="home">
            <div className="home-content">
                <div className="text">
                    <h1 className='fade-in'>Hi, I'm Manogna Voora</h1>
                    <p className='slide-in'> A Computer Science graduate with a passion for solving complex problems through a strong understanding of data structures and algorithms. As a web developer, I focus on designing dynamic and user-friendly applications that combine creativity with performance-driven solutions.</p>
                </div>
                <img src={manogna} alt="Manogna's Photo" className="profile-photo zoom-in" />
            </div>
        </section>
    );
}

export default Home;