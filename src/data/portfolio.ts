// Portfolio data - centralized content for easy updates

export const personalInfo = {
    name: "Asmith Pampana",
    role: "Software-Focused ECE Graduate | Functional Web Applications & System Prototypes",
    tagline:
        "Building real, working systems through hands-on development and rapid experimentation.",
    email: "asmyth@duck.com",
    linkedin: "https://www.linkedin.com/in/asmithpampana/",
    github: "https://github.com/Asmithcodes",
    resumeUrl: "/Asmith - Resume.pdf", // Placeholder - replace with actual resume URL
    photoUrl: "/mypic.PNG"
};

export const aboutContent = {
    paragraphs: [
        "As an Electrical & Communication Engineer, I am skilled in working with embedded systems, IoT, and software integration. I have been able to design real-time functional applications and prototyping that can be implemented effectively.",
        "I tackle issues from a systemic perspective, always striving for quick prototyping and concept validation. From building a web app to coding a microcontroller, I appreciate the process of problem solving and practical implementation.",
        "Having a history in electronics provides me with a different approach to software engineering. Being able to understand both ends of the equation allows me to operate freely in each domain and create hybrid solutions.",
    ],
    highlights: [
        "B.Tech ECE Graduate",
        "Web application development focus",
        "Rapid prototyping & PoC development",
        "Systems thinking approach",
        "Hardware-software integration experience",
    ],
};

export type Project = {
    id: string;
    title: string;
    type: string;
    description: string;
    focusAreas: string[];
    githubUrl?: string;
    demoUrl?: string;
    isPrimary: boolean;
    isFeatured?: boolean; // For highlighting special projects
    isGroup?: boolean;
    groupItems?: string[];
};

