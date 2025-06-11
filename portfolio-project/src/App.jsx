import './index.css'
import Profile from './components/Profile'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className="min-h-screen animated-gradient p-8">
      <div className="container mx-auto max-w-[1200px] opacity-0" style={{
          animation: 'containerAppear 0.8s ease-out forwards'
        }}>
        <div className="flex flex-col lg:flex-row gap-8 transition-all duration-500 ease-in-out">
          <div className="flex flex-col space-y-8 lg:w-2/3">
            <Profile />
            <AboutMe />
          </div>
          <div className="lg:w-1/3">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
