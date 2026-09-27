import { Experience } from "./types";

// Add or edit entries here — every UI (timeline, terminal, desktop window)
// renders this list directly, in order (most recent first).
export const experience: Experience[] = [
  {
    id: "thomson-reuters",
    company: "Thomson Reuters",
    role: "SDE Intern",
    startDate: "2/Feb/2026",
    endDate: "3/Aug/2026",
    location: "Bangalore, Karnataka, India",
    description:
      "",
    responsibilities: [
      "Developed and maintained scalable C#, ASP.NET Core backend services and REST APIs, contributing to 50+ production endpoints while applying SOLID principles and clean architecture.",
      "Optimized SQL Server queries and stored procedures across 15+ API workflows, improving database efficiency and reducing unnecessary processing and response time for production workloads.",
      "Engineered asynchronous, event-driven workflows using Azure Service Bus Queues and background microservices, automating 10+ long running jobs and decoupling time intensive processing from API requests.",
      "Engineered and maintained backend microservices responsible for distributed task execution, improving system scalability, reliability, and fault tolerance across multiple services.",
      "Enhanced enterprise search by implementing document text extraction using Aspose and indexing processed content into Azure Cognitive Search, supporting search across 1000+ documents.",
      "Developed unit and infrastructure tests covering 50+ test scenarios, strengthening regression coverage, validating new features and improving confidence in production releases.",
      "Participated in Agile development practices including sprint planning, code reviews, CI/CD workflows, and cross team collaboration .",
    ],
    technologies: ["ASP.NET Core", "C#", "SQL Server", "Azure", "Git/Github", "Docker", "CI/CD", "Datadog", "Reach.js", "typescript", "javascript"],
    achievements: [],
    companyUrl: "https://www.thomsonreuters.com/en",
    certificateUrl: "https://drive.google.com/file/d/1w6ib0Zq5Pj1cDcAqhkFlmKATUNC61Dhl/view",
  },
  {
    id: "trigrexam",
    company: "Trigrexam (Trigredge Solutions)",
    role: "iOS Developer Intern",
    startDate: "16/May/2024",
    endDate: "25/Oct/2024",
    location: "Remote",
    description:
      "",
    responsibilities: [
      "Gained a robust understanding of Swift UI-Kit with expertise in REST API integration, MVVM architecture, Core Data, and UserDefaults, achieving 50% faster data retrieval and enhancing app responsiveness.",
      "Designed, deployed, and managed fault-tolerant, highly available iOS solutions that scaled to support 30% more concurrent users, ensuring a seamless user experience.",
      "Applied architectural best practices, such as MVVM and CoreData Framework, significantly optimizing app security and performance and contributing to a 15% reduction in memory usage.",
      "Implemented in-app video players, download functionality, and PDF viewers, enriching user interaction and boosting in-app engagement by 75%.",
    ],
    technologies: ["Swift", "SwiftUI", "UIKit", "Firebase", "Javascript"],
    achievements: [],
    companyUrl: "https://apps.apple.com/in/app/career-endeavour/id6736679253",
    certificateUrl: "https://drive.google.com/file/d/1U5N2lVlrJn2V6VzL38-zQUNjw5Yfa0uO/view",
  },
];
