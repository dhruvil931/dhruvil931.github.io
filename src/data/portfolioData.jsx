export const portfolioData = {
  hero: {
    name: "Dhruvil Kapadiya",
    role: "Java Full Stack Web Developer",
    valueStatement:
      "Building robust backend architectures, designing scalable REST APIs, and crafting intuitive user experiences with modern tech stacks.",
    cta1: "Download CV",
    cta2: "Contact Me",
  },
  about: {
    title: "About Me",
    description:
      "I am a dedicated Computer Engineering student at LDRP Institute of Technology and Research with a strong passion for software development. My expertise lies in Java Full Stack Web Development, seamlessly bridging Spring Boot and RESTful architectures with dynamic React frontends. I thrive on rapid prototyping, solving complex problems with Data Structures and Algorithms, and designing normalized databases to build scalable, end-to-end solutions.",
  },
  projects: [
    {
      id: "project-1",
      title: "Freightelligent - Freight Logistics Platform",
      description:
        "A multi-role logistics platform supporting Shipper, Carrier, and Customer workflows.",
      techStack: ["React", "Spring Boot", "MySQL", "JWT", "JPA/Hibernate"],
      features: [
        "REST APIs for shipment creation, bidding, assignment, and tracking",
        "Role-based access control and secure authentication using JWT & Spring Security",
        "Normalized relational database schema design",
        "Integrated modern React frontend with backend API workflows",
      ],
      link: "https://shipment-tracking-portal.vercel.app/",
      github: "https://github.com/dhruvil931/Shipment-Tracking-Portal",
    },
    {
      id: "project-2",
      title: "Crop Recommendation DSS",
      description:
        "A Decision Support System providing real-time crop recommendations based on environmental and soil parameters.",
      techStack: ["React", "Spring Boot", "Python", "scikit-learn"],
      features: [
        "Integrated trained machine learning models with Spring Boot backend via REST APIs",
        "Input validation for N, P, K, temperature, humidity, pH, and rainfall parameters",
        "Modular architecture separating frontend, backend, and ML services",
      ],
      link: "https://agrosmart-iota.vercel.app/",
      github: "https://github.com/dhruvil931/Crop_recommendation_system",
    },
  ],
  skillsDetailed: {
    languages: [{ name: "Java" }, { name: "C++" }, { name: "Python" }],
    backend: [
      { name: "Spring Boot" },
      { name: "Spring Security" },
      { name: "REST APIs" },
      { name: "JWT" },
    ],
    frontend: [
      { name: "React.js" },
      { name: "JavaScript" },
      { name: "HTML5 & CSS3" },
      { name: "Tailwind CSS" },
    ],
    database: [{ name: "MySQL" }, { name: "JPA/Hibernate" }, { name: "SQL" }],
    tools: [
      { name: "Git & GitHub" },
      { name: "Maven" },
      { name: "Postman" },
      { name: "IntelliJ IDEA" },
      { name: "VS Code" },
    ],
  },
  education: [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "LDRP Institute of Technology and Research (LDRP-ITR)",
      location: "Gandhinagar, India",
      duration: "2023 - Present",
      coursework:
        "Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems",
    },
  ],
  activities: [
    {
      title: "HackOut 2025 Participant",
      organization: "DA-IICT",
      description:
        "Built a team-based solution under strict time constraints focusing on rapid prototyping and problem-solving.",
      link: "https://drive.google.com/file/d/1-KJuH-qOfDaU99FFiTGWxFCie33jFDrY/view?usp=sharing",
    },
    {
      title: "Python for Data Science",
      organization: "NPTEL, IIT Madras",
      description: "Certification",
      link: "https://drive.google.com/file/d/1vkdXJxwPH-9On0m2ikp6_EyGFFZEY-Em/view?usp=sharing",
    },
  ],
  contact: {
    email: "dhruvil.k1087@gmail.com",
    phone: "+91 9909331408",
    linkedin: "https://www.linkedin.com/in/dhruvil-kapadiya/",
    github: "https://github.com/dhruvil931",
    leetcode: "https://leetcode.com/u/Dhruvil_Kapadiya/",
    gfg: "https://www.geeksforgeeks.org/profile/dhruvil__kapadiya",
  },
};
