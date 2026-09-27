import { Project } from "./types";

// Replace these placeholder entries with your real projects.
// Only the link fields you fill in will render as buttons — leave a
// field undefined (don't set it to an empty string) to hide its button.
export const projects: Project[] = [
  {
    id: "auto-reel-agent",
    title: "Auto-Reel Agent",
    shortDescription:
      "An automated AI pipeline that generates and publishes daily Instagram Reels from trending topics.",
    description:
      "Auto-Reel Agent is an automated short-form video generation pipeline that uses AI to discover a trending topic, generate a structured reel script, create AI-generated visuals, synthesize narration, assemble the final vertical video, and publish it directly to Instagram. The entire workflow runs through GitHub Actions on a scheduled daily pipeline without requiring a dedicated server.",
    problem:
      "Creating short-form social media content consistently requires multiple manual steps, including finding topics, writing scripts, generating visuals, recording narration, editing videos, and publishing them.",
    solution:
      "Built an end-to-end automated content pipeline that combines AI-generated scripts and images with text-to-speech and FFmpeg video processing, then automatically publishes the finished Reel through the Instagram Graph API.",
    technologies: [
      "Python",
      "Google Gemini",
      "Pollinations.ai",
      "edge-tts",
      "FFmpeg",
      "Pillow",
      "Instagram Graph API",
      "GitHub Actions"
    ],
    features: [
      "Automatically discovers trending topics using Google Gemini",
      "Generates structured 30-second reel scripts with image prompts",
      "Generates vertical AI images for each script segment",
      "Converts scripts into narrated audio using edge-tts",
      "Creates animated videos using FFmpeg Ken Burns effects",
      "Synchronizes narration, visuals, and on-screen text",
      "Automatically publishes completed Reels to Instagram",
      "Runs as a scheduled GitHub Actions workflow without a dedicated server"
    ],
    technicalHighlights: [
      "Designed the workflow as a three-stage artifact-based pipeline: script generation, image generation, and video assembly/upload",
      "Used structured JSON output and schema validation for reliable Gemini-generated scripts with exponential-backoff retries",
      "Implemented asynchronous text-to-speech generation and used ffprobe to calculate audio durations for video synchronization",
      "Used FFmpeg zoompan filters to transform generated images into animated vertical video segments",
      "Automated Instagram publishing through the Instagram Graph API by creating media containers, polling processing status, and publishing completed media",
      "Configured the complete pipeline as a scheduled GitHub Actions workflow with environment-based secrets and configuration"
    ],
    image: undefined,
    github: "https://github.com/Tsh007/auto-reel-agent",
    liveDemo: undefined,
    website: undefined,
    appStore: undefined,
    playStore: undefined
  },
  {
    id: "randomly",
    title: "Randomly",
    shortDescription:
      "A real-time random video calling platform that connects users anonymously through peer-to-peer WebRTC communication.",
    description:
      "Randomly is a modern random video chat application that lets users connect with strangers instantly without requiring accounts or storing personal data. Users enter a waiting queue and are automatically matched with another available user, after which a direct peer-to-peer video and audio connection is established. The application is designed to provide a lightweight, anonymous video communication experience across desktop and mobile devices.",
    problem:
      "People who want spontaneous video conversations often have to create accounts or use platforms with complex social and profile systems.",
    solution:
      "Built an anonymous random video calling platform with instant matchmaking, WebRTC peer-to-peer communication, and a lightweight React interface.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "WebRTC",
      "Simple Peer",
      "Vite",
      "Tailwind CSS",
    ],
    features: [
      "Real-time random video and audio calling",
      "Instant user matching through a server-side waiting queue",
      "Peer-to-peer WebRTC communication",
      "Anonymous usage without accounts or stored user data",
      "Responsive interface for desktop and mobile",
      "NAT traversal using TURN servers",
    ],
    technicalHighlights: [
      "Implemented WebRTC signaling using Socket.IO for offer, answer, and ICE candidate exchange",
      "Designed a server-side matchmaking queue that pairs waiting users",
      "Used peer-to-peer WebRTC streams to keep media communication direct between users",
      "Separated the React frontend and Node.js signaling backend for independent deployment",
    ],
    image: undefined,
    github: "https://github.com/Tsh007/Randomly",
    liveDemo: "https://randomly-khaki.vercel.app",
    website: undefined,
    appStore: undefined,
    playStore: undefined,
  },
  {
    id: "cab-booking-application",
    title: "Cab Booking Application",
    shortDescription:
      "A full-stack cab booking platform with a SwiftUI client, Node.js backend, MySQL database, maps, authentication, and ride management.",
    description:
      "Cab Booking Application is a ride-booking platform designed to connect passengers with nearby cabs and support carpooling for users in remote or underserved areas. The application combines a SwiftUI frontend with a Node.js and Express backend, MySQL for persistent data, Firebase Authentication, and MapKit for selecting pickup and destination locations. The system is structured around the core workflow of discovering nearby rides, selecting locations, and booking a cab.",
    problem:
      "Users in areas with limited transportation options need a convenient way to discover nearby cabs, select pickup and destination points, and arrange rides.",
    solution:
      "Built a full-stack cab booking application combining a native SwiftUI mobile interface with REST APIs, persistent backend storage, authentication, and map-based location selection.",
    technologies: [
      "Swift",
      "SwiftUI",
      "MapKit",
      "Node.js",
      "Express.js",
      "MySQL",
      "Firebase Authentication",
      "REST API",
    ],
    features: [
      "Map-based pickup and destination selection",
      "Nearby cab discovery and booking",
      "Cab and ride management",
      "Carpooling support for users in remote areas",
      "Firebase-based user authentication",
      "REST API communication between the mobile client and backend",
    ],
    technicalHighlights: [
      "Built a native SwiftUI client connected to a Node.js and Express backend",
      "Used MapKit for interactive pickup and destination selection",
      "Used MySQL for persistent application data",
      "Integrated Firebase Authentication for user authentication",
      "Separated mobile UI, backend API, and database responsibilities into distinct components",
    ],
    image: undefined,
    github: "https://github.com/Tsh007/Cab-Booking-Application",
    liveDemo: undefined,
    website: undefined,
    appStore: undefined,
    playStore: undefined,
  },
  {
    id: "inner-vibe",
    title: "InnerVibe",
    shortDescription:
      "An AI-powered SwiftUI yoga and pranayama app providing real-time pose guidance, breath classification, and progress tracking.",
    description:
      "InnerVibe is a yoga and pranayama application designed to provide guided wellness sessions with real-time feedback. Users can explore yoga asanas with instructions, benefits, precautions, and demonstration videos, then practice while the camera tracks their posture using a machine-learning model. The pranayama mode uses sound classification to identify breathing states and provides animated breathing guidance. The app also tracks best pose-hold times and daily practice streaks.",
    problem:
      "People practicing yoga and breathing exercises may struggle to maintain correct posture, follow breathing intervals, and consistently track their practice.",
    solution:
      "Built an iOS application that combines computer vision, machine learning, audio classification, and guided UI flows to provide real-time feedback during yoga and pranayama sessions.",
    technologies: [
      "Swift",
      "SwiftUI",
      "CoreML",
      "Vision",
      "SoundAnalysis",
      "AVFoundation",
      "UserDefaults",
    ],
    features: [
      "Yoga asana library with instructions, benefits, precautions, and videos",
      "Real-time yoga pose classification through the camera",
      "Pose-hold timer that stops when the user breaks the pose",
      "Best hold-time tracking for individual asanas",
      "Guided pranayama sessions with animated breathing cycles",
      "Real-time inhale, exhale, and silence classification",
      "Daily practice streak tracking",
    ],
    technicalHighlights: [
      "Integrated CoreML and Vision for real-time camera-based pose recognition",
      "Used SoundAnalysis for audio-based breathing-state classification",
      "Combined AVFoundation with SwiftUI for in-app instructional video playback",
      "Persisted practice streak and progress information using UserDefaults",
      "Designed the application as a SwiftUI-based experience for the Swift Student Challenge 2025",
    ],
    image: undefined,
    github: "https://github.com/Tsh007/InnerVibe",
    liveDemo: undefined,
    website: undefined,
    appStore: undefined,
    playStore: undefined,
  },
  {
    id: "quickfeed-news-app",
    title: "QuickFeed News App",
    shortDescription:
      "A SwiftUI-based iOS news application that fetches, organizes, and presents news articles through a clean native interface.",
    description:
      "QuickFeed News App is a native iOS news application built with SwiftUI to provide users with a simple and engaging way to discover and read news. The app retrieves news articles through an API and organizes them into an intuitive interface, allowing users to browse different news content and open articles for a detailed reading experience.",
    problem:
      "Keeping up with news from different sources can be inconvenient when users have to navigate multiple websites and applications.",
    solution:
      "Built a native iOS news application that aggregates news through an API and presents it in a clean, organized SwiftUI interface for quick browsing and reading.",
    technologies: [
      "Swift",
      "SwiftUI",
      "REST API",
      "JSON",
      "WKWebView"
    ],
    features: [
      "Fetches and displays news articles from a news API",
      "Clean native iOS interface built with SwiftUI",
      "Browse news articles through organized feeds",
      "Article detail and reading experience",
      "Search and discover news content",
      "Web-based article viewing inside the application"
    ],
    technicalHighlights: [
      "Built the application using SwiftUI and native iOS development patterns",
      "Integrated a REST API to retrieve and decode dynamic news data",
      "Used Codable/JSON parsing for handling API responses",
      "Implemented article viewing using WKWebView",
      "Designed reusable SwiftUI views for displaying news content"
    ],
    image: undefined,
    github: "https://github.com/Tsh007/QuickFeed-News-App-",
    liveDemo: undefined,
    website: undefined,
    appStore: undefined,
    playStore: undefined,
  },
  {
    id: "weather-webapp",
    title: "Live Weather WebApp",
    shortDescription:
      "A full-stack weather application providing live weather information with dynamic weather animations and city data persistence.",
    description:
      "Live Weather WebApp is a MERN-based application that allows users to search for cities and view real-time weather information retrieved from the OpenWeather API. The interface dynamically changes its weather animations based on current conditions, while MongoDB stores searched city information for persistence and quick access. The project demonstrates full-stack API integration, database communication, and responsive frontend development.",
    problem:
      "Users need a simple and interactive way to search for weather conditions while getting a visually understandable representation of the current weather.",
    solution:
      "Built a responsive full-stack weather application that combines live third-party weather data, persistent city storage, and condition-based animations.",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenWeather API",
    ],
    features: [
      "Real-time weather information using the OpenWeather API",
      "Search weather by city name",
      "Dynamic animations based on current weather conditions",
      "MongoDB-backed city data persistence",
      "Responsive interface for desktop and mobile",
    ],
    technicalHighlights: [
      "Integrated a third-party REST API with a React frontend",
      "Built a Node.js and Express.js backend for application and database communication",
      "Used MongoDB to persist searched city information",
      "Implemented condition-based UI animations for a more interactive experience",
    ],
    image: undefined,
    github: "https://github.com/Tsh007/Weather-WebApp",
    liveDemo: undefined,
    website: undefined,
    appStore: undefined,
    playStore: undefined,
  },
];
