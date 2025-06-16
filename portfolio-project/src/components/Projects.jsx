import React from 'react'

const Projects = () => {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-lg p-6 shadow-lg opacity-0" style={{ 
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
        {/* First Project */}
        <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 p-6 rounded-lg opacity-0 hover:shadow-2xl hover:bg-gradient-to-r hover:from-gray-100 hover:via-white hover:to-gray-100 transform hover:-translate-y-1 transition-all duration-300" style={{
          animation: 'fadeIn 0.4s ease-out forwards',
          animationDelay: '1.2s'
        }}>
          <h3 className="text-xl font-semibold text-gray-700">Payroll System</h3>
          <p className="text-gray-600 mt-2">A secure, efficient payroll solution designed to streamline salary processing, tax calculations, and employee record-keeping.</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-700">HTML/CSS</span>
            <span className="px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-700">JavaScript</span>
            <span className="px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-700">Python</span>
            <span className="px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-700">Django</span>
          </div>
        </div>

        {/* Second Project */}
        <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 p-6 rounded-lg opacity-0 hover:shadow-2xl hover:bg-gradient-to-r hover:from-gray-100 hover:via-white hover:to-gray-100 transform hover:-translate-y-1 transition-all duration-300" style={{
          animation: 'fadeIn 0.4s ease-out forwards',
          animationDelay: '1.4s'
        }}>
          <h3 className="text-xl font-semibold text-gray-700">3 in 1 System for International organization</h3>
          <p className="text-gray-600 mt-2">A secure, efficient payroll solution designed to streamline salary processing, tax calculations, and employee record-keeping.</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-700">HTML/CSS</span>
            <span className="px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-700">JavaScript</span>
            <span className="px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-700">Python</span>
            <span className="px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-700">Django</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
