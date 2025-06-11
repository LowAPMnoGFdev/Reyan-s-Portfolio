const Experience = () => {
  const experiences = [
    {
      title: "First Web Developer Experience",
      period: "Aug 2023",
      description: "Introductory of my coding journey with basic bootstrap and php."
    },
    {
      title: "First JavaScript project",
      period: "Nov 2023",
      description: "Scheduling system for mobile development with Flutter framework."
    },
    {
      title: "Freelance Web Developer",
      period: "Dec 2024 - Jun 2025",
      description: "3 in 1 system for an international organization."
    },
    {
      title: "Django Project",
      period: "Dec 2024 - Jun 2025",
      description: "Full stack for payroll system administration side"
    },
  ]

  return (    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-5 shadow-lg w-full h-full opacity-0" style={{ 
        animation: 'fadeIn 0.8s ease-out forwards',
        animationDelay: '0.9s'
      }}>
      <h2 className="text-xl font-medium text-gray-900 mb-4">Experiences</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="relative pl-4 pb-4 last:pb-0 opacity-0 hover:scale-[1.02] hover:shadow-md rounded p-2 cursor-pointer" 
            style={{ 
              animation: 'fadeIn 0.5s ease-out forwards',
              animationDelay: `${1.2 + index * 0.15}s`,
              transition: 'all 0.3s ease'
            }}
          >
            <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 hover:bg-blue-500 transition-colors duration-300" />
            <div 
              className="absolute left-[3px] top-3 bottom-0 w-[1px] bg-gray-200" 
              style={{ display: index === experiences.length - 1 ? 'none' : 'block' }} 
            />
            <div>
              <h3 className="text-base font-medium text-gray-800 mb-0.5">{exp.title}</h3>
              <p className="text-sm text-gray-500 mb-1">{exp.period}</p>
              <p className="text-sm text-gray-600">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
