import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PrizePool from './components/PrizePool';
import Tracks from './components/Tracks';
import Schedule from './components/Schedule';
import Sponsers from './components/Sponsers';
import Venue from './components/Venue';

// LandingPg Component
const LandingPg = () => {
  return (
    <section
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px 50px',
        backgroundImage: 'url("Gradient.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        maxWidth: '2600px',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      {/* Overlay to make text more readable */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(235, 235, 235, 0.24)', // Semi-transparent black overlay
        }}
      ></div>
      <div
        style={{
          position: 'relative',
          textAlign: 'center',
          color: 'black',
          marginBottom: '20px',
        }}
      >
        <h1 style={{ position:'relative', left: '390px'}}><img src="Aegis_no_bg.png" alt="Aegis" style={{ width: "350px", height: "150px" }}  /></h1>
        <div
          style={{
            display: 'inline-block',
            padding: '20px 280px',
            borderRight: '7px solid black',
            borderLeft: '7px solid black',
            backgroundColor: '#ffd700',
            marginBottom: '20px',
            marginTop: '40px', 
            transform: 'rotate(-3deg)',
          }}
        >
          <h2 style={{ fontSize: '10rem', fontWeight: 'bold', margin: 0, textTransform: 'uppercase'}}>SANDBOX</h2>
        </div>
        <p style={{ fontSize: '4rem', marginBottom: '20px',marginTop: '40px', maxWidth: '800px', fontWeight: 'bold', position: 'relative',left: '240px'}}>
          SECURE THE FUTURE
        </p>
        <div
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: 'white',
            border: '4px solid black',
            boxShadow: '0 20px 20px rgba(0, 0, 0, 0.8)',
            marginTop: '15px',
            marginBottom: '30px',
            transform: 'rotate(-4deg)',
          }}
        >
          <p style={{ fontSize: '2rem', margin: 0, fontStyle: 'italic' }}>
            <b>★ MARCH 1-2, 2025 ★ DSCE, BANGALORE ★</b>
          </p>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
        <a
          href="https://example.com/apply"
          style={{
            position: "relative",
            display: "inline-block",
            padding: "15px 70px",
            fontSize: "1.4rem",
            fontWeight: "bold",
            color: "rgb(255, 255, 255)",
            textDecoration: "none",
            backgroundColor: "rgba(50, 50, 50, 0.5)", // Dark button color
            overflow: "hidden",
            marginTop:'40px'
          }}
        >
          Applications Closed
          <button
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "hsla(0, 2.00%, 60.40%, 0.4)" ,
              transition: "opacity 0.3s ease-in-out",
              opacity: 1, // Visible by default
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "0")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          ></button>
        </a>

          <a
            href="https://discord.gg/example" // Replace with actual Discord link
            style={{
              padding: '15px 60px',
              fontSize: '1.6rem',
              border: '4px solid #000',
              backgroundColor: '#ff7a50',
              color: 'black',
              fontWeight: 'bold',
              cursor: 'pointer',
              textDecoration: 'none',
              boxShadow: '0 20px 20px rgba(0, 0, 0, 0.8)',
              marginTop:'20px',
              position:'relative',
              left:'100px'
            }}
          >
            Join Discord
          </a>
        </div>
      </div>
    </section>
  );
};

