const Projects = {
  projects: [
    {
      title: "GeoDrone Inspection Portal",
      category: "Web Development",
      problem:
        "Drone inspection teams reviewed thousands of thermal and RGB images and marked solar and transmission line defects by hand, across separate desktop tools.",
      role: "Web Developer — React.js, AWS",
      stack: ["React.js", "Vite", "Leaflet", "AWS Amplify", "Cognito", "REST APIs"],
      description:
        "Built the React web portal: project dashboards, a Leaflet inspection map that stays fast with thousands of defect markers, bounding-box tools that box the hotspot and read its temperature automatically, defect lists, deliverables and Transmission Line modules (towers, spans, components).",
      outcome:
        "One web portal for the whole inspection workflow, from upload to client deliverables, with secure role-based access.",
      githubLink: "",
      liveLink: "",
      featured: true,
    },
    {
      title: "Serverless Report Automation",
      category: "Python Automation & Cloud",
      problem:
        "Inspection reports were made by hand in Word, Excel and AutoCAD for every block, which was slow and error-prone.",
      role: "Developer — Python, AWS",
      stack: ["Python", "AWS Lambda", "ECS Fargate", "ReportLab", "openpyxl", "GDAL", "CloudFormation"],
      description:
        "Built 13 Python automation services on AWS: PDF, Excel and Google Earth (KMZ) reports generated as async jobs, event-driven image pipelines (S3 → EventBridge → Lambda), a Dockerised GDAL map-tiling pipeline on ECS Fargate, and thermal temperature reading through the DJI Thermal SDK with ctypes. Deployed as infrastructure as code with least-privilege IAM.",
      outcome:
        "Reports that were made by hand are now generated in one click, straight from the portal.",
      githubLink: "",
      liveLink: "",
      featured: true,
    },
    {
      title: "Hornbill Full-Stack Portal",
      category: "Full-Stack Development",
      problem:
        "An internal portal needed performance improvements and new features to handle growing user demands.",
      role: "Senior Developer — React.js, Node.js, AWS",
      stack: ["React.js", "Node.js", "AWS Lambda", "DynamoDB", "S3", "CloudWatch"],
      description:
        "Developed and enhanced features in a React.js + Node.js portal, improving system performance and user experience. Built backend workflows with AWS Lambda and DynamoDB, and optimized UI interactions for faster load times.",
      outcome:
        "Improved system performance, faster load times, and a more responsive user experience across all devices.",
      githubLink: "",
      liveLink: "",
      featured: true,
    },
    {
      title: "Portfolio Website",
      category: "Frontend Development",
      problem:
        "Needed a professional online presence to showcase work and attract clients.",
      role: "Solo Developer — Design & Build",
      stack: ["React.js", "MUI", "Styled Components", "React Typed", "CSS3"],
      description:
        "Designed and developed the entire portfolio independently. Built multiple responsive UI components, interactive pages, and smooth user navigation with subtle animations.",
      outcome:
        "A fast, responsive portfolio that turns visitors into clients with clear conversion paths.",
      githubLink: "https://github.com/Anupreethi-2s/Anupreeti-Portfolio",
      liveLink: "https://anupreethi-2s.github.io/Anupreeti-Portfolio/",
      featured: true,
    },
    {
      title: "Solar Anomaly Detection",
      category: "Automation & Data",
      problem:
        "Drone thermography solar inspection reporting was manual and slow.",
      role: "Developer — Python Automation",
      stack: ["Python", "Drone Thermography", "Data Analysis"],
      description:
        "Automated drone thermography solar inspection reporting using Python. Supported drone thermal data analysis and upgraded post-inspection workflows.",
      outcome:
        "Significantly improved processing speed for solar inspection reporting.",
      githubLink: "https://github.com/Anupreethi-2s/Solar-anomaly-detection",
      liveLink: "",
      featured: true,
    },
    {
      title: "SQL Data Project",
      category: "Data & Backend",
      problem:
        "Needed structured data analysis and query optimization practice.",
      role: "Solo Developer",
      stack: ["SQL", "Database Design"],
      description:
        "A structured SQL project covering database design, complex queries, and data analysis patterns.",
      outcome: "Built a solid foundation in database management and query optimization.",
      githubLink: "https://github.com/Anupreethi-2s/SQL",
      liveLink: "",
      featured: false,
    },
  ],
};

export default Projects;
