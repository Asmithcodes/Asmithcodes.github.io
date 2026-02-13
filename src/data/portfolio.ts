// Portfolio data - centralized content for easy updates

export const personalInfo = {
    name: "Asmith Pampana",
    role: "Software-Focused ECE Student | Functional Web Applications & System Prototypes",
    tagline: "Building real, working systems through hands-on development and rapid experimentation.",
    email: "asmyth@duck.com",
    linkedin: "https://www.linkedin.com/in/asmithpampana/",
    github: "https://github.com/Asmithcodes",
    resumeUrl: "/Asmith_Pampana_Resume.pdf", // Placeholder - replace with actual resume URL
    photoUrl: "/AsmithPhoto.png", // Placeholder - replace with actual photo
};

export const aboutContent = {
    paragraphs: [
        "I'm a final-year Electronics and Communication Engineering student with a strong foundation in embedded systems, IoT, and hardware-software integration. Recently, I've gravitated toward building functional web applications and software tools — discovering a deep interest in creating solutions that people can actually use.",
        "I enjoy rapid prototyping and proof-of-concept development, approaching problems with a systems thinking mindset. Whether it's spinning up a web application or debugging a microcontroller, I value clarity, structured problem solving, and hands-on experimentation.",
        "My background in electronics gives me a unique perspective on software — understanding both sides of the stack has made me comfortable working across domains and tackling challenges that bridge hardware and software."
    ],
    highlights: [
        "Final-year B.Tech ECE student",
        "Web application development focus",
        "Rapid prototyping & PoC development",
        "Systems thinking approach",
        "Hardware-software integration experience"
    ]
};

export type Project = {
    id: string;
    title: string;
    type: string;
    description: string;
    focusAreas: string[];
    githubUrl: string;
    demoUrl?: string;
    isPrimary: boolean;
    isFeatured?: boolean; // For highlighting special projects
    isGroup?: boolean;
    groupItems?: string[];
};