// FAQ Component
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What is SandBox?',
      answer: 'SandBox is a 24-hour cybersecurity-themed hackathon organized by Aegis Club of Computer Science(Cyber Security) Dept. at DSCE, Bangalore.',
    },
    {
      question: 'Who can participate?',
      answer: 'SandBox is open to all college students passionate about cybersecurity and innovation.',
    },
    {
      question: 'Is there a registration fee?',
      answer: 'No, registration for Aegis Club events is completely free.',
    },
    {
      question: 'Who can attend?',
      answer: 'Anyone with a passion for technology and innovation is welcome to join.',
    },
    {
      question: 'How can I register?',
      answer: 'Registration is done through Devfolio. Click the "Apply with Devfolio" button on our website to start your application.',
    },
    {
      question: 'What should I bring?',
      answer: 'Bring your laptop, charger, and any other devices you might need. Don’t forget your student ID.',
    },
    {
      question: 'Is there a code of conduct?',
      answer: 'Yes, all participants are expected to follow our code of conduct, which promotes a respectful and inclusive environment.',
    },
    {
      question: 'Is the hackathon offline?',
      answer: 'Yes, SandBox is an offline hackathon held at DSCE, Bangalore.',
    },
    {
      question: 'What is the maximum team size?',
      answer: 'Each team can have a maximum of 4 members. Collaborate and bring your best ideas!',
    },
    {
      question: 'Can I participate without a team?',
      answer: 'Yes, individual participation is allowed. However, forming a team is encouraged as it helps divide tasks and collaborate efficiently, allowing you to build a better project faster.',
    },
    {
      question: 'Will accommodation and food be provided?',
      answer: 'Yes, all participants will be provided with comfortable accommodation and delicious meals throughout the event to ensure a great experience.',
    },
    {
      question: 'Will Wi-Fi or connectivity be provided?',
      answer: 'Absolutely! We will provide high-speed Wi-Fi and reliable internet connectivity to ensure participants can work seamlessly during the hackathon.',
    },
    {
      question: 'What is the selection criteria?',
      answer: 'Teams will be selected based on the creativity, innovation, and feasibility of their project ideas submitted during registration.',
    },
    {
      question: 'Will accommodation be provided before the hackathon day?',
      answer: 'Accommodation will not be provided before or after the hackathon days. Participants are advised to make their own arrangements if they plan to arrive earlier.',
    },
    {
      question: 'What does OPEN INNOVATION mean in this hackathon?',
      answer: '🚨 Important: In SANDBOX 2025, Open Innovation strictly refers to cybersecurity-related projects that do not directly fit into the listed themes but still solve security challenges. Non-cybersecurity projects will not be considered.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      style={{
        padding: '130px 70px',
        backgroundColor: '#f1ca17',
        textAlign: 'left', // Align text to the left
      }}
    >
      {/* FAQ Title Box */}
      <div
        style={{
          backgroundColor: 'white',
          border: '5px solid black',
          padding: '20px',
          display: 'inline-block',
          marginBottom: '40px',
        }}
      >
        <h2 style={{ fontSize: '3rem', color: 'black', margin: 0, fontWeight: 'bold' }}>
          FAQ
        </h2>
      </div>

      {/* FAQ Items */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {faqData.map((item, index) => (
          <div
            key={index}
            style={{
              border: '5px solid #000',
              padding: '20px',
              backgroundColor: '#fff',
              marginBottom: '30px',
              boxShadow: '0 20px 20px rgba(0, 0, 0, 0.8)',
              transition: 'box-shadow 0.3s ease',
              cursor: 'pointer',
              width: '100%', // Make the boxes wider
            }}
            onClick={() => toggleFAQ(index)}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}
            >
              <h3 style={{ color: '#000', margin: '0', textAlign: 'left' }}>{item.question}</h3>
              <span
                style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  transform: activeIndex === index ? 'rotate(0deg)' : 'rotate(180deg)',
                  transition: 'transform 0.3s ease',
                }}
              >
                ^
              </span>
            </div>
            {activeIndex === index && (
              <div style={{ paddingTop: '20px' }}>
                <p style={{ fontSize: '1.2rem', color: '#333', margin: '0', textAlign: 'left', fontWeight: 'normal' }}>
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#1a1a1a', // Footer background color
        color: '#ffffff', // White text
        padding: '50px 20px',
        textAlign: 'center',
      }}
    >
      {/* Get in Touch Section */}
      <div
        style={{
          backgroundColor: 'white', 
          padding: '50px 20px',
          marginBottom: '100px',
          marginTop: '-80px',
          width: '100%',
          maxWidth: '2000px', // Enforced maxWidth
          margin: '0 auto', // Centering the container
          color: 'black',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'block', // Ensures it respects maxWidth
        }}
      >
        {/* Wrapped "GET IN TOUCH" in a Box */}
        <h2 style={{ fontSize: '2rem', marginBottom: '20px', textAlign: 'left' }}>
          <span
            style={{
              backgroundColor: '#9c6fe4', // Yellow background
              color: 'black', // Black text
              padding: '3px 6px', // Spacing around text
              border: '5px solid black',
              display: 'inline-block',
              transform:'rotate(4deg)',
              marginBottom:'20px'
            }}
          >
            <b>GET IN TOUCH</b>
          </span>
        </h2>

        {/* Contact Info Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          {/* Individual Contact Box */}
          {[
            { name: "Shreyas Reddy B", phone: "+91 7019759886", bgColor:'#ff7a50' },
            { name: "Sahil Raj", phone: "+91 8891675882", bgColor:'#ffd23f' },
            { name: "R Aswin", phone: "+91 9986184777", bgColor:'#4caf50' }
          ].map((person, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                minWidth: '80px',
                padding: '5px',
                border: '5px solid black', // Black border
                textAlign: 'center',
                transform: 'rotate(-4deg)',
                backgroundColor: person.bgColor 
              }}
            >
              <p style={{ margin: '5px 0', fontSize: '1.2rem', fontWeight: 'bold' }}>{person.name}</p>
              <p style={{ margin: '5px 0', fontSize: '1.2rem' }}>{person.phone}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Footer Content */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          marginBottom: '40px',
        }}
      >
        {/* AEGIS SandBox Information */}
        <div style={{ marginBottom: '20px' }}>
          {/* AEGIS Icon and SandBox Heading */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img 
              src="aegis_icon.jpg" 
              alt="AEGIS Icon" 
              style={{ width: '130px', height: '60px', marginRight: '10px' }} 
            />
            <h3 style={{ fontSize: '1.6rem', margin: 0 }}>
              <b>SandBox</b>
            </h3>
          </div>

          {/* DSCE Icon and Department Info */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img 
              src="dsce.jpg" 
              alt="DSCE Icon" 
              style={{ width: '60px', height: '60px', marginRight: '10px' }} 
            />
            <p style={{ margin: 0 }}>
              Dept. of Computer Science<br />
              & Engineering (Cyber<br />
              Security), DSCE
            </p>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
            <a href="https://discord.gg/example" style={{ color: '#ffffff', textDecoration: 'none' }}>Discord</a>
            <a href="https://instagram.com/example" style={{ color: '#ffffff', textDecoration: 'none' }}>Instagram</a>
            <a href="https://linkedin.com/example" style={{ color: '#ffffff', textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </div>

        {/* Contact Us */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '10px', textAlign: 'left' }}><b>Contact Us</b></h3>
          <p style={{ margin: '5px 0', textAlign: 'left', fontSize: '1.3rem' }}>aegis-<br />cscyber@dayanandasagar.edu</p>
          <p style={{ margin: '5px 0', textAlign: 'left', fontSize: '1.3rem' }}>+91 7019197688</p>
        </div>

        {/* Venue */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '10px', textAlign: 'left' }}><b>Venue</b></h3>
          <p style={{ margin: '5px 0', textAlign: 'left', fontSize: '1.3rem' }}>Dagananda Sagar College<br /> of Engineering</p>
          <p style={{ margin: '5px 0', textAlign: 'left', fontSize: '1.3rem' }}>Kumaraswamy Layout</p>
          <p style={{ margin: '5px 0', textAlign: 'left', fontSize: '1.3rem' }}>Bangalore - 560078</p>
        </div>

        {/* Quick Links */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '10px', textAlign: 'left' }}><b>Quick Links</b></h3>
          <a href="/about" style={{ color: '#ffffff', display: 'block', margin: '10px 0', fontSize: '1.3rem', textDecoration: 'none' }}>About</a>
          <a href="/tracks" style={{ color: '#ffffff', display: 'block', margin: '10px 0', fontSize: '1.3rem', textDecoration: 'none' }}>Tracks</a>
          <a href="/schedule" style={{ color: '#ffffff', display: 'block', margin: '10px 0', fontSize: '1.3rem', textDecoration: 'none' }}>Schedule</a>
          <a href="/faq" style={{ color: '#ffffff', display: 'block', margin: '10px 0', fontSize: '1.3rem', textDecoration: 'none' }}>FAQ</a>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ marginTop: '20px', fontSize: '1.2rem', boxShadow: '0px -0.3px 0px white', paddingTop: '10px' }}>
        <p>© 2025 SandBox Hackathon. All rights reserved.</p>
      </div>
    </footer>
  );
};

// App Component
const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPg />
      <PrizePool />
      <Tracks />
      <Schedule />
      <FAQ />
      <Sponsers />
      <Venue />
      <Footer />
    </div>
  );
};

export default App;