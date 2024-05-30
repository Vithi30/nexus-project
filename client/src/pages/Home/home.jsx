import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Our Restaurant</h1>
        <p>Experience the best culinary delights with us.</p>
        <button>Explore Menu</button>
      </div>
      <div className="content">
        <section className="about">
          <h2>About Us</h2>
          <p>Our restaurant offers a unique dining experience, combining delicious food with a warm and inviting atmosphere. Our chefs use only the freshest ingredients to create mouthwatering dishes that will leave you coming back for more.</p>
        </section>
        <section className="gallery">
          <h2>Gallery</h2>
          <div className="images">
            <img src="https://assets.vogue.in/photos/6560c1a98218d50f53c9c362/3:4/w_2560%2Cc_limit/Tresind_Pani%2520Puri%2520Poke%2520Bowl-min.jpg" alt="Dish 1" />
            <img src="https://assets.vogue.in/photos/66165ebb8f30a9f4ebe8b02c/3:4/w_2560%2Cc_limit/Aidu%2520Hyderabad.jpg" alt="Dish 2" />
            <img src="https://assets.vogue.in/photos/659eaf8ce1fb2eefbb35e852/3:4/w_2560%2Cc_limit/Bawri%2520Mumbai.jpg" alt="Dish 3" />
          </div>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>Address: 123 Food Street, Gourmet City</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@restaurant.com</p>
        </section>
      </div>
    </div>
  );
}
