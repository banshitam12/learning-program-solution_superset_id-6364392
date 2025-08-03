import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [currentView, setCurrentView] = useState('book');
  const [showComponent, setShowComponent] = useState(true);

  // Method 1: Using if-else statements
  const renderWithIfElse = () => {
    if (currentView === 'book') {
      return <BookDetails />;
    } else if (currentView === 'blog') {
      return <BlogDetails />;
    } else if (currentView === 'course') {
      return <CourseDetails />;
    } else {
      return <div>No component selected</div>;
    }
  };

  // Method 2: Using ternary operator
  const renderWithTernary = () => {
    return currentView === 'book' ? <BookDetails /> :
           currentView === 'blog' ? <BlogDetails /> :
           currentView === 'course' ? <CourseDetails /> :
           <div>No component selected</div>;
  };

  // Method 3: Using logical AND operator
  const renderWithLogicalAnd = () => {
    return (
      <div>
        {currentView === 'book' && <BookDetails />}
        {currentView === 'blog' && <BlogDetails />}
        {currentView === 'course' && <CourseDetails />}
      </div>
    );
  };

  // Method 4: Using switch case
  const renderWithSwitch = () => {
    switch (currentView) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return <div>No component selected</div>;
    }
  };

  // Method 5: Using object mapping
  const componentMap = {
    book: <BookDetails />,
    blog: <BlogDetails />,
    course: <CourseDetails />
  };

  const renderWithObjectMap = () => {
    return componentMap[currentView] || <div>No component selected</div>;
  };

  // Current rendering method (you can change this to test different methods)
  const [renderMethod, setRenderMethod] = useState('ifElse');

  const getRenderMethod = () => {
    switch (renderMethod) {
      case 'ifElse':
        return renderWithIfElse();
      case 'ternary':
        return renderWithTernary();
      case 'logicalAnd':
        return renderWithLogicalAnd();
      case 'switch':
        return renderWithSwitch();
      case 'objectMap':
        return renderWithObjectMap();
      default:
        return renderWithIfElse();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blogger App - Conditional Rendering Demo</h1>
        
        {/* Navigation buttons */}
        <div className="navigation">
          <button 
            onClick={() => setCurrentView('book')}
            className={currentView === 'book' ? 'active' : ''}
          >
            Book Details
          </button>
          <button 
            onClick={() => setCurrentView('blog')}
            className={currentView === 'blog' ? 'active' : ''}
          >
            Blog Details
          </button>
          <button 
            onClick={() => setCurrentView('course')}
            className={currentView === 'course' ? 'active' : ''}
          >
            Course Details
          </button>
        </div>

        {/* Render method selector */}
        <div className="render-method-selector">
          <label>Choose Rendering Method: </label>
          <select 
            value={renderMethod} 
            onChange={(e) => setRenderMethod(e.target.value)}
          >
            <option value="ifElse">If-Else</option>
            <option value="ternary">Ternary Operator</option>
            <option value="logicalAnd">Logical AND</option>
            <option value="switch">Switch Case</option>
            <option value="objectMap">Object Mapping</option>
          </select>
        </div>

        {/* Toggle component visibility */}
        <div className="toggle-section">
          <button onClick={() => setShowComponent(!showComponent)}>
            {showComponent ? 'Hide Component' : 'Show Component'}
          </button>
        </div>

        {/* Conditional rendering display */}
        <div className="content">
          <h2>Current Method: {renderMethod}</h2>
          {showComponent && getRenderMethod()}
        </div>
      </header>
    </div>
  );
}

export default App;