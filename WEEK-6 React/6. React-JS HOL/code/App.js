import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TrainersList from './TrainersList';
import TrainerDetail from './TrainerDetail';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <nav style={{ 
                        backgroundColor: '#282c34', 
                        padding: '1rem',
                        marginBottom: '20px'
                    }}>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <Link 
                                to="/" 
                                style={{ 
                                    color: 'white', 
                                    textDecoration: 'none',
                                    fontSize: '18px',
                                    fontWeight: 'bold'
                                }}
                            >
                                Home
                            </Link>
                            <Link 
                                to="/trainers" 
                                style={{ 
                                    color: 'white', 
                                    textDecoration: 'none',
                                    fontSize: '18px',
                                    fontWeight: 'bold'
                                }}
                            >
                                Trainers
                            </Link>
                        </div>
                    </nav>
                </header>
                
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/trainers" element={<TrainersList />} />
                        <Route path="/trainer/:id" element={<TrainerDetail />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
