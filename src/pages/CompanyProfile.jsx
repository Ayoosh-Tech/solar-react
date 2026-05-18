import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CompanyProfile.css";
import logo from "../assets/images/logo.jpg";
import solar from "../assets/images/solar.png";
import inverter from "../assets/images/inverter.jpg";
import install1 from "../assets/images/install1.jpg";
import install2 from "../assets/images/install2.jpg";
import install3 from "../assets/images/install3.jpg";
import install4 from "../assets/images/install4.jpg";


export default function CompanyProfile() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  const[selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="profile-container">
      
      {/* Header */}
      <div className="company-header">
        <img src={logo} className="logo" alt="Company Logo"/>
        <div>
          <h2>SolarTech Nigeria</h2>
          <p>⭐ 4.5 (120 reviews)</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button onClick={() => setActiveTab("overview")} className={activeTab==="overview" ? "active" : ""}>Overview</button>
        <button onClick={() => setActiveTab("products")} className={activeTab==="products" ? "active" : ""}>Products</button>
        <button onClick={() => setActiveTab("reviews")} className={activeTab==="reviews" ? "active" : ""}>Reviews</button>
        <button onClick={() => setActiveTab("contact")} className={activeTab==="contact" ? "active" : ""}>Contact</button>
      </div>

      {/* Content */}
      <div className="tab-content">

        {activeTab === "overview" && (
          <>
            <h3>About</h3>
            <p>We provide solar installation and maintenance services across Nigeria.</p>

            <h3>Services</h3>
            <ul>
              <li>Installation</li>
              <li>Maintenance</li>
              <li>Solar Panels</li>
            </ul>

           {/* <h3>Gallery</h3>
            <div className="gallery">
              <img src={solar} />
              <img src={inverter} />
              <img src={install1} />            
              </div>  
            */ }
            
            <div className="gallery">
  {[solar, inverter, install1, install2, install3, install4].map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`installation ${index + 1}`}
      onClick={() => setSelectedImage(img)}
    />
  ))}
</div> 
                
          </>
        )}
        
       {selectedImage && (
  <div className="lightbox" onClick={() => setSelectedImage(null)}>
    <span className="close" onClick={() => setSelectedImage(null)}>✖</span>
    <img src={selectedImage} className="lightbox-img" />
  </div>
  
)}

        {activeTab === "products" && (
          <>
            <h3>Our Products</h3>
            <div className="products-list">
              <div className="product-card">
                <h4>5KW Solar Panel System</h4>
                <p className="price">₦450,000</p>
                <p>Complete 5KW solar system with inverter and battery backup for homes.</p>
                <button className="product-btn">View Details</button>
              </div>
              <div className="product-card">
                <h4>10KW Solar Panel System</h4>
                <p className="price">₦850,000</p>
                <p>Professional 10KW system suitable for small businesses and offices.</p>
                <button className="product-btn">View Details</button>
              </div>
              <div className="product-card">
                <h4>Solar Maintenance Service</h4>
                <p className="price">₦25,000/year</p>
                <p>Annual maintenance package including cleaning, inspection, and repairs.</p>
                <button className="product-btn">View Details</button>
              </div>
            </div>
          </>
        )}

        {activeTab === "reviews" && (
          <>
            <h3>Customer Reviews</h3>
            <div className="reviews-list">
              <div className="review-card">
                <div className="review-header">
                  <strong>Aisha Muhammed</strong>
                  <span className="rating">⭐⭐⭐⭐⭐</span>
                </div>
                <p>"Excellent service! The solar installation was completed on time and the team was very professional. Highly recommended!"</p>
              </div>
              <div className="review-card">
                <div className="review-header">
                  <strong>ZaynulAbideen</strong>
                  <span className="rating">⭐⭐⭐⭐</span>
                </div>
                <p>"Great quality panels and good customer support. The system is working perfectly and saving me money on electricity bills."</p>
              </div>
              <div className="review-card">
                <div className="review-header">
                  <strong>Esther Okafor</strong>
                  <span className="rating">⭐⭐⭐⭐⭐</span>
                </div>
                <p>"Best solar company in Lagos! They installed my system 3 months ago and it has been flawless. Excellent maintenance too!"</p>
              </div>
            </div>
          </>
        )}

        {activeTab === "contact" && (
          <>
            <h3>Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <strong>📧 Email:</strong>
                <p>solartech@email.com</p>
              </div>
              <div className="contact-item">
                <strong>📱 Phone:</strong>
                <p>+234 (0)701 234 5678</p>
              </div>
              <div className="contact-item">
                <strong>📍 Address:</strong>
                <p>123 Lekki Road, Lagos, Nigeria</p>
              </div>
              <div className="contact-item">
                <strong>🕐 Business Hours:</strong>
                <p>Monday - Friday: 9AM - 6PM<br/>Saturday: 10AM - 4PM<br/>Sunday: Closed</p>
              </div>
            </div>
          </>
        )}

      </div>

      {/* CTA */}
      <button className="cta" onClick={() => navigate("/quote")}>
        Request Quote
      </button>

    </div>
  );
}