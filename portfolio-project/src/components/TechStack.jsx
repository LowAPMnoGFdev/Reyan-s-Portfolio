import React from 'react'

const TechStack = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg opacity-0" style={{ 
      animation: 'fadeIn 0.8s ease-out forwards',
      animationDelay: '1.6s'
    }}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2 opacity-0" style={{
        animation: 'fadeIn 0.5s ease-out forwards',
        animationDelay: '1.8s'
      }}>
        Tech Stack
      </h2>
      <div className="space-y-4">
        <div className="opacity-0" style={{
          animation: 'fadeIn 0.5s ease-out forwards',
          animationDelay: '2.0s'
        }}>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {['HTML', 'CSS', 'TAILWIND', 'REACT', 'BOOTSTRAP'].map((tech, index) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="opacity-0" style={{
          animation: 'fadeIn 0.5s ease-out forwards',
          animationDelay: '2.2s'
        }}>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {['PHP', 'DJANGO'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="opacity-0" style={{
          animation: 'fadeIn 0.5s ease-out forwards',
          animationDelay: '2.4s'
        }}>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Database</h3>
          <div className="flex flex-wrap gap-2">
            {['MYSQL', 'POSTGRESQL', 'FIREBASE'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="opacity-0" style={{
          animation: 'fadeIn 0.5s ease-out forwards',
          animationDelay: '2.6s'
        }}>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {['VSCODE', 'CANVA', 'GITHUB', 'GIT'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-700"
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

export default TechStack
