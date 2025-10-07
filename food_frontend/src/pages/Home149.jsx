import React, { useState } from 'react';
import '../styles/common.css';
import '../styles/home-1-49.css';

// PUBLIC_INTERFACE
const Home149 = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [likedItems, setLikedItems] = useState(new Set());

  const categories = ['All', 'Combos', 'Sliders', 'Classic'];
  
  const foodItems = [
    {
      id: 1,
      name: "Cheeseburger Wendy's Burger",
      image: "/assets/figma_image_1_83.png",
      rating: "4.9"
    },
    {
      id: 2,
      name: "Hamburger\nVeggie Burger",
      image: "/assets/figma_image_1_92.png",
      rating: "4.8"
    },
    {
      id: 3,
      name: "Hamburger\nChicken Burger",
      image: "/assets/figma_image_1_101.png",
      rating: "4.6"
    },
    {
      id: 4,
      name: "Hamburger\nFried Chicken Burger",
      image: "/assets/figma_image_1_110.png",
      rating: "4.5"
    }
  ];

  const toggleLike = (id) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="screen">
      <h1 className="foodgo-title typo-5">Foodgo</h1>
      <p className="subtitle typo-6">Order your favourite food!</p>

      <div className="profile-container">
        <img src="/assets/figma_image_1_54.png" alt="Profile" />
      </div>

      <div className="search-container">
        <div className="search-group">
          <img src="/assets/figma_image_1_61.svg" alt="Search" className="search-icon" />
          <span className="typo-7">Search</span>
        </div>
      </div>

      <button className="filter-button">
        <img src="/assets/figma_image_1_59.svg" alt="Filter" />
      </button>

      <div className="category-scrollbar">
        <div className="category-list">
          {categories.map(category => (
            <div 
              key={category}
              className={`category-item ${category === activeCategory ? 'active' : 'inactive'}`}
              onClick={() => setActiveCategory(category)}
            >
              <span className={`${category === activeCategory ? 'typo-8' : 'typo-9'}`}>
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="food-grid">
        {foodItems.map(item => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.name} className="food-image" />
            <div className="food-shadow"></div>
            <h2 className="food-title typo-10">{item.name}</h2>
            <div className="rating-container">
              <img src="/assets/figma_image_1_85.svg" alt="Star" className="star-icon" />
              <span className="typo-11">{item.rating}</span>
            </div>
            <button className="heart-button" onClick={() => toggleLike(item.id)}>
              <img 
                src={likedItems.has(item.id) 
                  ? "/assets/figma_image_1_122.svg" 
                  : "/assets/figma_image_1_80.svg"} 
                alt="Heart" 
              />
            </button>
          </div>
        ))}
      </div>

      <div className="bottom-nav">
        <div className="nav-icons">
          <img src="/assets/figma_image_1_123.svg" alt="Home" className="nav-icon" />
          <img src="/assets/figma_image_1_124.svg" alt="User" className="nav-icon" />
          <img src="/assets/figma_image_1_125.svg" alt="Comment" className="nav-icon" />
          <img src="/assets/figma_image_1_80.svg" alt="Heart" className="nav-icon" />
        </div>
        <button className="add-button" aria-label="Add Item"></button>
      </div>
    </div>
  );
};

export default Home149;
