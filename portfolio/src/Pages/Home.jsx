import React, { useState, useEffect,useRef } from "react";
import { FaCamera, FaLaptopCode, FaPaintBrush, FaPalette, FaUtensils, FaVideo } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import heroVideo from "../video/v1.mp4";
import emailjs from "@emailjs/browser";
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};
const fadeRight = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};
export default function Home() {
  const words = ["Innovative", "Modern", "User-Friendly"];
  const [index, setIndex] = useState(0);
  const form = useRef();
  // Change words every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_856slcb",   // Your Service ID
        "template_cf0wgc5",  // Your Template ID
        form.current,
        "CO--9Uc56J2HjYY3t"  // Your Public Key
      )
.then(
  () => {
    toast.success("✅ Message sent successfully!");
    form.current.reset();
  },
  (error) => {
    toast.error("❌ Something went wrong. Try again!");
    console.error(error.text);
  }
);
  };

  // Framer Motion Variants
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const formVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
const hobbies = [
  {
    icon: <FaCamera />,
    title: "Photography",
    description: "Turning ordinary moments into visual stories and capturing the beauty in details.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Building Side Projects",
    description: "Creating fun projects and experimenting with new technologies.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Web Design",
    description: "Designing visually appealing and user-friendly web interfaces.",
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    description: "Crafting intuitive and interactive user experiences.",
  },
    {
    icon: <FaUtensils />,
    title: "Cooking",
    description: "Experimenting with flavors and techniques to create dishes that delight both visually and tastefully.",
  },
  {
    icon: <FaVideo />,
    title: "Video Editing",
    description: "Editing and producing videos that combine visuals, sound, and motion into compelling stories.",
  },
];


  return (
    <main>
      {/* HERO */}
    <section id="home" className="hero">
  <motion.div {...fadeUp} className="hero-text">
    <h1 className="hero-title">
      Hello! <br /> I'm <span className="accent">Aaliya Khan</span>
    </h1>
    <p>
      Turning Complex Problems into{" "}
      <br />
      <span className="changing-word">{words[index]}</span> <br /> Web Solutions
    </p>

    <div className="buttons">
      <a href="#contact" className="btn btn-primary">
        Hire Me
      </a>
      <a href="#projects" className="btn btn-outline">
        My Work
      </a>
    </div>
  </motion.div>

  <motion.div {...fadeRight} className="hero-avatar">
    <video 
      src={heroVideo} 
      autoPlay 
      loop 
      muted 
      playsInline 
      style={{ width: "350px", borderRadius: "10px" }}
    />
  </motion.div>
</section>


      {/* ABOUT */}
    <section id="about" className="about">
  <motion.h2 {...fadeUp} className="section-title">
    About Me
  </motion.h2>

  <div className="about-content">
    <motion.div {...fadeUp} className="about-text">
      <p>
        I’m a <span className="highlight">MERN Stack Developer</span> passionate about
        creating sleek, responsive, and scalable web applications.  
        With hands-on experience in{" "}
        <strong>React.js, Node.js, Express.js, and MongoDB</strong>, I transform
        ideas into modern user-friendly solutions.
      </p>
      <p>
        I thrive on turning <span className="highlight">complex problems</span> into
        clean, elegant code, always aiming to deliver impactful digital
        experiences.
      </p>
    </motion.div>

    <motion.div {...fadeUp} className="about-highlights">
      <div className="card">
        <h3>🚀 Innovation</h3>
        <p>Always exploring the latest web technologies to build future-ready solutions.</p>
      </div>
      <div className="card">
        <h3>🎯 Precision</h3>
        <p>Detail-oriented approach with focus on performance and clean UI/UX design.</p>
      </div>
      <div className="card">
        <h3>🤝 Collaboration</h3>
        <p>Team player with experience in agile workflows and effective communication.</p>
      </div>
    </motion.div>
  </div>
</section>


      {/* SKILLS */}
<section id="skills" className="skills">
  <motion.h2 {...fadeUp} className="section-title">Skills</motion.h2>

  <div className="skills-container">
    {[
      { skill: "HTML", width: 95 },
      { skill: "CSS", width: 90 },
      { skill: "JavaScript", width: 85 },
      { skill: "React.js", width: 88 },
      { skill: "Node.js", width: 80 },
      { skill: "Express.js", width: 78 },
      { skill: "MongoDB", width: 82 },
      { skill: "SQL", width: 75 },
      { skill: "Git & GitHub", width: 85 },
    ].map((item, idx) => (
      <div className="skill" key={idx}>
        <p>{item.skill}</p>
        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            whileInView={{ width: `${item.width}%` }}
transition={{ duration: 0.1, ease: "easeOut", delay: 0.1 }}
          ></motion.div>
        </div>
        <span className="percent">{item.width}%</span>
      </div>
    ))}
  </div>
</section>
      {/* PROJECTS */}
 <section id="projects" className="projects">
  <motion.h2 {...fadeUp} className="section-title">Projects</motion.h2>

  <div className="projects-grid">
    <motion.a 
      {...fadeUp} 
      href="https://nodejs-ecommerce-project-aak.vercel.app/" 
      target="_blank" 
      rel="noreferrer"
      className="project-card"
    >
      <div className="project-content">
        <h3>Glitz and Glam</h3>
        <p>Jewellery Store – Full E-commerce with authentication, cart & payments</p>
      </div>
    </motion.a>

    <motion.a 
      {...fadeUp} 
      href="https://taskmanageak-l3f5334ef-aaliya-khans-projects-5ad157c6.vercel.app/" 
      target="_blank" 
      rel="noreferrer"
      className="project-card"
    >
      <div className="project-content">
        <h3>Task Management System</h3>
        <p>Organize tasks with full CRUD, search & pagination (MERN)</p>
      </div>
    </motion.a>

    <motion.a 
      {...fadeUp} 
      href="https://cakealiciousak.netlify.app/" 
      target="_blank" 
      rel="noreferrer"
      className="project-card"
    >
      <div className="project-content">
        <h3>Cake-a-licious</h3>
        <p>Bakery Store – Modern frontend with product showcase</p>
      </div>
    </motion.a>

    <motion.a 
      {...fadeUp} 
      href="https://destinydriverental.netlify.app/" 
      target="_blank" 
      rel="noreferrer"
      className="project-card"
    >
      <div className="project-content">
        <h3>Destiny Drive Rental</h3>
        <p>Car rental system with booking & CRUD operations</p>
      </div>
    </motion.a>
  </div>
</section>


      {/* EDUCATION */}
      <section id="education" className="education">
  <motion.h2 {...fadeUp} className="section-title">Education</motion.h2>

  <div className="timeline">
    <motion.div {...fadeUp} className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>Bachelor of Computer Application</h3>
        <span className="timeline-date">RKDF University</span>
        <p>Gained strong foundation in computer science, programming, and databases.</p>
      </div>
    </motion.div>

    <motion.div {...fadeUp} className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>MERN Stack Development</h3>
        <span className="timeline-date">Cybrom Technology</span>
        <p>Hands-on training in building full-stack applications with React, Node, Express, MongoDB.</p>
      </div>
    </motion.div>
  </div>
</section>


      {/* EXPERIENCE */}
<section id="experience" className="experience">
  <motion.h2 {...fadeUp} className="section-title">Experience</motion.h2>

  <div className="timeline">
    {/* Current Internship */}
    <motion.div {...fadeUp} className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>MERN Stack Developer Intern</h3>
        <span className="timeline-date">Cybrom Technology Pvt. Ltd. | June 2025 – Present</span>
        <p>Working on CRM applications using React, Node.js, Express.js, and MYSQL.  
        Gained real-world exposure to API integration, database management, and deploying apps to cloud platforms.</p>
      </div>
    </motion.div>

    {/* Past Internship */}
    <motion.div {...fadeUp} className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>Web Development Intern</h3>
        <span className="timeline-date">Tech Solutions | Jan 2025 – Apr 2025</span>
        <p>Assisted in building responsive websites using HTML, CSS, JavaScript, and React.  
        Collaborated with the design team to create modern, user-friendly interfaces.</p>
      </div>
    </motion.div>

    {/* Freelance Work */}
    <motion.div {...fadeUp} className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>Freelance Web Developer</h3>
        <span className="timeline-date">Remote | 2024 – 2025</span>
        <p>Developed full-stack projects for clients including e-commerce websites, portfolio sites, and task management systems.  
        Delivered end-to-end solutions with React, Node.js, and MongoDB.</p>
      </div>
    </motion.div>
  </div>
</section>
{/* {hobbies} */}
    <section className="hobbies-section">
      <h2 className="section-title">Hobbies & Interests</h2>
      <div className="hobbies-grid">
        {hobbies.map((hobby, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="hobby-icon">{hobby.icon}</div>
                <h3>{hobby.title}</h3>
              </div>
              <div className="flip-card-back">
                <p>{hobby.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
{/* CONTACT */}
<section id="contact" className="contact-section">
  {/* Section Title */}
  <motion.h2
    className="section-title"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
  >
    Contact Me
  </motion.h2>

  {/* Contact Cards */}
  <div className="contact-cards">
    {/* Email Card */}
    <motion.a
      className="contact-card"
      variants={cardVariant}
      initial="hidden"
      animate="visible"
      href="mailto:khanaaliya0277@gmail.com"
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
    >
      <i className="fas fa-envelope contact-icon"></i>
      <h3>Email</h3>
      <p>khanaaliya0277@gmail.com</p>
    </motion.a>

    {/* LinkedIn Card */}
    <motion.a
      className="contact-card"
      variants={cardVariant}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 }}
      href="https://www.linkedin.com/in/aaliya-khan-webdev"
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
    >
      <i className="fab fa-linkedin contact-icon"></i>
      <h3>LinkedIn</h3>
      <p>linkedin.com/in/aaliya-khan-webdev</p>
    </motion.a>

    {/* GitHub Card */}
    <motion.a
      className="contact-card"
      variants={cardVariant}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.4 }}
      href="https://github.com/aaliyak0129"
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
    >
      <i className="fab fa-github contact-icon"></i>
      <h3>GitHub</h3>
      <p>github.com/aaliyak0129</p>
    </motion.a>
  </div>
 <motion.h2
    className="section-title"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
  >
  “Collaboration Starts Here”
  </motion.h2>
<motion.p
  className="section-subtitle"
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
>
  If you’re looking for a developer to bring your ideas to life, you’re in the right place! <br />
  Drop me a message!
</motion.p>
  {/* Contact Form */}
  <motion.form
    ref={form}
    onSubmit={sendEmail}
    className="contact-form"
    variants={formVariant}
    initial="hidden"
    animate="visible"
  >
    <input type="text" name="name" placeholder="Your Name" required />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
    />
    <textarea
      name="message"
      placeholder="Your Message"
      rows="5"
      required
    />
    <motion.button
      type="submit"
      className="send-btn"
      whileHover={{ scale: 1.05, backgroundColor: "#ff6b81" }}
      whileTap={{ scale: 0.95 }}
    >
      Send Message
    </motion.button>
  </motion.form>
</section>
    </main>
  );
}
