import React from 'react';
import cyanPunchImage from '../Images/Cyber_drink-removebg-preview.png'; // Replace with the actual path to the image
import samuraiColaImage from '../Images/xbox.png'; // Replace with the actual path to the image
import silverIceImage from '../Images/ncola.png'; // Replace with the actual path to the image
import neonBlastImage from '../Images/pink-removebg-preview.png'; // Replace with the actual path to the image
import '../css_files/Beverages.css'; // Importing the CSS file

const Beverages = () => {
  const beverages = [
    {
      name: "Cyan Punch",
      description: "A refreshing burst of flavor to power your gaming!",
      imageUrl: cyanPunchImage
    },
    {
      name: "Samurai Cola",
      description: "A limited-edition cola with a kick of energy!",
      imageUrl: samuraiColaImage
    },
    {
      name: "Silver Ice",
      description: "Cool and crisp, perfect for long gaming sessions!",
      imageUrl: silverIceImage
    },
    {
      name: "Neon Blast",
      description: "Bright and bold flavors to keep you going!",
      imageUrl: neonBlastImage
    }
  ];

  return (
    <div className="home-container">
      {beverages.map((beverage, index) => (
        <div key={index} className="beverage-card">
          <img src={beverage.imageUrl} alt={beverage.name} className="beverage-image" />
          <h3 className="beverage-name">{beverage.name}</h3>
          <p className="beverage-description">{beverage.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Beverages;
