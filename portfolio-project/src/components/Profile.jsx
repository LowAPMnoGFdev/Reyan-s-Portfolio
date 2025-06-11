import React from 'react'

const ProfileInfo = () => {
  const [displayText, setDisplayText] = React.useState('');
  const [isTypingDone, setIsTypingDone] = React.useState(false);
  const fullName = "Reyan B. Esquirdo";
  
  React.useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let typingInterval;
    const stopAtU = "Reyan B. Esqu".length;
    const halfLength = "Reyan B.".length;

    const type = () => {
      typingInterval = setInterval(() => {
        if (!isDeleting && currentIndex <= fullName.length) {
          setDisplayText(fullName.slice(0, currentIndex));
          currentIndex++;
          if (currentIndex > stopAtU) {
            setTimeout(() => {
              isDeleting = true;
              currentIndex = stopAtU;
            }, 1000);
          }
        } else if (isDeleting) {
          currentIndex--;
          setDisplayText(fullName.slice(0, currentIndex));
          if (currentIndex === halfLength) {
            isDeleting = false;
            setTimeout(() => {
              currentIndex = halfLength;
              const finalType = setInterval(() => {
                if (currentIndex <= fullName.length) {
                  setDisplayText(fullName.slice(0, currentIndex));
                  currentIndex++;
                } else {
                  clearInterval(finalType);
                  setIsTypingDone(true);
                }
              }, 150);
            }, 500);
            clearInterval(typingInterval);
          }
        }
      }, 150);
    };

    type();
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">
        {displayText}
        {!isTypingDone && <span className="animate-blink">|</span>}
      </h1>
      <p className="text-lg text-gray-600 mb-1">
        Davao, Philippines
      </p>
      <p className="text-lg text-gray-600 font-medium">
        Computer Science and Shopify Store Builder
      </p>
    </>
  )
}

const SocialLinks = () => {
  const socialLinks = [
    {
      href: "https://github.com/LowAPMnoGFdev",
      icon: (
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      )
    },
    {
      href: "https://www.facebook.com/reyan.bellequird/",
      icon: (
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      )
    },
    {
      href: "mailto:your.email@example.com",
      icon: (
        <path fillRule="evenodd" d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 001.228 0L20 9.044 20.002 18H4z" clipRule="evenodd" />
      )
    }
  ]

  return (
    <div className="flex gap-4">
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.href}          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 hover:bg-blue-950 opacity-0 transform hover:scale-110 hover:rotate-6 hover:shadow-lg" 
          style={{
            animation: 'fadeIn 0.5s ease-out forwards',
            animationDelay: `${0.8 + index * 0.1}s`,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-5 h-5 text-white" 
            fill="currentColor"
            viewBox="0 0 24 24" 
            aria-hidden="true"
          >
            {link.icon}
          </svg>
        </a>
      ))}
    </div>
  )
}

const Profile = () => {
  return (    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg w-full opacity-0" style={{ 
        animation: 'fadeIn 0.8s ease-out forwards',
        animationDelay: '0.3s'
      }}>      <div className="flex flex-row items-start gap-8 hover:scale-[1.01] transition-transform duration-300">
        <img 
          src={import.meta.env.BASE_URL + 'profile-pic.jpg'} 
          alt="Profile Picture" 
          className="w-65 h-65 rounded-lg object-cover shadow-md"
        />
        <div className="flex-1">
          <ProfileInfo />
          <div className="mt-6">
            <SocialLinks />            <button className="mt-6 px-8 py-2.5 bg-blue-900 hover:bg-blue-950 text-white text-base rounded-full shadow-sm cursor-pointer transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out hover:translate-y-[-2px]">
              View Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
