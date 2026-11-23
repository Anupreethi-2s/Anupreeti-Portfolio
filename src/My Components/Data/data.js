const Bio = {
  fullName: "Anupreethi Nallavelli",
  title: "Web Developer",
  tagline: "I build fast, responsive React apps on AWS — and automate the work behind them with Python.",
  roles: [
    "Web Developer",
    "React.js Developer",
    "Python Automation Developer",
    "AWS Cloud Developer"
  ],
  email: "nallavellipreethi@gmail.com",
  phone: "+91 88978 51977",
  linkedin: "https://www.linkedin.com/in/anupreethi-nallavelli/",
  github: "https://github.com/Anupreethi-2s",
  portfolio: "https://anupreethi-2s.github.io/Anupreeti-Portfolio/",
  location: "Hyderabad, India",
  about: [
    "Web developer with 2+ years of experience building React.js applications on AWS, along with Python automation, serverless backends and secure cloud deployments.",
    "Currently a Web Developer at GeoDrone Solutions, where I built the drone inspection portal in React and the Python services behind it — automated PDF, Excel and Google Earth reports, event-driven image pipelines, thermal temperature reading and infrastructure as code on AWS.",
    "Looking to grow into DevSecOps by applying my web, Python and AWS skills to automate workflows for security and engineering teams.",
  ],
  experience: [
    {
      company: "GeoDrone Solutions",
      role: "Web Developer (React.js, Python, AWS)",
      duration: "Oct 2026 — Present",
      location: "Hyderabad, India",
      highlights: [
        "Built the React web portal: dashboards, a Leaflet map with thousands of markers, bounding-box tools and Transmission Line modules.",
        "Built 13 Python automation services on AWS Lambda and ECS Fargate that generate PDF, Excel and KMZ reports (ReportLab, openpyxl, Pillow), replacing manual work.",
        "Built event-driven pipelines (S3 → EventBridge → Lambda) and a Dockerised GDAL geospatial pipeline on ECS Fargate.",
        "Integrated a C library (DJI Thermal SDK) into Python with ctypes to read temperatures from thermal images.",
        "Managed infrastructure as code (CloudFormation), with Bash deploy scripts, Amplify CI/CD and CloudWatch monitoring.",
        "Secured the platform with Cognito role-based access, least-privilege IAM, Secrets Manager and signed URLs (HMAC, CloudFront).",
      ],
    },
    {
      company: "Hornbill Technologies",
      role: "Senior Developer (React.js, Node.js, AWS)",
      duration: "Sep 2024 — Sep 2026",
      location: "Hyderabad, India",
      highlights: [
        "Developed and enhanced features in a React.js + Node.js portal, improving system performance and user experience.",
        "Used AWS Lambda, DynamoDB, S3 and CloudWatch for backend workflows and automation.",
        "Built responsive UI components from Figma designs for desktop, tablet and mobile; integrated APIs and improved data processing logic.",
        "Automated drone thermography solar inspection reporting using Python, significantly improving processing speed.",
        "Supported drone thermal data analysis and upgraded post-inspection workflows.",
      ],
    },
  ],
  education: [
    {
      institution: "Kakatiya University College of Engineering and Technology",
      period: "2020 — 2024",
      degree: "B.Tech, Electrical and Electronics Engineering",
      score: "CGPA: 8.61 / 10",
    },
    {
      institution: "NRI Junior College, Hanamkonda",
      period: "2018 — 2020",
      degree: "Intermediate (10+2), MPC",
      score: "970 / 1000",
    },
    {
      institution: "Shantiniketan High School, Peddapalli",
      period: "2017 — 2018",
      degree: "Secondary School (10th Grade)",
      score: "GPA: 9.2",
    },
  ],
  languages: ["English", "Hindi", "Telugu"],
  softSkills: [
    "Problem-Solving & Critical Thinking",
    "Time Management",
    "Team Collaboration",
    "Adaptability",
    "Communication",
  ],
  hobbies: ["Dancing", "Listening to Music", "Playing Puzzles"],
};

export default Bio;