export const projects: Project[] = [
    // Primary Projects - Software & Web
    {
        id: "assetdesk",
        title: "AssetDesk",
        type: "Full-Stack MERN Application",
        description:
            "An enterprise IT asset tracking, hardware lifecycle management, and service ticket platform built with a 4-layer backend architecture (Routes → Controllers → Services → Repositories). Features automated priority-based SLA calculation timers, granular RBAC (Admin, Technician, Employee, Auditor), read-only system audit logging with change diffs, and Recharts analytics with client-side PDF export.",
        focusAreas: [
            "React 19",
            "Node.js & Express",
            "MongoDB (Mongoose)",
            "MERN Stack",
            "RBAC & Audit Log",
            "Tailwind CSS",
        ],
        githubUrl: "https://github.com/Asmithcodes/Ticket-Management-System",
        demoUrl: "https://asset-desk.netlify.app/dashboard",
        isPrimary: true,
        isFeatured: true,
    },
    {
        id: "aquacomply-india",
        title: "AquaComply India",
        type: "Internship Project · Thoyam Ecocognitives",
        description:
            "A system powered by AI that helps businesses conduct their own audits based on water and air quality metrics according to the standards set forth by CPCB. Capabilities include AI-based extraction from lab reports in PDF format using the Gemini API and intelligent matching with regional requirements.",
        focusAreas: ["React + Vite", "Gemini API", "PDF.js", "Tailwind CSS"],
        demoUrl: "https://asmithcodes.github.io/AquaComply-India/",
        isPrimary: true,
        isFeatured: true,
    },
    {
        id: "lumina",
        title: "Lumina",
        type: "Functional Web Application",
        description:
            "The use of an AI-driven decision analysis program leveraging the power of the Google Gemini API in making psychological decisions by prompting users with tough decisions. This will automatically synthesize answers to reveal hidden assumptions for personal clarity.",
        focusAreas: [
            "User-focused design",
            "Practical problem solving",
            "Accessible UI",
            "JavaScript logic",
        ],
        githubUrl: "https://github.com/Asmithcodes/Lumina-The-Decision-Engine",
        demoUrl: "https://asmithcodes.github.io/Lumina-The-Decision-Engine/",
        isPrimary: true,
        isFeatured: true,
    },
    {
        id: "transmit-via-sound",
        title: "Acoustic Data Link",
        type: "Functional Web Application",
        description:
            "An Internet browser-based audio data link for air-gap, peer-to-peer messaging without requiring Wi-Fi, Bluetooth, or cellular. Converts textual and file content to audio tones via the Web Audio API, sent over a device's speaker output and received by an adjacent microphone. Includes an 8-FSK modulation protocol with look-ahead scheduling, signal/noise ratio-based handshake negotiation, CRC32 data verification, and vintage signal intelligence graphics interface.",
        focusAreas: [
            "Web Audio API",
            "DSP / FSK modulation",
            "React + Vite",
            "Real-time signal processing",
            "Protocol design",
        ],
        githubUrl: "https://github.com/Asmithcodes/Transmit-via-Sound",
        demoUrl: "https://asmithcodes.github.io/Transmit-via-Sound/",
        isPrimary: true,
        isFeatured: true,
    },
    {
        id: "aetherway",
        title: "AetherWay",
        type: "Travel Planning Application",
        description:
            "A travel planner app that makes comparisons among flights, train services, bus services, and self-drive services in real-time. The software uses AI technology to aggregate the live prices, optimize routes, and offer direct booking links to users, who would then be provided with the best travel solutions available from the app's quick and dark-themed interface.",
        focusAreas: [
            "Full-stack development",
            "User experience",
            "Data management",
            "Interactive UI",
        ],
        githubUrl: "https://github.com/Asmithcodes/AetherWay-Travel-Planning",
        demoUrl: "https://asmithcodes.github.io/AetherWay-Travel-Planning/",
        isPrimary: true,
        // isFeatured: true
    },
    {
        id: "qr-generator",
        title: "QR A3 Batch Generator",
        type: "Proof-of-Concept Web Tool",
        description:
            "An easy to use web app for producing large batches of QR codes in an A3 template format for printing purposes. Allows the user to input any required data, change settings according to the layout needs and spacing requirements, and download print-ready sheets.",
        focusAreas: [
            "Web development",
            "JavaScript logic",
            "Rapid prototyping",
            "Real-world utility",
        ],
        githubUrl: "https://github.com/Asmithcodes/QR-A3-Batch-Generator",
        demoUrl: "https://qr-a3-batch-generator.netlify.app/",
        isPrimary: true,
    },
    {
        id: "ai-music",
        title: "AI Music Discovery",
        type: "Interactive Web Application",
        description:
            "An interactive web application that generates song suggestions based on the user's mood, activity, and preferred region. The software verifies each song using the Spotify API to make sure that it is available, and then creates a playlist for the user.",
        focusAreas: [
            "JavaScript",
            "Frontend logic",
            "Interactive UI",
            "Creative experimentation",
        ],
        githubUrl: "https://github.com/Asmithcodes/AI-Music-Discovery",
        demoUrl: "https://asmithcodes.github.io/AI-Music-Discovery/",
        isPrimary: true,
    },
    // Secondary Projects - Systems & Embedded
    {
        id: "wireless-headtracking",
        title: "Wireless Head Tracking System",
        type: "Embedded Systems Project",
        description:
            "Wireless head tracking system based on ESP32 with dual IMU sensors integration (MPU6500 & MPU6050) for accurate yaw & pitch tracking. Utilizes ESP-NOW wireless transmission protocol for fast communication (~100ms @ 10Hz) between wearable transmitter device and servo motor driven receiver. Applications include VR/AR systems, camera stabilizers and robots with gyroscope calibration and signal filtering capabilities.",
        focusAreas: [
            "ESP32 development",
            "Sensor fusion",
            "Wireless protocols",
            "Real-time systems",
            "Hardware-software integration",
        ],
        githubUrl: "https://github.com/Asmithcodes/Wireless-Headtracking-System",
        isPrimary: false,
        isFeatured: true,
    },
    {
        id: "iot-prototypes",
        title: "IoT & Embedded Prototypes",
        type: "Internship Work · EduTech Innovations",
        description:
            "A number of prototypes of IoT and embedded systems were developed to validate concepts and ideas. Emphasis was placed on rapid prototyping, sensing, controlling the microcontroller, and wireless connectivity.",
        focusAreas: [
            "ESP32",
            "Sensor integration",
            "IoT dashboards",
            "Wireless communication",
        ],
        githubUrl: "https://github.com/Asmithcodes/IoT-Projects",
        isPrimary: false,
        isGroup: true,
        groupItems: [
            "Surveillance Robot using ESP32-CAM (4WD)",
            "Human Following Robot",
            "Sensor-based data logging prototypes",
            "Web-connected IoT dashboards",
        ],
    },
    {
        id: "verilog",
        title: "Verilog Programs",
        type: "Digital Design Fundamentals",
        description:
            "Complete set of Verilog implementations of digital logic circuits ranging from fundamental combinatorial circuits to intricate sequential circuits. Contains structural implementations of multibit ALUs, shifters, and Finite State Machines (FSMs) to simulate digital logic timing and control.",
        focusAreas: ["Verilog HDL", "Digital logic", "Hardware design"],
        githubUrl: "https://github.com/Asmithcodes/Verilog-Programs",
        isPrimary: false,
        isGroup: true,
        groupItems: [
            "Logic gates & multiplexers",
            "Adders, subtractors & ALUs",
            "Flip-flops & registers",
            "Finite State Machines (FSMs)",
        ],
    },
];

