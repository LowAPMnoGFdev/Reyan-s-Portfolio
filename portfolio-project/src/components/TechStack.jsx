import React from 'react'

const techColors = {
  // Frontend
  HTML: 'bg-orange-500 text-white',
  CSS: 'bg-blue-500 text-white',
  TAILWIND: 'bg-cyan-400 text-white',
  REACT: 'bg-blue-400 text-white',
  BOOTSTRAP: 'bg-purple-600 text-white',
  
  // Backend
  PHP: 'bg-indigo-600 text-white',
  DJANGO: 'bg-green-600 text-white',
  LARAVEL: 'bg-red-600 text-white',
  FLUTTER: 'bg-blue-400 text-white',
  
  // Database
  MYSQL: 'bg-blue-700 text-white',
  POSTGRESQL: 'bg-blue-600 text-white',
  FIREBASE: 'bg-yellow-500 text-white',
  
  // Tools
  VSCODE: 'bg-blue-500 text-white',
  CANVA: 'bg-purple-500 text-white',
  GITHUB: 'bg-gray-800 text-white',
  GIT: 'bg-red-500 text-white',
};

const TechStack = () => {
  return (    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg opacity-0 glow-container" style={{
      animation: 'fadeIn 0.8s ease-out forwards',
      animationDelay: '1.2s'
    }}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
        Tech Stack
      </h2>
      <div className="grid gap-6">
        <div className="opacity-0 glow-container p-4 rounded-lg" style={{
          animation: 'fadeIn 0.5s ease-out forwards',
          animationDelay: '2.0s'
        }}>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            {['HTML', 'CSS', 'TAILWIND', 'REACT', 'BOOTSTRAP'].map((tech, index) => (
              <span
                key={tech}
                className={`px-3 py-1 text-sm rounded-full transition-transform hover:scale-105 ${techColors[tech]}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="opacity-0 glow-container p-4 rounded-lg" style={{
          animation: 'fadeIn 0.5s ease-out forwards',
          animationDelay: '2.2s'
        }}>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Backend</h3>
          <div className="flex flex-wrap gap-2">
            {['PHP', 'DJANGO', 'LARAVEL', 'FLUTTER'].map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 text-sm rounded-full transition-transform hover:scale-105 ${techColors[tech]}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="opacity-0 glow-container p-4 rounded-lg" style={{
          animation: 'fadeIn 0.5s ease-out forwards',
          animationDelay: '2.4s'
        }}>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Database</h3>
          <div className="flex flex-wrap gap-2">
            {['MYSQL', 'POSTGRESQL', 'FIREBASE'].map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 text-sm rounded-full transition-transform hover:scale-105 ${techColors[tech]}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="opacity-0 glow-container p-4 rounded-lg" style={{
          animation: 'fadeIn 0.5s ease-out forwards',
          animationDelay: '2.6s'
        }}>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {['VSCODE', 'CANVA', 'GITHUB', 'GIT'].map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 text-sm rounded-full transition-transform hover:scale-105 ${techColors[tech]}`}
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
