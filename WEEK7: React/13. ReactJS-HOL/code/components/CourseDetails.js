import React, { useState } from 'react';

const CourseDetails = () => {
  const [courses] = useState([
    {
      id: 1,
      title: "Complete React Developer Course",
      instructor: "Sarah Wilson",
      level: "Beginner",
      duration: "40 hours",
      price: 89.99,
      rating: 4.8,
      enrolled: 1250,
      category: "Programming",
      prerequisites: ["Basic JavaScript", "HTML/CSS"],
      isPopular: true,
      onSale: true,
      salePrice: 49.99
    },
    {
      id: 2,
      title: "Advanced JavaScript Patterns",
      instructor: "David Chen",
      level: "Advanced",
      duration: "25 hours",
      price: 129.99,
      rating: 4.9,
      enrolled: 680,
      category: "Programming",
      prerequisites: ["JavaScript ES6+", "Object-Oriented Programming"],
      isPopular: false,
      onSale: false,
      salePrice: null
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Emily Rodriguez",
      level: "Intermediate",
      duration: "30 hours",
      price: 79.99,
      rating: 4.6,
      enrolled: 920,
      category: "Design",
      prerequisites: ["Basic Design Principles"],
      isPopular: true,
      onSale: true,
      salePrice: 39.99
    }
  ]);

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [filterLevel, setFilterLevel] = useState('all');
  const [showOnlyPopular, setShowOnlyPopular] = useState(false);
  const [showOnSale, setShowOnSale] = useState(false);

  // Function to get filtered courses
  const getFilteredCourses = () => {
    return courses.filter(course => {
      const levelMatch = filterLevel === 'all' || course.level === filterLevel;
      const popularMatch = !showOnlyPopular || course.isPopular;
      const saleMatch = !showOnSale || course.onSale;
      return levelMatch && popularMatch && saleMatch;
    });
  };

  // Function to render price with conditional logic
  const renderPrice = (course) => {
    if (course.onSale) {
      return (
        <div className="price-container">
          <span className="original-price">${course.price}</span>
          <span className="sale-price">${course.salePrice}</span>
          <span className="discount-badge">
            {Math.round((1 - course.salePrice / course.price) * 100)}% OFF
          </span>
        </div>
      );
    } else {
      return <span className="regular-price">${course.price}</span>;
    }
  };

  // Function to render course level badge with different colors
  const renderLevelBadge = (level) => {
    const levelColors = {
      'Beginner': 'green',
      'Intermediate': 'orange',
      'Advanced': 'red'
    };
    
    return (
      <span 
        className="level-badge" 
        style={{ backgroundColor: levelColors[level] }}
      >
        {level}
      </span>
    );
  };

  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="component-container course-details">
      <h2>🎓 Course Details</h2>
      
      {/* Filter controls */}
      <div className="filter-controls">
        <div>
          <label>Filter by Level: </label>
          <select 
            value={filterLevel} 
            onChange={(e) => setFilterLevel(e.target.value)}
          >
            {levels.map(level => (
              <option key={level} value={level}>
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label>
            <input 
              type="checkbox" 
              checked={showOnlyPopular}
              onChange={(e) => setShowOnlyPopular(e.target.checked)}
            />
            Popular Courses Only
          </label>
        </div>

        <div>
          <label>
            <input 
              type="checkbox" 
              checked={showOnSale}
              onChange={(e) => setShowOnSale(e.target.checked)}
            />
            On Sale Only
          </label>
        </div>
      </div>

      {/* Course list with conditional rendering */}
      <div className="course-list">
        {getFilteredCourses().length > 0 ? (
          getFilteredCourses().map(course => (
            <div 
              key={course.id} 
              className={`course-item ${course.isPopular ? 'popular' : ''}`}
              onClick={() => setSelectedCourse(course)}
            >
              <div className="course-header">
                <h4>{course.title}</h4>
                {/* Conditional rendering for badges */}
                <div className="badges">
                  {course.isPopular && <span className="popular-badge">🌟 Popular</span>}
                  {course.onSale && <span className="sale-badge">🏷️ Sale</span>}
                  {renderLevelBadge(course.level)}
                </div>
              </div>
              
              <p className="instructor">Instructor: {course.instructor}</p>
              <p className="duration">Duration: {course.duration}</p>
              <p className="rating">Rating: {course.rating}/5 ⭐ ({course.enrolled} students)</p>
              
              {/* Conditional price rendering */}
              <div className="price-section">
                {renderPrice(course)}
              </div>

              {/* Conditional rendering based on enrollment count */}
              {course.enrolled > 1000 && (
                <div className="bestseller-badge">🏆 Bestseller</div>
              )}
            </div>
          ))
        ) : (
          <div className="no-courses">
            <p>No courses found matching your criteria.</p>
            <button onClick={() => {
              setFilterLevel('all');
              setShowOnlyPopular(false);
              setShowOnSale(false);
            }}>
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Conditional rendering for selected course details */}
      {selectedCourse ? (
        <div className="selected-course">
          <h3>Course Details:</h3>
          <div className="course-detail-card">
            <h4>{selectedCourse.title}</h4>
            <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
            <p><strong>Level:</strong> {selectedCourse.level}</p>
            <p><strong>Duration:</strong> {selectedCourse.duration}</p>
            <p><strong>Category:</strong> {selectedCourse.category}</p>
            <p><strong>Rating:</strong> {selectedCourse.rating}/5 ⭐</p>
            <p><strong>Enrolled Students:</strong> {selectedCourse.enrolled}</p>
            
            {/* Conditional rendering for prerequisites */}
            {selectedCourse.prerequisites && selectedCourse.prerequisites.length > 0 && (
              <div className="prerequisites">
                <strong>Prerequisites:</strong>
                <ul>
                  {selectedCourse.prerequisites.map((prereq, index) => (
                    <li key={index}>{prereq}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Price information */}
            <div className="price-info">
              <strong>Price: </strong>
              {renderPrice(selectedCourse)}
            </div>

            {/* Conditional recommendations */}
            {selectedCourse.rating >= 4.8 && (
              <div className="recommendation">
                <h5>⭐ Highly Recommended!</h5>
                <p>This course has excellent ratings from students!</p>
              </div>
            )}

            {selectedCourse.onSale && (
              <div className="sale-info">
                <h5>🎉 Limited Time Offer!</h5>
                <p>This course is currently on sale. Don't miss out!</p>
              </div>
            )}
          </div>
          
          <button onClick={() => setSelectedCourse(null)}>Close Details</button>
        </div>
      ) : (
        <div className="no-selection">
          <p>Click on a course to see its details</p>
        </div>
      )}

      {/* Conditional rendering for course statistics */}
      {getFilteredCourses().length > 0 && (
        <div className="course-statistics">
          <h4>Course Statistics:</h4>
          <p>Total Courses: {getFilteredCourses().length}</p>
          <p>Popular Courses: {getFilteredCourses().filter(c => c.isPopular).length}</p>
          <p>Courses on Sale: {getFilteredCourses().filter(c => c.onSale).length}</p>
          <p>Average Rating: {
            (getFilteredCourses().reduce((sum, c) => sum + c.rating, 0) / getFilteredCourses().length).toFixed(1)
          }/5</p>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;