export const skills = {
    primary: [
        "Web Application Development",
        "JavaScript / TypeScript",
        "Python",
        "React",
        "Rapid Prototyping",
        "Systems Thinking",
    ],
    secondary: [
        "Embedded Systems",
        "Microcontrollers (ESP32, Arduino)",
        "IoT Concepts",
        "Hardware-Software Integration",
        "Verilog HDL",
    ],
};

export const experiences = [
    {
        id: "thoyam",
        role: "Software Developer Intern",
        company: "Thoyam Ecocognitives Pvt. Ltd.",
        location: "Hyderabad",
        duration: "6 months",
        description:
            "Created AquaComply India - an AI-enabled environmental compliance self-audit system. Leveraged Google Gemini API and PDF.js library for parsing PDFs of lab reports and comparing water and air quality measurements with CPCB guidelines to prepare compliance reports.",
        highlights: [
            "React & TypeScript",
            "Gemini AI API",
            "PDF Parsing",
            "Tailwind CSS",
        ],
    },
    {
        id: "hal",
        role: "Engineering Intern",
        company: "Hindustan Aeronautics Limited (HAL)",
        location: "Hyderabad",
        duration: "3 months",
        description:
            "Built a Python program that simulates and verifies the logic used to establish a data link between two distributed systems. Emphasis was placed on analyzing the behavior of the systems and their states within an artificial experimental environment.",
        highlights: [
            "Python simulation",
            "System behavior modeling",
            "Logic validation",
            "Reliability testing",
        ],
    },
    {
        id: "edutech",
        role: "IoT and Robotics Intern",
        company: "EduTech Innovations",
        location: "Hyderabad",
        duration: "2 months",
        description:
            "Worked on rapid prototyping of IoT systems and embedded projects. Hands-on experience in interfacing sensors and programming microcontrollers.",
        highlights: [
            "Rapid prototyping",
            "ESP32 development",
            "IoT systems",
            "Embedded programming",
        ],
    },
    {
        id: "accord",
        role: "Intern",
        company: "Accord Power Digital Products",
        location: "Hyderabad",
        duration: "1 month",
        description:
            "Received training in fundamental aspects of electronics production, basic PCB design, and industrial machinery. Developed a basic understanding of electronics as they are made for the market.",
        highlights: [
            "Electronics manufacturing",
            "PCB design",
            "Industrial systems",
        ],
    },
];

export const education = {
    degree: "B.Tech in Electronics and Communication Engineering",
    institution: "Vidya Jyothi Institute of Technology",
    location: "Hyderabad",
    cgpa: "8.95",
    status: "Graduated",
};

export const navLinks = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
];
