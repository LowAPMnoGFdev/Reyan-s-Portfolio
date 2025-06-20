import './index.css'
import './App.css'
import Profile from './components/Profile'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import TechStack from './components/TechStack'

function App() {
  return (
    <div className="min-h-screen animated-gradient px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-[1200px] opacity-0 responsive-container" 
        style={{
          animation: 'containerAppear 0.8s ease-out forwards'
        }}>
        <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 transition-all duration-500 ease-in-out">
            <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8 lg:w-2/3">
              <Profile />
              <AboutMe />
            </div>
            <div className="lg:w-1/3 mt-4 lg:mt-0">
              <Experience />
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 transition-all duration-500 ease-in-out">
            <div className="w-full lg:w-1/2">
              <Projects />
            </div>
            <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
              <TechStack />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
