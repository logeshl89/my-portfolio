'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Code, Database, Wrench, Cpu, Brain, X, Trophy, Clock, CheckCircle, Award } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faBars } from '@fortawesome/free-solid-svg-icons'
import { TypeAnimation } from 'react-type-animation'

type Project = {
  icon: React.ElementType;
  title: string;
  description: string;
  github: string;
  image: string;
  details: string;
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const certificationsRef = useRef<HTMLDivElement>(null)
  const achievementsRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'about', ref: aboutRef },
        { id: 'education', ref: educationRef },
        { id: 'skills', ref: skillsRef },
        { id: 'projects', ref: projectsRef },
        { id: 'certifications', ref: certificationsRef },
        { id: 'achievements', ref: achievementsRef },
      ]

      const currentSection = sections.find(section => {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const [projects] = useState<Project[]>([
    {
      icon: 'title',
      title: "Smart_Computer_class_management_system",
      description: "The Smart Computer Class Management System streamlines student and staff addition, while automating certificate generation and tracking academic progress. It visualizes performance through detailed progress charts and key metrics.",
      github: "https://github.com/logeshl89/Smart_Computer_class_management_system",
      image: "https://private-user-images.githubusercontent.com/91780476/271244090-dfef1d00-e820-4098-859e-d7e4fb96b19d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzEzMzcxOTQsIm5iZiI6MTczMTMzNjg5NCwicGF0aCI6Ii85MTc4MDQ3Ni8yNzEyNDQwOTAtZGZlZjFkMDAtZTgyMC00MDk4LTg1OWUtZDdlNGZiOTZiMTlkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTExVDE0NTQ1NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU5MjY2ODBlNTYxNzZlNTk0MDMyM2ZjOGQwZjdlZDhlODA0MTQwYTg2NmIxNzRiMTQ1ZmZkYWNmMmU2ZTA3N2UmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.PNZ-f5QecGpoTtn8haIQ6YWfRf_kShU0ZFvFnlAlT9s",
      details: "The Smart Computer Class Management System offers an efficient platform for managing student and staff information, ensuring seamless addition of new students and staff members with relevant details. The system supports automated certificate generation for students upon course completion, providing a digital version for easy access. It also tracks the academic progress of students, displaying detailed progress charts to visualize performance over time. The dashboard offers an overview of key metrics, including course completion rates, attendance, and exam results, ensuring that both students and staff stay informed about their progress."
    },
    {
      icon: 'title',
      title: "\"IEEE Membership Portal: A Comprehensive Platform for Resources, Collaboration, and Innovation\"",
      description: "The IEEE website serves as a hub for members to access resources, events, and publications, promoting collaboration and innovation.",
      github: "https://github.com/logeshl89/IETE_WEBSITE_MASTER",
      image: "https://private-user-images.githubusercontent.com/91780476/265423109-0c960ab2-9aa9-4501-be7b-fc78c5099814.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzEzMzY1NjIsIm5iZiI6MTczMTMzNjI2MiwicGF0aCI6Ii85MTc4MDQ3Ni8yNjU0MjMxMDktMGM5NjBhYjItOWFhOS00NTAxLWJlN2ItZmM3OGM1MDk5ODE0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTExVDE0NDQyMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWY3ZTExNzA5MGQwMzMyMzViNzYxMGQwOGUzNmNkYThkYzM3MWViNDAyNGQ2OTE3MjI1NDdiMzM0Y2IxZjA1ZjgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.kmENEmxeled9r97IlVs7Vh8B2TTGguFpmTnIFiohOcw",
      details: "I have created a website for IEEE that serves as a comprehensive platform for members to access various resources, including technical papers, events, and professional development tools. The website is designed to facilitate collaboration and innovation within the IEEE community, offering easy navigation for members to stay informed and engaged with the latest industry trends and opportunities."
    },
    {
      icon: 'title',
      title: "Smart Billing System",
      description: "The Smart Billing System is a custom solution developed to enhance the billing and checkout process in retail shops. This system automates item scanning, calculates totals, applies discounts, and generates receipts, streamlining the checkout experience for both customers and employees. Integrated with the store’s inventory system, it updates stock levels in real-time with each transaction",
      github: "https://github.com/logeshl89/Smart_Billing_System",
      image: "https://private-user-images.githubusercontent.com/91780476/385320686-25ad1813-1acf-4e4e-b437-216c7e5d8732.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzE0MjE1MDAsIm5iZiI6MTczMTQyMTIwMCwicGF0aCI6Ii85MTc4MDQ3Ni8zODUzMjA2ODYtMjVhZDE4MTMtMWFjZi00ZTRlLWI0MzctMjE2YzdlNWQ4NzMyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTEyVDE0MjAwMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWMwZGI1OTQyOWVhMjgwN2M0NDRmYTFmYmJiYmMxZGY5M2I1M2RlMDhjMWY4NmI4NWViZDk3ZjVjMzI1OWZkYmMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.0dwgA--HHWthtFvZlAa1tzgKzsX7JYf332igUEMP-YM",
      details: "Streamlines the billing process with automated item scanning, pricing, and receipt generation.\n" +
          "Integrates with the store’s inventory to update stock levels in real-time after each transaction.\n" +
          "Provides sales analytics and insights, aiding in inventory management and demand forecasting.\n" +
          "Built with user-friendly features for both customers and store employees, reducing checkout time and errors."
    },
    {
      icon: 'title',
      title: "Production and Inventory Management",
      description: "Designed integrated web portals for production management and inventory tracking.",
      github: "https://github.com/logeshl89/Production-Management-System",
      image: "https://private-user-images.githubusercontent.com/91780476/385323811-6cab049b-d4b9-433e-a405-008f0192d97f.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzE0MjIwMDksIm5iZiI6MTczMTQyMTcwOSwicGF0aCI6Ii85MTc4MDQ3Ni8zODUzMjM4MTEtNmNhYjA0OWItZDRiOS00MzNlLWE0MDUtMDA4ZjAxOTJkOTdmLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTEyVDE0MjgyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFkYjFmZDNmOWYwYTQzMTViM2ExMDE0YTBhODczMTUxMTUyN2JjNjgxMGMwMDYyN2E1ODVkYWNhMTQ4NWYzODMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.YULoa7pMKg3Vkq1MN9S85RaRVi4YPUprHIRMgn_aKFg",
      details: "This system provides real-time tracking of inventory levels, automates reorder processes, and generates comprehensive reports. It is designed to optimize production workflows and reduce operational costs."
    },
    {
      icon: 'title',
      title: " Amazon Product Listing Converter",
      description: "A tool designed to convert Instagram and other social media links into Amazon product listings, streamlining the product listing process.",
      github: "https://github.com/logeshl89/Amazon-Product-Listing-Converter",
      image: "https://private-user-images.githubusercontent.com/91780476/385317759-39add41d-1479-4949-af04-e73f5093116b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzE0MjExMzMsIm5iZiI6MTczMTQyMDgzMywicGF0aCI6Ii85MTc4MDQ3Ni8zODUzMTc3NTktMzlhZGQ0MWQtMTQ3OS00OTQ5LWFmMDQtZTczZjUwOTMxMTZiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTEyVDE0MTM1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZlMzg3YzNhZWY2NDg1ODYzYmRkM2I5NjQxM2QzMTVjMDZhMWVhZWZmOGUyNTNjYjBjNDcwNWQ1MmM1ZjkxNTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.c41eBT-fgeTY4Nymh3e0xU6TpHurUEyt5TD4mpkYoKY",
      details: "The Amazon Product Listing Converter is a tool that automates the process of transforming social media content, such as Instagram links, into formatted Amazon product listings. Designed for sellers who frequently promote products on platforms like Instagram, this tool extracts key details—images, product descriptions, and pricing—and converts them into a format compliant with Amazon's listing requirements. By simplifying the listing process, the converter saves time and ensures consistency across platforms, allowing sellers to expand their reach from social media to Amazon with ease and accuracy. This solution is ideal for businesses looking to streamline their product listing process while minimizing manual entry and potential errors."
    },
    {
      icon: 'title',
      title: "E-commerce Website",
      description: "Developed a full-fledged e-commerce website for a crackers business.",
      github: "https://iswaryacrackers.in/",
      image: "D:\\Portfoli\\my-porfolio\\components\\img_1.png",
      details: "Built with Spring Boot and React, this e-commerce platform features secure payment integration, real-time order tracking, and a responsive design. It includes an admin panel for easy product and order management."
    }
  ]);

  const educationData = [
    {
      school: "Jansons Insitute of Technology",
      degree: "Bachelor of Engineering (BE)",
      specialization: "Electronics and Communications",
      period: "2021 - 2025",
    },
    {
      school: "Kathiravan matric higher secondary school",
      degree: "Higher Secondary Course",
      specialization: "Biology/Maths",
      period: "2019 - 2020",
    }
  ]

  const milestones = [
    { icon: Clock, value: "7876", label: "HOURS WORKED" },
    { icon: CheckCircle, value: "24", label: "SUCCESSFUL PROJECTS" },
    { icon: Trophy, value: "16", label: "AWARDS WON" },
    { icon: Code, value: "86", label: "BLOG POSTS" }
  ]

  return (
      <div className="min-h-screen bg-[#0A0A0A] text-[#FFFFFF]">
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] bg-opacity-90 backdrop-blur-sm">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-[#F47400]">Logesh M</h1>
              <button
                  className="md:hidden text-[#FFFFFF]"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <FontAwesomeIcon icon={faX}/> : <FontAwesomeIcon icon={faBars} />}
              </button>
              <ul className="hidden md:flex space-x-6">
                {['About', 'Education', 'Skills', 'Projects', 'Certifications', 'Achievements'].map((item) => (
                    <li key={item}>
                      <button
                          onClick={() => scrollTo(item.toLowerCase())}
                          className={`text-sm font-medium transition-colors hover:text-[#F47400] ${
                              activeSection === item.toLowerCase() ? 'text-[#F47400]' : 'text-[#FFFFFF]'
                          }`}
                      >
                        {item}
                      </button>
                    </li>
                ))}
              </ul>
            </div>
          </nav>
        </header>

        <AnimatePresence>
          {isMobileMenuOpen && (
              <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="md:hidden fixed top-16 left-0 right-0 bg-[#0A0A0A] bg-opacity-90 backdrop-blur-sm z-40"
              >
                <ul className="py-4">
                  {['About', 'Education', 'Skills', 'Projects', 'Certifications', 'Achievements'].map((item) => (
                      <li key={item} className="px-6 py-2">
                        <button
                            onClick={() => scrollTo(item.toLowerCase())}
                            className={`text-sm font-medium transition-colors hover:text-[#F47400] ${
                                activeSection === item.toLowerCase() ? 'text-[#F47400]' : 'text-[#FFFFFF]'
                            }`}
                        >
                          {item}
                        </button>
                      </li>
                  ))}
                </ul>
              </motion.div>
          )}
        </AnimatePresence>

        <main className="container mx-auto px-6 pt-24 pb-12">
          <motion.section
              id="about"
              ref={aboutRef}
              className="min-h-screen flex items-center justify-center mb-20"
              style={{ opacity, scale }}
          >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
              <h1 className="text-4xl font-bold mb-4 text-[#F47400]">Logesh M</h1>
              <p className="text-xl text-[#FFFFFF] mb-6">Electronics and Communication Engineering Student</p>
              <div className="text-[#FFFFFF] text-lg mb-8 h-20">
                <TypeAnimation
                    sequence={[
                      'I am enthusiastic about innovative problem-solving.',
                      1000,
                      'I am committed to using AI for impactful solutions.',
                      1000,
                      'I am fascinated by IoT and real-time data monitoring.',
                      1000,
                      'I am driven to advance healthcare through technology.',
                      1000,
                      'I am excited to contribute to sustainability with tech.',
                      1000,

                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
              </div>
              <div className="flex justify-center space-x-4">
                <a
                    href="https://www.linkedin.com/in/logesh-m-a9425821a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F47400] hover:bg-[#FFFFFF] hover:text-[#F47400] text-[#FFFFFF] font-bold py-2 px-4 rounded inline-flex items-center transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
                <a
                    href="https://github.com/logeshl89"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FFFFFF] hover:bg-[#F47400] text-[#0A0A0A] hover:text-[#FFFFFF] font-bold py-2 px-4 rounded inline-flex items-center transition-colors"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </div>
            </motion.div>
          </motion.section>

          <section id="education" ref={educationRef} className="mb-10 pt-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#F47400]">Education</h2>
            <div className="max-w-3xl mx-auto">
              {educationData.map((edu, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="relative pl-8 pb-8 border-l-2 border-[#F47400] last:pb-0"
                  >
                    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-[#F47400] rounded-full" />
                    <div className="bg-[#FFFFFF] bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all">
                      <h3 className="text-xl font-bold text-[#F47400]">{edu.school}</h3>
                      <p className="text-lg text-[#FFFFFF]">{edu.degree}</p>
                      <p className="text-[#FFFFFF]">Specialization: {edu.specialization}</p>
                      <p className="text-sm text-[#FFFFFF]">{edu.period}</p>
                    </div>
                  </motion.div>
              ))}
            </div>
          </section>

          <section id="skills" ref={skillsRef} className="mb-20 pt-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#F47400]">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Code, title: 'Programming', items: ['Spring Boot', 'Java','Spring data JPA','Spring Security','Spring Core','Spring','Python', 'Embedded C', 'MATLAB',  'JavaFX'] },
                  { icon: Database, title: 'Web & Database', items: ['React','tailwind css', 'Next js', 'HTML','Mongodb', 'MySQL'] },
                { icon: Wrench, title: 'Tools & Platforms', items: ['Git','Github','Docker','Intellij','Raspberry Pi', 'Mission Planner', 'Ardupilot', 'iText'] },
                { icon: Cpu, title: 'Embedded Systems', items: ['ATmega16', 'WINAVR', 'PIC microcontroller'] },
                { icon: Brain, title: 'Machine Learning', items: ['Target classification', 'Predictive modeling', 'ML in MATLAB','YOLO'] },
              ].map((skill, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="bg-[#FFFFFF] bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-opacity-20 transition-all"
                  >
                    <skill.icon className="w-12 h-12 mb-4 text-[#F47400]" />
                    <h3 className="text-xl font-semibold mb-2 text-[#FFFFFF]">{skill.title}</h3>
                    <ul className="text-[#FFFFFF]">
                      {skill.items.map((item, i) => (
                          <li key={i} className="mb-1">{item}</li>
                      ))}
                    </ul>
                  </motion.div>
              ))}
            </div>
          </section>

          <section id="projects" ref={projectsRef} className="mb-20 pt-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#F47400]">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="bg-[#FFFFFF] bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-opacity-20 transition-all cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative h-40 mb-4 overflow-hidden rounded-md">
                      <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <p className="text-[#FFFFFF] text-lg font-semibold">Click for details</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <h3 className="text-xl font-semibold text-[#FFFFFF]">{project.title}</h3>
                    </div>
                    <p className="text-[#FFFFFF] mb-4">{project.description}</p>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#F47400] hover:text-[#FFFFFF] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5 mr-2" />
                      View on GitHub
                    </a>
                  </motion.div>
              ))}
            </div>
          </section>

          <section id="milestones" className="mb-20 pt-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#F47400]">Milestones</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[#FFFFFF] bg-opacity-10 p-6 rounded-lg text-center hover:bg-opacity-20 transition-all"
                  >
                    <milestone.icon className="w-8 h-8 mx-auto mb-4 text-[#F47400]" />
                    <h3 className="text-3xl font-bold text-[#FFFFFF] mb-2">{milestone.value}</h3>
                    <p className="text-sm text-[#FFFFFF]">{milestone.label}</p>
                  </motion.div>
              ))}
            </div>
          </section>

          <section id="certifications" ref={certificationsRef} className="mb-20 pt-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#F47400]">Certifications</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Full stack Java Developer By the wipro",
                "Responsive Web Design Certification - freeCodeCamp",
                "Oracle Certified Professional, Java SE6 Programmer",
                "Introduction to Machine Learning",
                "IoT Edge Computing and IoT Analytics",
                "Blockchain 101",
                "Master Spring 6, Spring Boot 3, REST, JPA, Hibernate",
                "Honor Code Certified in Introduction to Linux (offered by LinuxFoundationX)",
                "Junit 5 Spring boot Java Microservices 100% Coverage"

              ].map((cert, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[#FFFFFF] bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all"
                  >
                    <Award className="w-6 h-6 text-[#F47400] mb-2" />
                    <p className="text-[#FFFFFF]">{cert}</p>
                  </motion.div>
              ))}
            </div>
          </section>

          <section id="achievements" ref={achievementsRef} className="mb-20 pt-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#F47400]">Competitions and Achievements</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Aerothon Finalist (2023)(2024)',
                  description: 'Selected for the final round with a focus on payload delivery and target recognition drone.',
                },
                {
                  title: 'Smart India Hackathon Participant (2024)',
                  description: 'Developing an IOP measuring device using AI, ML, and non-contact sensors to assist in glaucoma detection.',
                },
                {
                  title: 'Accenture Innovation Challenge 2024',
                  description: 'Developing a Generative AI solution that leverages new business models for sustainability and social governance.',
                },
                {
                  title: 'Smart Home Automation',
                  description: 'Developing a Generative AI solution that leverages new business models for sustainability and social governance.',
                },{
                  title: 'Open Innovation Contest on Generative AI (2024)',
                  description: 'Participated in a Generative AI contest focusing on developing solutions with practical applications and deadlines extending through November.',
                },
                {
                  title: 'Micro-Doppler Based Target Classification Project',
                  description: 'Developed an ML model using radar signatures to differentiate between drones and birds for advanced target classification applications.',
                },
                {
                  title: 'ATL Lab Mentor at Holy Rosary School',
                  description: 'Led weekly ATL lab sessions, guiding students through innovative projects and hands-on experiences with technology.',
                },
                {
                  title: 'PMKVY Drone Certification',
                  description: 'Certified in drone operations and technology through the PMKVY program, gaining skills in drone assembly and mission planning.',
                },
                {
                  title: 'Customized Glaucoma Detection Kit',
                  description: 'Developing a compact, cost-effective glaucoma detection device integrating AI and IoT for real-time monitoring, compatible with home use.',
                }


              ].map((achievement, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="bg-[#FFFFFF] bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-opacity-20 transition-all"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-[#F47400]">{achievement.title}</h3>
                    <p className="text-[#FFFFFF]">{achievement.description}</p>
                  </motion.div>
              ))}
            </div>
          </section>
        </main>

        <footer className="bg-[#0A0A0A] py-6">
          <div className="container mx-auto px-6 text-center text-[#FFFFFF]">
            <p>&copy; 2024 Logesh M. All rights reserved.</p>
          </div>
        </footer>

        <AnimatePresence>
          {selectedProject && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                  onClick={() => setSelectedProject(null)}
              >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-[#0A0A0A] rounded-lg p-6 max-w-2xl w-full relative"
                    onClick={(e) => e.stopPropagation()}
                >
                  <button
                      className="absolute top-2 right-2 text-[#FFFFFF] hover:text-[#F47400]"
                      onClick={() => setSelectedProject(null)}
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <h2 className="text-2xl font-bold mb-4 text-[#F47400]">{selectedProject.title}</h2>
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 object-cover rounded-md mb-4" />
                  <p className="text-[#FFFFFF] mb-4">{selectedProject.details}</p>
                  <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#F47400] hover:text-[#FFFFFF] transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View on GitHub
                  </a>
                </motion.div>
              </motion.div>
          )}
        </AnimatePresence>
      </div>
  )
}