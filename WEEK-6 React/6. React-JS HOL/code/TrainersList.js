import React from 'react';
import { Link } from 'react-router-dom';
import trainersData from './TrainersMock';

const TrainersList = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Trainers List</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {trainersData.map(trainer => (
                    <li key={trainer.TrainerId} style={{ margin: '10px 0' }}>
                        <Link 
                            to={`/trainer/${trainer.TrainerId}`}
                            style={{ 
                                textDecoration: 'none', 
                                color: '#007bff',
                                fontSize: '16px',
                                fontWeight: 'bold'
                            }}
                        >
                            {trainer.Name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrainersList;