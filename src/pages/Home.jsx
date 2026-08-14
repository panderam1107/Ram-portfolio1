import React from "react";
import { motion } from "framer-motion";
import "../CSS/Home.css";
import "../index.css";

// Images from public folder
const photo = "/logos/R.png";
const githubLogo = "/github.png";
const linkedinLogo = "/linkedin.png";
const gmailLogo = "/gmail.png";
const whatsappLogo = "/whatsapp.png";
const instagramLogo = "/insta.png";
const facebookLogo = "/facebook.png";

export default function Home() {
  const professions = [
    "AI Enthusiast",
    "Machine Learning Engineer",
    "Deep Learning Expert",
    "Computer Vision Researcher",
    "Developer",
  ];

  const quickLinks = [
    {
      img: githubLogo,
      title: "GitHub",
      link: "https://github.com/panderam1107",
    },
    {
      img: linkedinLogo,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/ram-pande-ba335a393",
    },
    {
      img: gmailLogo,
      title: "Email",
      link: "mailto:panderam1107@gmail.com",
    },
    {
      img: whatsappLogo,
      title: "WhatsApp",
      link: "https://wa.me/917721820715",
    },
    {
      img: instagramLogo,
      title: "Instagram",
      link: "https://www.instagram.com/_ram_pande/?hl=en",
    },
    {
      img: facebookLogo,
      title: "Facebook",
      link: "https://www.facebook.com/share/19PD6eSUWP/",
    },
  ];

  return (
    <section className="home-section">

      {/* ================= TOP SECTION ================= */}
      <div className="home-top">

        {/* ================= PROFILE PHOTO ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >

          {/* Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="photo-ring"
          />

          {/* Photo Frame */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="photo-frame"
          >
            <motion.img
              src={photo}
              alt="Ram Pande"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile-photo"
              onError={(e) => {
                console.log("Image not found:", e.target.src);
              }}
            />
          </motion.div>

        </motion.div>

        {/* ================= INFORMATION ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >

          {/* Name */}
          <h1 className="home-title">
            Hi, I'm{" "}

            <motion.span
              animate={{
                backgroundPositionX: ["0%", "200%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="home-name"
            >
              Ram Pande
            </motion.span>
          </h1>

          {/* Description */}
          <p className="typing-effect">
            Computer Science Engineering Student | Full Stack Web Developer |
            AI Enthusiast
          </p>

          {/* Profession Tags */}
          <motion.div className="profession-tags">

            {professions.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  background:
                    "linear-gradient(90deg,var(--accent),var(--accent-2))",
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
                className="profession-tag"
              >
                {role}
              </motion.div>
            ))}

          </motion.div>

          {/* Information Cards */}
          <motion.div className="info-cards">

            {[
              {
                label: "📍 Location",
                value: "Amravati, Maharashtra, India",
              },
              {
                label: "💼 Expertise",
                value: "Solving Complex Problems",
              },
              {
                label: "📧 Contact",
                value: "panderam1107@gmail.com",
              },
            ].map((info, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="info-card"
              >
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}

          </motion.div>

        </motion.div>
      </div>

      {/* ================= SOCIAL LINKS ================= */}
      <motion.div className="quick-links">

        <h2 className="quick-links-title">
          Connect with me
        </h2>

        <div className="quick-links-list">

          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.15,
                rotate: 5,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{
                  filter:
                    "drop-shadow(0 0 15px var(--accent)) brightness(1.2)",
                }}
                className="quick-link-img"
              />
            </motion.a>
          ))}

        </div>

      </motion.div>

    </section>
  );
}