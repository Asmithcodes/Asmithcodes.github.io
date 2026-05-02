// Extended type for the All Projects page
export type ProjectItem = {
    id: string;
    title: string;
    focusAreas: string[];
    description: string;
    githubUrl?: string;
    demoUrl?: string;
    stars?: number;
    category: 'software' | 'hardware';
};

export const allProjects: ProjectItem[] = [
    {
        id: "lumina",
        title: "Lumina — The Decision Engine",
        stars: 16,
        description: "An AI-powered decision-making tool that uses deep, piercing questions to expose hidden fears, blind spots, and self-deception. Users answer 5 challenging questions about their dilemma and receive brutally honest, no-nonsense clarity on what action to take.",
        focusAreas: ["TypeScript", "React", "AI API"],
        githubUrl: "https://github.com/Asmithcodes/Lumina-The-Decision-Engine",
        demoUrl: "https://asmithcodes.github.io/Lumina-The-Decision-Engine/",
        category: "software"
    },
    {
        id: "transmit-via-sound",
        title: "Transmit via Sound",
        description: "A browser-based acoustic data link for air-gapped, peer-to-peer transmission using device audio hardware. Encodes text and files into 8-FSK audio signals to transmit data wirelessly over sound waves. Features a custom FSK protocol, CRC32 verification, and a vintage signal intelligence UI.",
        focusAreas: ["TypeScript", "React", "Web Audio API"],
        githubUrl: "https://github.com/Asmithcodes/Transmit-via-Sound",
        demoUrl: "https://asmithcodes.github.io/Transmit-via-Sound/",
        category: "software"
    },
    {
        id: "wireless-headtracking",
        title: "Wireless Head Tracking System",
        stars: 1,
        description: "An ESP32-based wireless head tracking system using ESP-NOW for low-latency communication and MPU6050/MPU6500 sensors for precise yaw and pitch tracking. Designed for VR/AR and robotics applications with real-time data transmission, error handling, and a modular codebase for easy customisation.",
        focusAreas: ["C++", "ESP32", "ESP-NOW", "MPU6050/MPU6500", "Servo Motor"],
        githubUrl: "https://github.com/Asmithcodes/Wireless-Headtracking-System",
        category: "hardware"
    },
    {
        id: "ai-music-discovery",
        title: "AI Music Discovery",
        description: "An AI-assisted music discovery app that generates personalized song recommendations based on user context — mood, activity, and region. Each recommendation is verified against Spotify in real time to filter out non-existent tracks, ensuring reliable playback and seamless playlist creation.",
        focusAreas: ["JavaScript", "Spotify Web API", "AI"],
        githubUrl: "https://github.com/Asmithcodes/AI-Music-Discovery",
        demoUrl: "https://asmithcodes.github.io/AI-Music-Discovery/",
        category: "software"
    },
    {
        id: "aetherway",
        title: "AetherWay — Intelligent Travel Planning",
        description: "An intelligent travel planning app that compares flights, trains, buses, and self-drive options in real-time. Powered by Google Gemini AI with grounded search, it finds live prices, optimal routes, and functional booking links. Features a kinetic UI, dark theme, user authentication, favorites, and search history.",
        focusAreas: ["TypeScript", "Google Gemini AI", "React"],
        githubUrl: "https://github.com/Asmithcodes/AetherWay-Travel-Planning",
        demoUrl: "https://asmithcodes.github.io/AetherWay-Travel-Planning/",
        category: "software"
    },
    {
        id: "app-idea-generator",
        title: "App Idea Generator",
        description: "A React + Vite application leveraging Google Gemini AI to transform abstract categories into concrete, exportable project plans. Designed to help developers rapidly brainstorm and validate project ideas.",
        focusAreas: ["JavaScript", "React", "Vite", "Google Gemini AI"],
        demoUrl: "https://asmithcodes.github.io/App-Idea-Generator/",
        category: "software"
    },
    {
        id: "bizcard",
        title: "Bizcard — AI Business Card Scanner",
        description: "An AI-powered business card scanner that leverages Google Gemini to extract structured contact information from card images and automatically syncs the data to Google Sheets via cloud integration. Eliminates manual entry and enables efficient digital contact management.",
        focusAreas: ["TypeScript", "Google Gemini", "Google Sheets API"],
        demoUrl: "https://asmithcodes.github.io/Bizcard/",
        category: "software"
    },
    {
        id: "local-qr-generator",
        title: "Local QR Generator",
        description: "A high-performance digital print lab designed for bulk QR code creation. Supports URL paste and CSV upload to generate hundreds of codes instantly, auto-arranged into print-ready A3 grids. Features high-DPI PDF/PNG export and an immersive interface for professional workflows.",
        focusAreas: ["TypeScript", "React"],
        demoUrl: "https://asmithcodes.github.io/Local-QR-Generator/",
        category: "software"
    },
    {
        id: "qr-a3-batch-generator",
        title: "QR A3 Batch Generator",
        description: "A lightweight React + Vite app that generates batches of QR codes and lays them out on A3 sheets for printing. Paste or upload data, customise layout and controls, then export high-resolution sheets.",
        focusAreas: ["TypeScript", "React", "Vite", "html2canvas"],
        githubUrl: "https://github.com/Asmithcodes/QR-A3-Batch-Generator",
        demoUrl: "https://qr-a3-batch-generator.netlify.app/",
        category: "software"
    },
    {
        id: "iot-projects-collection",
        title: "IoT Projects Collection",
        description: "A collection of Internet of Things (IoT) projects exploring embedded systems, real-time data handling, wireless communication, and automation. Implements hands-on projects using ESP32 and ESP8266 microcontrollers covering sensor integration, cloud connectivity, and smart system interfaces.",
        focusAreas: ["C++", "ESP32", "ESP8266", "Embedded Systems"],
        githubUrl: "https://github.com/Asmithcodes/IoT-Projects",
        category: "hardware"
    },
    {
        id: "verilog-programs",
        title: "Verilog Programs",
        description: "A dedicated Verilog HDL practice space focused on designing, simulating, and documenting digital logic circuits using Xilinx Vivado. Includes clean code, structured testbenches, schematics, and timing diagrams to strengthen HDL fundamentals.",
        focusAreas: ["Verilog HDL", "Xilinx Vivado"],
        githubUrl: "https://github.com/Asmithcodes/Verilog-Programs",
        category: "hardware"
    },
    {
        id: "8-bit-alu",
        title: "8-bit ALU",
        description: "A combinational RTL 8-bit Arithmetic Logic Unit (ALU) implemented in Verilog. Covers fundamental arithmetic and logic operations at the hardware description level.",
        focusAreas: ["Verilog HDL"],
        githubUrl: "https://github.com/Asmithcodes/8-bit-ALU",
        category: "hardware"
    },
    {
        id: "thoyam-ecocognitives",
        title: "Thoyam EcoCognitives Comply",
        description: "An AI-powered environmental compliance web application built with React, TypeScript, and Vite. Uses Google Gemini AI to help organisations navigate and comply with environmental regulations and sustainability standards. Deployed via Netlify with secure API key management.",
        focusAreas: ["TypeScript", "React", "Vite", "Google Gemini AI"],
        githubUrl: "https://github.com/Asmithcodes/thoyam-ecocognitives-comply",
        category: "software"
    },
    {
        id: "pureflow-design",
        title: "PureFlow Design for a Better World",
        description: "A TypeScript + React web application focused on sustainable water flow design and environmental solutions. Part of a broader initiative to build eco-conscious digital tools for real-world environmental challenges.",
        focusAreas: ["TypeScript", "React", "Vite"],
        githubUrl: "https://github.com/Asmithcodes/pureflowdesign-for-better-world",
        category: "software"
    },
    {
        id: "water-treatment-stp",
        title: "Water Treatment STP Designer",
        description: "A TypeScript-based web application for designing Sewage Treatment Plant (STP) configurations. Allows users to plan and visualise water treatment workflows, supporting civil and environmental engineering decision-making.",
        focusAreas: ["TypeScript", "React", "Vite"],
        githubUrl: "https://github.com/Asmithcodes/Water-Treatment-STP-Designer",
        category: "software"
    },
    {
        id: "aquacomply-india",
        title: "AquaComply India",
        description: "A web application tailored for Indian water quality compliance standards. Helps users assess, track, and report water treatment compliance in line with Indian regulatory frameworks.",
        focusAreas: ["TypeScript", "React", "Vite"],
        githubUrl: "https://github.com/Asmithcodes/AquaComply-India",
        category: "software"
    },
    {
        id: "pureflow-ai",
        title: "PureFlow AI",
        description: "An AI-assisted water purification and treatment planning tool. Leverages machine intelligence to recommend purification processes and treatment configurations based on input water quality parameters.",
        focusAreas: ["TypeScript", "React", "Vite", "AI"],
        githubUrl: "https://github.com/Asmithcodes/PureFlow-AI",
        category: "software"
    }
];
