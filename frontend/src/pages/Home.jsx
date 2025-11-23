import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import defaultVideo from "../assets/video/default.mp4";
import a from "../assets/images/a.png"; 
import b from "../assets/images/b.png"; 
import c from "../assets/images/c.png"; 
import d from "../assets/images/d.png"; 

function Home() {
  const purpleButtonColor = {
    backgroundColor: "#575CFE",
    borderColor: "#575CFE",
    "--bs-btn-bg": "#575CFE",
    "--bs-btn-border-color": "#575CFE",
    "--bs-btn-hover-bg": "#4a4ded",
    "--bs-btn-hover-border-color": "#4a4ded",
  };
  const darkButtonColor = {
    backgroundColor: "rgb(46, 46, 46)",
    borderColor: "rgb(46, 46, 46)",
    "--bs-btn-bg": "rgb(46, 46, 41)",
    "--bs-btn-border-color": "rgb(46, 46, 46)",
    "--bs-btn-hover-bg": "rgb(60, 60, 60)",
    "--bs-btn-hover-border-color": "rgb(60, 60, 60)",
  };

  // Inline style for the avatar stack in the Talk to us button (matching the image)
  const avatarStackStyle = {
      width: '100px', // Adjust width to contain avatars
      height: '35px',
      marginLeft: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      // Using filter to slightly lighten the avatars for visibility if needed, or stick to default for dark button
  };
    
  const avatarStyle = (index) => ({
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    border: '2px solid rgb(46, 46, 46)', // Border color matching the button background
    position: 'absolute',
    left: `${index * 20}px`, // Overlap effect
    zIndex: 5 - index, // Ensure stacking order
  });


  return (
    <div>
      {/* --- HERO SECTION --- */}
      <div
        style={{
          backgroundColor: "rgb(33, 37, 41)",
          minHeight: "100vh",
          width: "100%",
          color: "white",
          padding: "60px 0",
          position: "relative",
          overflow: "hidden",
        }}
        className="d-flex align-items-center justify-content-center text-center"
      >
        <div className="container px-4 px-md-5" style={{ maxWidth: "900px" }}>
          <h1
            className="display-4 fw-bold mb-4"
            style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
          >
            Get testimonials from your
            <br /> customers with ease
          </h1>

          <p
            className="lead mb-5 mx-auto "
            style={{ maxWidth: "900px", fontSize: "clamp(1rem, 2vw, 1rem)" }}
          >
            Collecting testimonials is hard, we get it! So
            we built Testimonial. In minutes, you can collect text
            and video testimonials from your customers with no need for a
            developer or website hosting.
          </p>

          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mb-4">
            <Link
              to="/signup"
              className="btn btn-lg text-white"
              style={purpleButtonColor}
            >
              Try FREE now
            </Link>

            <button
              className="btn btn-lg text-white d-flex align-items-center justify-content-center"
              style={darkButtonColor}
            >
              Talk to us
            </button>
          </div>

          <p className="text-secondary small mt-3">
            Get started with free credits on us.
            <Link
              to="/pricing"
              className="text-decoration-none"
              style={{ color: "#575CFE" }}
            >
              See our pricing →
            </Link>
          </p>
        </div>
      </div>
      
      {/* --- VIDEO SECTION --- */}
      <div
        style={{
          backgroundColor: "rgb(33, 37, 41)",
          padding: "40px 0",
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
        }}
      >
        <video
          src={defaultVideo}
          autoPlay
          loop
          muted
          style={{
            width: "80%",
            height: "auto",
            display: "block",
            maxWidth: "1200px",
            borderRadius: "15px",
            border: "3px solid #575CFE",
          }}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* --- TESTIMONIAL DISPLAY SECTION --- */}
      <div
        style={{
          backgroundColor: "rgb(33, 37, 41)",
          color: "white",
          padding: "80px 15px", // Increased padding for separation
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 
            className="fw-bold mb-4"
            // Use clamp for font size to ensure responsiveness
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }} 
          >
            Add testimonials to your website 
            <br/> 
            with no coding!
          </h2>

          <p 
            className="lead text-center mx-auto"
            style={{ 
              maxWidth: "650px", 
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              color: "rgb(150, 150, 150)", // Dim the supporting text slightly
            }}
          >
            Copy and paste our HTML code to add the Wall of Love (
            <span role="img" aria-label="love-emoji">💛</span> 
            <a 
              href="#" // Replace with actual link
              style={{ color: "#575CFE", textDecoration: "underline" }}
            >
              full version
            </a>) to your website. We support any no-code platform (Webflow, WordPress, you name it!)
          </p>
          
          {/* --- RESPONSIVE IMAGES START HERE --- */}
          <div className="mt-5">
            {/* Image A: Displayed on Laptop (lg and up) */}
            <img 
              src={a} 
              alt="Laptop Screen Display" 
              className="img-fluid rounded shadow d-none d-lg-block mx-auto" 
              style={{ maxWidth: "100%", height: "auto" }}
            />

            {/* Image B: Displayed on Tablet (md only) */}
            <img 
              src={b} 
              alt="Tablet Screen Display" 
              className="img-fluid rounded shadow d-none d-md-block d-lg-none mx-auto" 
              style={{ maxWidth: "100%", height: "auto" }}
            />

            {/* Images C and D: Displayed on Mobile (sm and down) */}
            <div className="d-block d-md-none d-flex flex-column align-items-center gap-3">
              <img 
                src={c} 
                alt="Mobile Screen Display 1" 
                className="img-fluid rounded shadow"
                style={{ width: "80%", height: "auto" }}
              />
              <img 
                src={d} 
                alt="Mobile Screen Display 2" 
                className="img-fluid rounded shadow" 
                style={{ width: "80%", height: "auto" }}
              />
            </div>
          </div>
          {/* --- RESPONSIVE IMAGES END HERE --- */}
        </div>
      </div>

      {/* --- NEW FINAL SECTION: CTA --- */}
      <div 
        style={{
          backgroundColor: "rgb(33, 37, 41)",
          color: "white",
          padding: "80px 15px 120px", // Extra padding at the bottom
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 className="fw-bold mb-4" style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)" }}>
            Ready to collect testimonials?
          </h2>

          <p 
            className="lead mx-auto mb-5"
            style={{ 
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              color: "rgb(150, 150, 150)",
              lineHeight: "1.6"
            }}
          >
            We are loved by Fortune 500 companies, early-stage startups, marketing agencies, real estate agents, freelancers, and many more. Your customers' testimonials are the best social proof you can get! Get started now 👇
          </p>

          <div className="d-flex justify-content-center align-items-center gap-4 mb-4 flex-column flex-sm-row">
            {/* Get started with FREE credits button */}
            <Link
              to="/signup"
              className="btn btn-lg text-white px-5 py-3"
              style={{ ...purpleButtonColor, minWidth: '250px' }}
            >
              Get started with FREE credits
            </Link>

            {/* Talk to us button with avatars */}
            <button
              className="btn btn-lg text-white px-3 py-3 d-flex align-items-center justify-content-center"
              style={{ ...darkButtonColor, minWidth: '250px', position: 'relative' }}
            >
              Talk to us
              <div style={{ ...avatarStackStyle, position: 'relative', height: '35px', marginLeft: '15px' }}>
                {/* Placeholder Avatars (using temporary background images/colors) */}
                <div 
                  style={{ 
                    ...avatarStyle(0), 
                    backgroundColor: 'white', 
                    backgroundImage: 'url("https://i.pravatar.cc/150?img=1")', // Placeholder image 1
                    backgroundSize: 'cover'
                  }} 
                  title="User 1"
                ></div>
                <div 
                  style={{ 
                    ...avatarStyle(1), 
                    backgroundColor: 'white', 
                    backgroundImage: 'url("https://i.pravatar.cc/150?img=3")', // Placeholder image 2
                    backgroundSize: 'cover'
                  }} 
                  title="User 2"
                ></div>
                <div 
                  style={{ 
                    ...avatarStyle(2), 
                    backgroundColor: 'white', 
                    backgroundImage: 'url("https://i.pravatar.cc/150?img=5")', // Placeholder image 3
                    backgroundSize: 'cover'
                  }} 
                  title="User 3"
                ></div>
              </div>
            </button>
          </div>

          {/* Pricing link */}
          <p className="text-secondary small mt-3">
            <Link
              to="/pricing"
              className="text-decoration-none"
              style={{ color: "#575CFE" }}
            >
              See our pricing →
            </Link>
          </p>
        </div>
      </div>
      {/* --- END OF NEW FINAL SECTION --- */}
    </div>
  );
}

export default Home;