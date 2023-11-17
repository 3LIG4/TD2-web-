import React, { useState } from 'react';
import Star from './component/star';

const App = () => {
    const [stars, setStars] = useState([false, false, false, false, false]);

    const handleStarClick = (index) => {
      const newStars = stars.map((star, i) => (i === index ? !star : i < index ? true : false));
      setStars(newStars);
  };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1 style={{ fontSize: '24px' }}>Donne ton avis</h1>
            {stars.map((on, index) => (
                <Star key={index} on={on} onClick={() => handleStarClick(index)} />
            ))}
        </div>
    );
};

export default App;