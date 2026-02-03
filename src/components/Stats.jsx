import React from 'react';
import './Stats.css';

const statsData = [
    { label: 'Patients Supported', value: '10k+', icon: '👥' },
    { label: 'Sessions Tracked', value: '500k+', icon: '📊' },
    { label: 'Improvement Consistency', value: '92%', icon: '📈' },
    { label: 'Therapist Satisfaction', value: '4.9/5', icon: '⭐' }
];

const Stats = () => {
    return (
        <section className="stats section-padding">
            <div className="container">
                <div className="stats-grid">
                    {statsData.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-icon">{stat.icon}</div>
                            <h3 className="stat-value">{stat.value}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
