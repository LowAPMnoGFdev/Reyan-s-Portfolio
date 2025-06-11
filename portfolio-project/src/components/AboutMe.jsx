const AboutMe = () => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg w-full opacity-0" style={{ 
      animation: 'fadeIn 0.8s ease-out forwards',
      animationDelay: '0.6s'
    }}>
      <h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-4">About Me</h2>
      <div className="space-y-4">        <section className="opacity-0" style={{
            animation: 'fadeIn 0.5s ease-out forwards',
            animationDelay: '0.8s'
          }}>
          <h3 className="text-lg font-medium text-gray-800 tracking-tight mb-2">Background</h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Third-year Computer Science student at the University of Mindanao. Passion for web development. Expertise in HTML, CSS,
            JavaScript, and Tailwind CSS.
          </p>
        </section>        <section className="opacity-0" style={{
            animation: 'fadeIn 0.5s ease-out forwards',
            animationDelay: '0.9s'
          }}>
          <h3 className="text-lg font-medium text-gray-800 tracking-tight mb-2">Professional Experience</h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Freelance web developer, collaborations with foreign clients. Custom web solutions, frontend systems, full-stack applications.
            Major school project, role as frontend developer, design and implementation of key system features. Expanding technical skills,
            focus on React.js and Laravel, strengthening full-stack development. Experience beyond web development with Arduino-based projects,
            Django-powered payroll system, additional software expertise.
          </p>
        </section>        <section className="opacity-0" style={{
            animation: 'fadeIn 0.5s ease-out forwards',
            animationDelay: '1s'
          }}>
          <h3 className="text-lg font-medium text-gray-800 tracking-tight mb-2">Core Values</h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Commitment to continuous learning and adaptability. Dedication for contributions to users and businesses.
          </p>
        </section>
      </div>
    </div>
  )
}

export default AboutMe
