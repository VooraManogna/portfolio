import React from 'react';
import './Profile.css';
import codechefImg from './codechef img.jpeg';
import leetcodeImg from './leetcode img.png';
import githubImg from './github img.png';

function Profile() {
    const profiles = [
        {
            name: 'CodeChef',
            image: codechefImg,
            link: 'https://www.codechef.com/users/your_username',
        },
        {
            name: 'LeetCode',
            image: leetcodeImg,
            link: 'https://leetcode.com/your_username',
        },
        {
            name: 'GitHub',
            image:githubImg,
            link: 'https://github.com/VooraManogna',
        },
    ];

    return (
        <section id="profile" className="profile">
            <h2>Profiles</h2>
            <div className="profile-grid">
                {profiles.map((profile, index) => (
                    <div key={index} className="profile-card">
                        <a href={profile.link} target="_blank" rel="noopener noreferrer">
                            <img src={profile.image} alt={profile.name} className="profile-image" />
                            <h3>{profile.name}</h3>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Profile;