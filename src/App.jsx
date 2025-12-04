import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Terminal, 
  Database, 
  Cpu, 
  ChevronDown, 
  Download,
  Menu,
  X,
  Server,
  Layout,
  Smartphone,
  Zap,
  Globe,
  Settings,
  Shield,
  Hash,
  FileText,
  Network,
  Award,
  Briefcase,
  TrendingUp,
  Users,
  CheckCircle,
  Quote,
  Star,
  MessageSquare,
  BookOpen,
  Target,
  Layers,
  GraduationCap,
  PlayCircle,
  Phone,
  Moon,
  Sun
} from 'lucide-react';

// --- REVEAL COMPONENT ---
const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div 
      ref={ref} 
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hireMenuOpen, setHireMenuOpen] = useState(false); 
  const [heroContactOpen, setHeroContactOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated: Apply 'dark' class to html element for Tailwind
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Toggle Dark Mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const personalInfo = {
    name: "Anurag Chavhan",
    role: "Software Engineer Graduate | Java & SQL Certified | Open to Development & Technical Roles",
    about: "As a 2023 Software Engineering graduate, I have spent the last year bridging the gap between theoretical concepts and real-world application. My journey began with a strong foundation in core development, solidified by professional certifications in Java and SQL.",
    email: "anuraggchavhan@gmail.com",
    phone: "+91 8668262217",
    github: "https://github.com/AnuragCHAUHAN1",
    linkedin: "https://linkedin.com/in/AnuragChauhan"
  };

  const education = [
    {
      degree: "Bachelor of Computer Science & Engineering",
      school: "G.H. Raisoni Academy of Engineering & Technology", 
      location: "Nagpur, India",
      period: "August 2019 – August 2023",
      score: "SGPA: 6.88/10.00", 
      details: "Specialized in Software Engineering with a focus on practical implementation. Leveraged a strong foundation in Java and SQL to build scalable solutions, bridging the gap between academic theory and real-world application.",
      projects: ["Major Project: SectorX.crypto", "Minor Project: Traffic Rule Violation: Over Speeding"]
    }
  ];

  const skills = [
    { name: "Networking & Protocols", icon: <Network className="w-6 h-6 text-blue-600 dark:text-blue-400" />, items: ["OSI Model", "TCP/IP", "IPv4/IPv6", "DNS", "HTTP/S"] },
    { name: "Core Development", icon: <Terminal className="w-6 h-6 text-blue-600 dark:text-blue-400" />, items: ["Java", "SQL", "Python", "OpenCV"] },
    { name: "Web Stack", icon: <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />, items: ["React", "HTML", "CSS", "Responsive UI", "Backend API"] }
  ];

  const services = [
    {
      title: "Custom Web Solutions",
      icon: <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: "Building tailored digital solutions. No generic templates—pure code designed for unique operational requirements and scalability."
    },
    {
      title: "App Development",
      icon: <Smartphone className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: "Developing high-performance mobile applications with seamless user experiences, tailored for both Android and iOS platforms."
    },
    {
      title: "Data Analysis",
      icon: <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: "Transforming raw data into actionable insights through statistical analysis, visualization, and predictive modeling."
    },
    {
      title: "E-commerce Development",
      icon: <Layout className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: "Creating robust online stores with secure payment gateways, inventory management, and user-friendly interfaces to drive sales."
    }
  ];

  const businessSolutions = [
    {
      title: "Food Billing Software (Desktop & Android)",
      clientType: "Ravi Saoji Bhojnalay",
      clientName: "Bhushan Likhar",
      location: "Nagpur, Maharashtra",
      contact: "+91 72765 42388",
      impact: "Cross-Platform Efficiency",
      description: "A comprehensive billing and order management application running effectively on both Desktop and Android devices. Streamlines daily operations for a busy restaurant environment.",
      tags: ["Desktop App", "Android", "Billing System"],
      videoUrl: "https://youtu.be/bMCI7EcKHJs"
    },
    {
      title: "Clinic Management System",
      clientType: "Audiology & Speech Therapy Clinic",
      clientName: "Ms. Rutuja Sonawane",
      location: "Manewada, Nagpur",
      contact: "+91 7415858477",
      impact: "Multi-Branch Management",
      description: "Full-stack medical software managing patient data, appointments, PTA tests, and speech assessments. Features secure authentication and seamless branch switching across 5 Vidarbha locations.",
      tags: ["CRM", "Medical Tech", "Multi-Branch", "Auth"],
      videoUrl: "https://youtu.be/o4BsvZBk_FU"
    },
    {
      title: "MR Performance System (App & Web)",
      clientType: "Medical Representative",
      clientName: "Mr. Yogesh Lillhare",
      location: "Seminary Hills, Nagpur",
      contact: "+91 7020618012",
      impact: "Sales Optimization",
      description: "A comprehensive digital assistant for MRs featuring real-time KPI dashboards (POB, Call Avg), auto-analysis of product strength/weakness, and Doctor Visit CRM. Syncs securely via cloud for seamless desktop and mobile use.",
      tags: ["CRM", "Analytics", "Android", "Firebase"],
      videoUrl: "#" 
    }
  ];

  const softwareReviews = [
    {
      name: "Mr. Bhushan Likhar",
      role: "Owner, Ravi Saoji Bhojnalay",
      project: "Food Billing Software",
      content: "Implementing this Food Billing Software has been a game-changer. The system runs seamlessly on both our desktops and Android devices, allowing us to manage orders during peak hours without a hitch. Our billing efficiency has improved drastically, leading to a 15% increase in overall revenue due to faster table turnover.",
      rating: 5,
      metrics: "15% Revenue Increase"
    },
    {
      name: "Ms. Rutuja Sonawane",
      role: "Audiology & Speech Therapy Clinic",
      project: "Clinic Management System",
      content: "Managing patient data across five branches used to be a challenge, but this software solved it all. The 'Branch Switch' feature is secure and user-friendly. We have reduced administrative processing time by 40%, allowing us to focus entirely on patient care.",
      rating: 5,
      metrics: "40% Less Admin Time"
    },
    {
      name: "Mr. Yogesh Lillhare",
      role: "Medical Representative",
      project: "MR Performance System",
      content: "It completely replaced my manual reports with a dynamic dashboard. The 'Strategic Intelligence' feature helps me identify 'Star Products' versus those needing focus. I was able to optimize my route and pitch, boosting my target achievement rate by 25% in the first quarter.",
      rating: 5,
      metrics: "25% Target Boost"
    },
    {
      name: "Adv. Rohan Deshmukh",
      role: "Deshmukh Legal Solutions",
      project: "Legal Practice Suite",
      content: "This custom software completely digitized our case files, allowing instant access to client history. The automated 'Hearing Reminder' system ensures we never miss a date. Since implementation, our firm has seen a 20% increase in billable revenue due to accurate invoicing.",
      rating: 5,
      metrics: "20% Billable Increase"
    }
  ];

  const projects = [
    {
      title: "Speed Violation Detector",
      tech: ["Python", "OpenCV", "Machine Learning"],
      description: "Automated monitoring system catches speed violator and save its vehicle image along with its ID and speed in database and total data in notepad automatically.",
      links: { demo: "#", code: "https://github.com/AnuragCHAUHAN1/VEHICLE-DETECTION" }
    },
    {
      title: "SectorX Crypto",
      tech: ["Blockchain", "React", "HTML", "CSS"],
      description: "Totally responsive website which show current news of all the cryptocurrencies and its daily market growth with past comparison through graph.",
      links: { demo: "https://sectorx-p5n6.onrender.com/", code: "https://github.com/AnuragCHAUHAN1/SectorX" }
    }
  ];

  const experience = [
    {
      company: "Mine8 Automation",
      role: "Software Engineer Intern",
      period: "Aug 2023 – Oct 2023",
      location: "Pune, MH",
      description: "Engineered and tested scalable automation software, effectively translating requirements into deployable code.",
      achievements: [
        "Optimized debugging strategies to identify critical bottlenecks, increasing overall system reliability by 15%.",
        "Collaborated in peer code reviews to standardize best practices, resulting in a 10% improvement in code quality and maintainability.",
        "Executed rigorous unit and system testing protocols to ensure bug-free releases and stable production deployments."
      ]
    },
    {
      company: "Rostris Infotech",
      role: "Software Engineer Intern",
      period: "July 2022 – Sep 2022",
      location: "Indore, MP",
      description: "Developed custom software solutions tailored to client specifications, utilizing advanced database management techniques.",
      achievements: [
        "Designed a robust database architecture with validation logic that reduced manual data entry errors by 25%.",
        "Implemented strict data integrity checks, directly enhancing system accuracy and stakeholder satisfaction.",
        "Maintained high productivity in a fast-paced environment by writing efficient, reusable code for client-facing applications."
      ]
    },
    {
      company: "Self-Employed / Freelance",
      role: "Freelance Software Developer",
      period: "2022 – Present",
      location: "Remote / Nagpur",
      description: "Operating as an independent developer bridging the gap between graduation and full-time employment by delivering end-to-end software products for real-world businesses.",
      achievements: [
        "Delivered 3+ major production systems including a Billing System, Clinic CRM, and MR Performance App.",
        "Managed the full Software Development Life Cycle (SDLC) from client requirement gathering to deployment and support.",
        "Demonstrated self-discipline and adaptability by learning new tech stacks (React, Firebase, Android) on-demand to meet client needs."
      ]
    }
  ];

  const publications = [
    {
      title: "Enabling Secure and Efficient Crypto Transfer with SectorX.crypto: A Web 3.0 and Blockchain Solution",
      journal: "IJARSCT (Volume 3, Issue 7)", 
      date: "April 2023",
      authors: "Anurag Chauhan, Sumeet Ghodke, Ilhaan Rahim, Vinit Pardhi, Vedant Farde, Aniket Nandagavli, Prof. Antara Bhattacharya",
      institution: "GH Raisoni Academy of Engineering and Technology, Nagpur",
      link: "https://ijarsct.co.in/Paper9487.pdf"
    },
    {
      title: "Applying machine learning and object detection for identifying traffic rule violation: over speeding",
      journal: "International Journal of Engineering Applied Sciences and Technology",
      date: "June 2023",
      authors: "Anurag Chauhan, Ilhaan Rahim, Vikrant Chole, Ritvik Chauhan, Karan Kurani",
      institution: "IJEAST Vol. 8(2): 274-279 | DOI: 10.33564/IJEAST.2023.v08i02.041",
      link: "https://www.researchgate.net/publication/373985628_APPLYING_MACHINE_LEARNING_AND_OBJECT_DETECTION_FORIDENTIFYING_TRAFFIC_RULE_VIOLATION_OVER_SPEEDING"
    }
  ];

  return (
    <div>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden transition-colors duration-300">
        
        {/* NAVIGATION */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition">
              Anurag<span className="text-blue-600 dark:text-blue-400">.dev</span>
            </a>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              {["About", "Education", "Skills", "Services", "Clients", "Experience", "Projects"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item}
                </a>
              ))}
              
              {/* Theme Toggle Button */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* HIRE ME BUTTON WITH DROPDOWN */}
              <div className="relative">
                <button 
                  onClick={() => setHireMenuOpen(!hireMenuOpen)}
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 flex items-center gap-2"
                >
                  Hire Me <ChevronDown size={16} />
                </button>
                
                {hireMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 py-2 animate-in fade-in slide-in-from-top-2">
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="block px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center gap-2"
                    >
                      <Phone size={16} /> Call Me
                    </a>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="block px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center gap-2"
                    >
                      <Mail size={16} /> Send Email
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-4 md:hidden">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="text-slate-900 dark:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-lg p-6 flex flex-col gap-4 md:hidden">
               {["About", "Education", "Skills", "Services", "Clients", "Experience", "Projects"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-600 dark:text-slate-300"
                >
                  {item}
                </a>
              ))}
              <hr className="border-slate-100 dark:border-slate-700 my-2" />
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 text-lg font-medium text-blue-600 dark:text-blue-400">
                <Phone size={20} /> Call Now
              </a>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-lg font-medium text-blue-600 dark:text-blue-400">
                <Mail size={20} /> Email Me
              </a>
            </div>
          )}
        </nav>

        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center justify-center pt-20 relative px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
          {/* Abstract Background Shapes Container */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/3 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50 dark:bg-indigo-900/20 rounded-full blur-3xl -z-10 opacity-60 -translate-x-1/4 translate-y-1/4"></div>
          </div>
          
          <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className={`transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold mb-6">
                👋 Available for Opportunities
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                Hello, I'm <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  {personalInfo.name}
                </span>
              </h1>
              
              <h2 className="text-lg md:text-xl font-bold text-slate-500 dark:text-slate-400 mb-8 leading-normal">
                {personalInfo.role}
              </h2>
              
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-10 leading-relaxed max-w-lg">
                {personalInfo.about}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <button 
                    onClick={() => setHeroContactOpen(!heroContactOpen)} 
                    className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition shadow-xl shadow-slate-900/10 w-full sm:w-auto"
                  >
                    Contact Me <ChevronDown size={20} />
                  </button>
                  
                  {heroContactOpen && (
                    <div className="absolute left-0 mt-2 w-full sm:w-64 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 py-2 animate-in fade-in slide-in-from-top-2 z-20 text-left">
                      <a 
                        href={`tel:${personalInfo.phone}`}
                        className="block px-4 py-3 text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center gap-3"
                      >
                        <Phone size={18} className="text-blue-600 dark:text-blue-400 shrink-0" /> 
                        <div className="overflow-hidden">
                          <span className="block text-xs text-slate-400 font-bold uppercase">Call Me</span>
                          <span className="font-medium truncate">{personalInfo.phone}</span>
                        </div>
                      </a>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="block px-4 py-3 text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center gap-3 border-t border-slate-50 dark:border-slate-700"
                      >
                        <Mail size={18} className="text-blue-600 dark:text-blue-400 shrink-0" />
                        <div className="overflow-hidden">
                          <span className="block text-xs text-slate-400 font-bold uppercase">Email Me</span>
                          <span className="font-medium truncate">Send an Email</span>
                        </div>
                      </a>
                    </div>
                  )}
                </div>

                <button className="flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition bg-white dark:bg-slate-800 w-full sm:w-auto">
                  Download Resume <Download size={20} />
                </button>
              </div>
            </div>
            
            {/* Decorative Code/Image Block */}
            <div className={`hidden md:block transition-all duration-1000 delay-300 transform ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
               <div className="relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 opacity-10"></div>
                  <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700">
                     <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        <span className="ml-2 text-xs text-slate-400 font-mono">developer_profile.json</span>
                     </div>
                     <div className="space-y-3 font-mono text-sm">
                        <div className="text-slate-500 dark:text-slate-400"><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">candidate</span> = {'{'}</div>
                        <div className="pl-4 text-slate-600 dark:text-slate-300">name: <span className="text-green-600 dark:text-green-400">"{personalInfo.name}"</span>,</div>
                        <div className="pl-4 text-slate-600 dark:text-slate-300">certifications: [<span className="text-green-600 dark:text-green-400">"Java"</span>, <span className="text-green-600 dark:text-green-400">"SQL"</span>],</div>
                        <div className="pl-4 text-slate-600 dark:text-slate-300">focus: <span className="text-green-600 dark:text-green-400">"Development & Tech Ops"</span>,</div>
                        <div className="pl-4 text-slate-600 dark:text-slate-300">status: <span className="text-green-600 dark:text-green-400">"Open to Work"</span></div>
                        <div className="text-slate-500 dark:text-slate-400">{'}'};</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* NEW ABOUT SECTION */}
        <section id="about" className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300">
           <div className="max-w-6xl mx-auto px-6">
              <RevealOnScroll>
                 <div className="mb-16">
                    <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">About Me</span>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2">My Journey & Goals</h2>
                 </div>
              </RevealOnScroll>

              <div className="grid md:grid-cols-12 gap-12">
                 <div className="md:col-span-7 space-y-6">
                    <RevealOnScroll delay={100}>
                       <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                          As a 2023 Software Engineering graduate, I have spent the last year bridging the gap between theoretical concepts and real-world application. My journey began with a strong foundation in core development, solidified by professional certifications in Java and SQL, and honed during a hands-on internship.
                       </p>
                    </RevealOnScroll>
                    <RevealOnScroll delay={200}>
                       <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                          Currently, I operate as a freelancer, a role that has taught me adaptability and self-discipline. However, my primary goal is to join a structured organization where I can contribute and grow.
                       </p>
                    </RevealOnScroll>
                    <RevealOnScroll delay={300}>
                       <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 mt-6">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                             <Target className="text-blue-600 dark:text-blue-400" /> What I bring to the table:
                          </h3>
                          <ul className="space-y-4">
                             <li className="flex gap-3">
                                <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                                <div>
                                   <span className="font-bold text-slate-800 dark:text-slate-200">Strong Technical Foundation:</span>
                                   <p className="text-slate-600 dark:text-slate-400">Certified skills in Java and SQL ecosystems, with practical project experience.</p>
                                </div>
                             </li>
                             <li className="flex gap-3">
                                <Layers className="text-purple-500 shrink-0 mt-1" size={20} />
                                <div>
                                   <span className="font-bold text-slate-800 dark:text-slate-200">Versatility & Open Mindset:</span>
                                   <p className="text-slate-600 dark:text-slate-400">I am not limited to a single domain. I am open to opportunities across the technology spectrum—whether in software development, testing/QA, database management, or technical support.</p>
                                </div>
                             </li>
                             <li className="flex gap-3">
                                <BookOpen className="text-blue-500 shrink-0 mt-1" size={20} />
                                <div>
                                   <span className="font-bold text-slate-800 dark:text-slate-200">Eagerness to Learn:</span>
                                   <p className="text-slate-600 dark:text-slate-400">I understand the value of mentorship. I am looking for a role where I can work under the guidance of experienced professionals or undergo training to master new technologies.</p>
                                </div>
                             </li>
                          </ul>
                       </div>
                    </RevealOnScroll>
                    <RevealOnScroll delay={400}>
                       <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium italic border-l-4 border-blue-600 pl-4">
                          "I am passionate about technology and ready to work hard. I am seeking an entry-level position where I can apply my skills, follow established best practices, and develop a long-term career."
                       </p>
                    </RevealOnScroll>
                 </div>

                 {/* Right Side Stats/Visuals */}
                 <div className="md:col-span-5 flex flex-col gap-6">
                    <RevealOnScroll delay={200}>
                       <div className="bg-blue-600 dark:bg-blue-700 text-white p-8 rounded-2xl shadow-xl shadow-blue-600/20">
                          <div className="text-5xl font-bold mb-2">2023</div>
                          <div className="text-blue-100 font-medium text-lg">Graduation Year</div>
                          <div className="mt-6 pt-6 border-t border-blue-500/50 flex flex-col gap-2">
                             <div className="flex items-center gap-2">
                                <Award size={20} /> <span>Java Certified</span>
                             </div>
                             <div className="flex items-center gap-2">
                                <Database size={20} /> <span>SQL Certified</span>
                             </div>
                          </div>
                       </div>
                    </RevealOnScroll>
                    <RevealOnScroll delay={300}>
                       <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                          <h4 className="font-bold text-slate-900 dark:text-white mb-4">Core Competencies</h4>
                          <div className="flex flex-wrap gap-2">
                             {["Software Dev", "Technical Support", "QA / Testing", "Data Analytics", "Freelancing"].map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium">
                                   {tag}
                                </span>
                             ))}
                          </div>
                       </div>
                    </RevealOnScroll>
                 </div>
              </div>
           </div>
        </section>

        {/* NEW EDUCATION SECTION */}
        <section id="education" className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-6">
            <RevealOnScroll>
              <div className="mb-16 text-center">
                <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">Academic Background</span>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2">Education</h2>
              </div>
            </RevealOnScroll>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <RevealOnScroll key={index} delay={index * 100}>
                  <div className="flex flex-col md:flex-row gap-6 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all">
                    <div className="shrink-0">
                      <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <GraduationCap size={32} />
                      </div>
                    </div>
                    <div className="grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                        <span className="text-sm font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full w-fit mb-2 md:mb-0">{edu.period}</span>
                      </div>
                      <div className="text-blue-600 dark:text-blue-400 font-medium mb-4">{edu.school} • {edu.location}</div>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{edu.details}</p>
                      
                      {/* Projects or Achievements inside Education */}
                      <div className="space-y-2 mb-4">
                        {edu.projects.map((proj, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                             <Code size={14} className="text-blue-400" /> {proj}
                          </div>
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-2 text-sm font-bold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-md border border-green-100 dark:border-green-800">
                        <Award size={16} />
                        {edu.score}
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6">
            <RevealOnScroll>
              <div className="mb-16 text-center">
                <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">What I Know</span>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2">Technical Expertise</h2>
                <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"></div>
              </div>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <RevealOnScroll key={index} delay={index * 100}>
                  <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 h-full group">
                    <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                      {React.cloneElement(skill.icon, { className: "w-7 h-7" })}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{skill.name}</h3>
                    <ul className="space-y-2">
                      {skill.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6">
            <RevealOnScroll>
               <div className="mb-16">
                <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">Services</span>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2">How I Can Help</h2>
              </div>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <RevealOnScroll key={index} delay={index * 100}>
                  <div className="flex gap-6 p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-700">
                    <div className="shrink-0">
                       <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                          {React.cloneElement(service.icon, { className: "w-6 h-6" })}
                       </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* RESTORED BUSINESS SOLUTIONS / CLIENTS SECTION */}
        <section id="clients" className="py-24 bg-blue-50 dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6">
            <RevealOnScroll>
              <div className="mb-16 text-center">
                <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">Client Success</span>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2">Business Solutions Delivered</h2>
                <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">
                  Real-world software engineered to solve specific business problems in Nagpur and Vidarbha.
                </p>
              </div>
            </RevealOnScroll>

            {/* Changed grid to support 3 columns on large screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessSolutions.map((sol, index) => (
                <RevealOnScroll key={index} delay={index * 100}>
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700 h-full flex flex-col">
                    
                    {/* Title & Client Type */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg shrink-0">
                        <TrendingUp size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white leading-tight text-lg">{sol.title}</h4>
                        <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide font-semibold">{sol.clientType}</span>
                      </div>
                    </div>

                    {/* Client Details Block */}
                    <div className="mb-6 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700 text-sm">
                      <div className="flex items-center gap-2 mb-1 text-slate-900 dark:text-slate-200 font-medium">
                        <Users size={16} className="text-blue-500"/> {sol.clientName}
                      </div>
                      <div className="flex items-center gap-2 mb-1 text-slate-600 dark:text-slate-400">
                        <Globe size={16} className="text-blue-500"/> {sol.location}
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <Phone size={16} className="text-blue-500"/> {sol.contact}
                      </div>
                    </div>

                    {/* Impact & Description */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-bold text-sm mb-3 bg-green-50 dark:bg-green-900/30 px-3 py-1.5 rounded-full w-fit">
                        <CheckCircle size={14} />
                        {sol.impact}
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {sol.description}
                      </p>
                    </div>

                    {/* Footer: Tags & Demo Link */}
                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700 flex flex-col gap-4">
                      <div className="flex flex-wrap gap-2">
                        {sol.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-300 text-xs font-semibold rounded border border-slate-200 dark:border-slate-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a href={sol.videoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition">
                        <PlayCircle size={18} /> Watch Demo on YouTube
                      </a>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* SOFTWARE REVIEWS SECTION (UPDATED) */}
        <section id="reviews" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6">
            <RevealOnScroll>
              <div className="mb-16 text-center">
                <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">Client Software Reviews</span>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2">Feedback on Deliverables</h2>
              </div>
            </RevealOnScroll>

            {/* Updated grid to lg:grid-cols-4 to fit 4 reviews perfectly */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softwareReviews.map((review, index) => (
                <RevealOnScroll key={index} delay={index * 100}>
                  <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 relative h-full flex flex-col hover:border-blue-200 dark:hover:border-blue-500 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-blue-600 dark:text-blue-400">
                        <Quote size={24} />
                      </div>
                      <div className="flex gap-0.5 text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-2 uppercase tracking-wide flex items-center gap-2">
                       <Code size={14} /> {review.project}
                    </h4>

                    <p className="text-slate-600 dark:text-slate-300 text-sm italic mb-6 leading-relaxed flex-grow">
                      "{review.content}"
                    </p>

                    <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-auto">
                      <div className="flex items-center gap-2 mb-3">
                         <CheckCircle size={14} className="text-green-600 dark:text-green-400" />
                         <span className="text-xs font-bold text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full">{review.metrics}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold text-xs">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-xs">{review.name}</h4>
                          <p className="text-slate-500 dark:text-slate-400 text-[10px]">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-6">
            <RevealOnScroll>
              <div className="mb-16 text-center">
                <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">Career Path</span>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2">Work Experience</h2>
              </div>
            </RevealOnScroll>

            <div className="space-y-12">
              {experience.map((job, index) => (
                <RevealOnScroll key={index} delay={index * 100}>
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                      <div>
                         <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                           {job.role}
                         </h3>
                         <div className="text-blue-600 dark:text-blue-400 font-semibold text-lg flex items-center gap-2 mt-1">
                            <Briefcase size={18} /> {job.company}
                         </div>
                      </div>
                      <div className="text-right md:text-right">
                         <span className="inline-block px-4 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-bold">
                          {job.period}
                        </span>
                        <div className="text-slate-400 text-sm mt-2">{job.location}</div>
                      </div>
                    </div>
                    
                    <p className="text-slate-700 dark:text-slate-300 mb-6 italic border-l-4 border-slate-200 dark:border-slate-700 pl-4 py-2 bg-slate-50/50 dark:bg-slate-800/50 rounded-r-lg">
                      {job.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {job.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span>
                          <span className="leading-relaxed">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* PUBLICATIONS SECTION */}
        <section id="publications" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
           <div className="max-w-6xl mx-auto px-6">
            <RevealOnScroll>
              <div className="mb-12 flex items-center gap-3">
                <Award className="text-blue-600 dark:text-blue-400 w-8 h-8" />
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Research & Publications</h2>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {publications.map((pub, index) => (
                <RevealOnScroll key={index} delay={index * 100}>
                  <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500 transition-colors h-full flex flex-col">
                     <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-3 uppercase tracking-wide">{pub.date}</div>
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                       {pub.title}
                     </h3>
                     <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 italic">
                        {pub.authors}
                     </p>
                     <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{pub.institution || "Research Publication"}</span>
                        {pub.link !== "#" && (
                          <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center gap-1">
                             Read Paper <ExternalLink size={14} />
                          </a>
                        )}
                     </div>
                  </div>
                </RevealOnScroll>
               ))}
            </div>
           </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6">
            <RevealOnScroll>
              <div className="mb-16 text-center">
                 <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm">Portfolio</span>
                 <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2">Featured Projects</h2>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <RevealOnScroll key={index} delay={index * 100}>
                  <div className="group bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col h-full">
                    <div className="flex justify-end items-start mb-6">
                      <div className="flex gap-4">
                        <a href={project.links.code} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full"><Github size={20} /></a>
                        <a href={project.links.demo} className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-full"><ExternalLink size={20} /></a>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-6 mt-auto border-t border-slate-200 dark:border-slate-700">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium rounded-md border border-slate-200 dark:border-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 bg-slate-900 dark:bg-black text-slate-400 text-sm transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
               <h2 className="text-2xl font-bold text-white mb-2">Anurag Chavhan</h2>
               <p>Software Engineer</p>
            </div>
            
            <div className="flex gap-6">
              <a href={personalInfo.github} className="hover:text-white transition-colors bg-slate-800 dark:bg-slate-900 p-3 rounded-full"><Github size={20} /></a>
              <a href={personalInfo.linkedin} className="hover:text-white transition-colors bg-slate-800 dark:bg-slate-900 p-3 rounded-full"><Linkedin size={20} /></a>
              <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors bg-slate-800 dark:bg-slate-900 p-3 rounded-full"><Mail size={20} /></a>
            </div>
          </div>
          <div className="text-center mt-12 pt-8 border-t border-slate-800 dark:border-slate-900 opacity-50">
            <p>&copy; {new Date().getFullYear()} Anurag Chavhan. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;