export const projects: Project[] = [
    // Primary Projects - Software & Web
    {
        id: "lumina",
        title: "Lumina",
        type: "Functional Web Application",
        description: "Lumina is an AI-powered decision-clarity tool designed to help users think more honestly about complex personal dilemmas. By guiding users through a small set of deliberately challenging questions, Lumina surfaces hidden assumptions, emotional blind spots, and avoided trade-offs, then delivers direct, actionable insights focused on what matters most and what to do next.",
        focusAreas: ["User-focused design", "Practical problem solving", "Accessible UI", "JavaScript logic"],
        githubUrl: "https://github.com/Asmithcodes/Lumina--The-Decision-Clarity-Engine",
        demoUrl: "https://asmithcodes.github.io/Lumina--The-Decision-Clarity-Engine/",
        isPrimary: true,
        isFeatured: true
    },
    {
        id: "aetherway",
        title: "AetherWay",
        type: "Travel Planning Application",
        description: "An intelligent travel planning application that compares flights, trains, buses, and self-drive options in real time. The system aggregates live pricing, route optimization, and direct booking links using AI-powered search, presenting users with the most practical and efficient travel choices through a fast, dark-themed interface with saved searches and favorites.",
        focusAreas: ["Full-stack development", "User experience", "Data management", "Interactive UI"],
        githubUrl: "https://github.com/Asmithcodes/AetherWay-Travel-Planning",
        demoUrl: "https://asmithcodes.github.io/AetherWay-Travel-Planning/",
        isPrimary: true,
        // isFeatured: true
    },
    {
        id: "qr-generator",
        title: "QR A3 Batch Generator",
        type: "Proof-of-Concept Web Tool",
        description: "A lightweight web application for generating QR codes in bulk and arranging them into print-ready A3 layouts. Users can paste or upload data, customize layout and spacing controls, and export high-resolution printable sheets. Built with a focus on usability, fast iteration, and real-world utility.",
        focusAreas: ["Web development", "JavaScript logic", "Rapid prototyping", "Real-world utility"],
        githubUrl: "https://github.com/Asmithcodes/QR-A3-Batch-Generator",
        demoUrl: "https://qr-a3-batch-generator.netlify.app/",
        isPrimary: true
    },
    {
        id: "ai-music",
        title: "AI Music Discovery",
        type: "Interactive Web Application",
        description: "An AI-assisted music discovery application that generates personalized song recommendations based on user context such as mood, activity, and region. The system verifies each recommendation against Spotify in real time to eliminate non-existent or incorrect tracks, ensuring only valid, playable results and seamless playlist creation.",
        focusAreas: ["JavaScript", "Frontend logic", "Interactive UI", "Creative experimentation"],
        githubUrl: "https://github.com/Asmithcodes/AI-Music-Discovery",
        demoUrl: "https://asmithcodes.github.io/AI-Music-Discovery/",
        isPrimary: true
    },
    // Secondary Projects - Systems & Embedded
    {
        id: "wireless-headtracking",
        title: "Wireless Head Tracking System",
        type: "Embedded Systems Project",
        description: "An ESP32-based wireless head tracking system featuring dual IMU sensor fusion (MPU6500 + MPU6050) for precise yaw and pitch tracking. Uses ESP-NOW protocol for low-latency communication (~100ms at 10Hz) between a wearable transmitter unit and servo-controlled receiver. Designed for VR/AR applications, camera gimbals, and interactive robotics with automatic gyroscope calibration, signal filtering, and real-time data validation.",
        focusAreas: ["ESP32 development", "Sensor fusion", "Wireless protocols", "Real-time systems", "Hardware-software integration"],
        githubUrl: "https://github.com/Asmithcodes/Wireless-Headtracking-System",
        isPrimary: false,
        isFeatured: true
    },
    {
        id: "iot-prototypes",
        title: "IoT & Embedded Prototypes",
        type: "Internship Work · EduTech Innovations",
        description: "Multiple IoT and embedded system prototypes created for educational and proof-of-concept purposes. Focused on rapid development, sensor integration, microcontroller programming, and wireless communication.",
        focusAreas: ["ESP32", "Sensor integration", "IoT dashboards", "Wireless communication"],
        githubUrl: "https://github.com/Asmithcodes/IoT-Projects",
        isPrimary: false,
        isGroup: true,
        groupItems: [
            "Surveillance Robot using ESP32-CAM (4WD)",
            "Human Following Robot",
            "Sensor-based data logging prototypes",
            "Web-connected IoT dashboards"
        ]
    },
    {
        id: "verilog",
        title: "Verilog Programs",
        type: "Digital Design Fundamentals",
        description: "A collection of Verilog programs showcasing foundational understanding of digital logic and hardware description concepts.",
        focusAreas: ["Verilog HDL", "Digital logic", "Hardware design"],
        githubUrl: "https://github.com/Asmithcodes/Verilog-Programs",
        isPrimary: false
    }
];

export const skills = {
    primary: [
        "Web Application Development",
        "JavaScript / TypeScript",
        "Python",
        "React",
        "Rapid Prototyping",
        "Systems Thinking"
    ],
    secondary: [
        "Embedded Systems",
        "Microcontrollers (ESP32, Arduino)",
        "IoT Concepts",
        "Hardware-Software Integration",
        "Verilog HDL"
    ]
};

export const experiences = [
    {
        id: "hal",
        role: "Engineering Intern",
        company: "Hindustan Aeronautics Limited (HAL)",
        location: "Hyderabad",
        duration: "3 months",
        description: "Developed a Python-based simulation to model and validate data-link establishment logic between two distributed systems. Focused on analyzing system behavior, state transitions, and reliability within a controlled simulation environment.",
        highlights: ["Python simulation", "System behavior modeling", "Logic validation", "Reliability testing"]
    },
    {
        id: "edutech",
        role: "IoT and Robotics Intern",
        company: "EduTech Innovations",
        location: "Hyderabad",
        duration: "2 months",
        description: "Worked on rapid prototyping of IoT systems and embedded projects. Gained hands-on experience with sensor integration, microcontroller programming, and system-level experimentation.",
        highlights: ["Rapid prototyping", "ESP32 development", "IoT systems", "Embedded programming"]
    },
    {
        id: "accord",
        role: "Intern",
        company: "Accord Power Digital Products",
        location: "Hyderabad",
        duration: "1 month",
        description: "Gained exposure to electronics manufacturing processes, PCB design fundamentals, and industrial systems. Developed understanding of production-grade electronics development.",
        highlights: ["Electronics manufacturing", "PCB design", "Industrial systems"]
    }
];

export const education = {
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "Vidya Jyothi Institute of Technology",
    location: "Hyderabad",
    cgpa: "8.95",
    status: "Final Year"
};

export const navLinks = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
];
