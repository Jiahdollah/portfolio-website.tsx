import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Moon, Sun } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Built a full-stack e-commerce platform using React, Node.js, and MongoDB',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'Developed a Kanban-style task management application with real-time updates',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Created a weather dashboard that displays forecast data using external APIs',
      tech: ['JavaScript', 'REST API', 'Chart.js'],
      github: '#',
      live: '#'
    }
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Java', 'SQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Jest', 'CI/CD'] }
  ];

  const experience = [
    {
      company: 'Tech Corp',
      position: 'Senior Software Engineer',
      period: '2021 - Present',
      description: 'Led development of microservices architecture, mentored junior developers'
    },
    {
      company: 'StartUp Inc',
      position: 'Software Engineer',
      period: '2019 - 2021',
      description: 'Developed and maintained full-stack web applications'
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setTimeout(() => setFormStatus(''), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>John Doe</h1>
            <div className="flex space-x-4 items-center">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-600'}`}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}>
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <p className={`mt-2 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Full Stack Software Engineer</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {['projects', 'skills', 'experience', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-4 text-sm font-medium ${
                  activeTab === tab
                    ? isDarkMode
                      ? 'border-b-2 border-blue-400 text-blue-400'
                      : 'border-b-2 border-blue-500 text-blue-600'
                    : isDarkMode
                    ? 'text-gray-400 hover:text-gray-200'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Projects Section */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow`}>
                <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs font-medium rounded ${
                        isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex space-x-4">
                  <a href={project.github} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}>
                    <Github className="h-5 w-5" />
                  </a>
                  <a href={project.live} className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}>
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills Section */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow`}>
                <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{skillGroup.category}</h3>
                <ul className="mt-4 space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Experience Section */}
        {activeTab === 'experience' && (
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.company} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow`}>
                <h3 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{job.position}</h3>
                <div className="mt-1 flex justify-between items-center">
                  <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{job.company}</span>
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>{job.period}</span>
                </div>
                <p className={`mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{job.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Contact Form Section */}
        {activeTab === 'contact' && (
          <div className={`max-w-2xl mx-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow`}>
            <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Get in Touch</h2>
            
            {formStatus === 'success' && (
              <Alert className="mb-6 bg-green-100 border-green-500">
                <AlertDescription className="text-green-800">
                  Message sent successfully! I'll get back to you soon.
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`mt-1 block w-full rounded-md shadow-sm ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`mt-1 block w-full rounded-md shadow-sm ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`mt-1 block w-full rounded-md shadow-sm ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={`mt-1 block w-full rounded-md shadow-sm ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                Send Message
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default Portfolio;
