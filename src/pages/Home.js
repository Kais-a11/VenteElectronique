import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";
import { smarList } from "../Data/SmartListe";
import "../Styles/Home.css"
import Footer from "../Footer/Footer";
import img1 from '../assets/welcome.jpg'
import img2 from '../assets/welcome2.jpg'
import img3 from '../assets/welcome3.jpg'
import img4 from '../assets/welcome4.jpg'
import smart1 from '../assets/smartphone.jpg'
import smart2 from '../assets/smartphone2.jpg'

// Composant React
function ImageCard({ src, alt }) {
 return (
     <div className="image-card">
       <img src={src} alt={alt} />
     </div>
 );
}

function SmartphoneCard({ title, cover, description, prix }) {
 return (
    <div className="smartphone-card">
      <img src={cover} alt={title} />
      <div className="smartphone-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Prix: ${prix}</p>
      </div>
    </div>
 );
}

export default function Home() {
 const images = [img1, img2, img3, img4];
 const [currentImageIndex, setCurrentImageIndex] = useState(0);
 
 useEffect(() => {
     const interval = setInterval(() => {
       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
     }, 5000);
 
     return () => clearInterval(interval);
 }, [images.length]);
 
 return (
     <>
       <Header />
       <div className="container">
         <h1>Welcome to our Site</h1>
         <ImageCard src={images[currentImageIndex]} alt={`photo ${currentImageIndex + 1}`} />
       </div>
       <form className='search'>
         <label>Search smartphone</label>
         <input type="text" placeholder="Search smartphone" />
       </form>
       <div className="smartphone-list">
         {smarList.map((smartphone, index) => (
           <SmartphoneCard
             key={index}
             title={smartphone.title}
             cover={smartphone.cover}
             description={smartphone.description}
             prix={smartphone.prix}
           />
         ))}
       </div>

       <div className='Achat'>
        <div className='achat-smart1'>
          <h1>Reconditionées de premier choix</h1>
          <img src={smart1} alt='smart1'/>
          <button>Découvrir</button>
        </div>
        <div className='achat-smart2'>
          <h1>Vous ne pourrez plus vous en passer</h1>
          <img src={smart2} alt='smart2'/>
          <button>Découvrir</button>
        </div>

       </div>
       <Footer />
     </>
 );
}
