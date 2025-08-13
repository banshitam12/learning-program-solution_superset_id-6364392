import React from 'react';
import { useParams, Link } from 'react-router-dom';
import trainersData from './TrainersMock';

const TrainerDetail = () => {
    const { id } = useParams();
    const trainer = trainersData.find(t => t.TrainerId === parseInt(id));

    if (!trainer) {
        return (
            <div style={{ padding: '20px' }}>
                <h2>Trainer Not Found</h2>
                <Link to="/trainers">← Back to Trainers List</Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px', maxWidth: '600px' }}>
            <h2>Trainer Details</h2>
            <div style={{ 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                padding: '20px',
                backgroundColor: '#f9f9f9'
            }}>
                <h3>{trainer.Name}</h3>
                <p><strong>Trainer ID:</strong> {trainer.TrainerId}</p>
                <p><strong>Email:</strong> {trainer.Email}</p>
                <p><strong>Phone:</strong> {trainer.Phone}</p>
                <p><strong>Technology:</strong> {trainer.Technology}</p>
                <div>
                    <strong>Skills:</strong>
                    <ul>
                        {trainer.Skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div style={{ marginTop: '20px' }}>
                <Link to="/trainers" style={{ textDecoration: 'none', color: '#007bff' }}>
                    ← Back to Trainers List
                </Link>
            </div>
        </div>
    );
};

export default TrainerDetail;