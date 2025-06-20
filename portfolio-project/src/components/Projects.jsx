import React from 'react'

const techColors = {
  'Html/Css': 'bg-gradient-to-r from-orange-500 to-blue-500 text-white',
  'JavaScript': 'bg-yellow-400 text-white',
  'Python': 'bg-blue-500 text-white',
  'Django': 'bg-green-600 text-white',
  'Tailwind': 'bg-cyan-400 text-white',
  'React': 'bg-blue-400 text-white',
  'Firebase': 'bg-yellow-500 text-white',
  'Laravel': 'bg-red-600 text-white',
};

const Projects = () => {
  return (    <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-lg p-6 shadow-lg opacity-0 glow-container" style={{ 
      animation: 'fadeIn 0.6s ease-out forwards',
      animationDelay: '0.8s'
    }}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 opacity-0" style={{
        animation: 'fadeIn 0.4s ease-out forwards',
        animationDelay: '1s'
      }}>
        Projects
      </h2>
      <div className="grid gap-6">
        {/* First Project */}        <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 p-6 rounded-lg opacity-0 hover:shadow-2xl hover:bg-gradient-to-r hover:from-gray-100 hover:via-white hover:to-gray-100 transform hover:-translate-y-1 transition-all duration-300 glow-container" style={{
          animation: 'fadeIn 0.4s ease-out forwards',
          animationDelay: '1.2s'
        }}>
          <h3 className="text-xl font-semibold text-gray-700">Payroll System</h3>
          <p className="text-gray-600 mt-2">A secure, efficient payroll solution designed to streamline salary processing, tax calculations, and employee record-keeping.</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Html/Css', 'JavaScript', 'Python', 'Django'].map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 text-sm rounded-full transition-transform hover:scale-105 shadow-sm ${techColors[tech]}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Second Project */}        <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 p-6 rounded-lg opacity-0 hover:shadow-2xl hover:bg-gradient-to-r hover:from-gray-100 hover:via-white hover:to-gray-100 transform hover:-translate-y-1 transition-all duration-300 glow-container" style={{
          animation: 'fadeIn 0.4s ease-out forwards',
          animationDelay: '1.4s'
        }}>          <h3 className="text-xl font-semibold text-gray-700">3 in 1 System for International organization</h3>
          <p className="text-gray-600 mt-2">A comprehensive web platform featuring three integrated modules: Member Management for profile tracking and role-based access control, Learning Management System for course creation and progress monitoring, and Finance Auditing for transparent financial record-keeping and reporting.</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Laravel', 'React', 'Tailwind', 'Firebase'].map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 text-sm rounded-full transition-transform hover:scale-105 shadow-sm ${techColors[tech]}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
