import { useState } from 'react'
import { Menu, X, ChevronRight, LogIn, UserPlus } from 'lucide-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import logo from '../assets/logo.webp'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="FutureProd Logo" className="h-8 w-auto mr-2" />
              <span className="text-2xl font-bold">FutureProd</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <NavLink to="/product">Product</NavLink>
              <NavLink to="/features">Features</NavLink>
              <NavLink to="/marketplace">Marketplace</NavLink>
              <NavLink to="/company">Company</NavLink>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link to="/login" className="text-white hover:text-purple-400 transition duration-300 flex items-center">
                <LogIn className="mr-2" size={18} />
                Login
              </Link>
              <Link to="/register" className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-purple-400 hover:text-white transition duration-300 flex items-center">
                <UserPlus className="mr-2" size={18} />
                Sign Up
              </Link>
            </div>
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <NavLink to="/product" mobile>Product</NavLink>
              <NavLink to="/features" mobile>Features</NavLink>
              <NavLink to="/marketplace" mobile>Marketplace</NavLink>
              <NavLink to="/company" mobile>Company</NavLink>
              <Link to="/login" className="block w-full text-left py-2 text-white hover:text-purple-400 transition duration-300">
                Login
              </Link>
              <Link to="/register" className="block w-full bg-white text-gray-900 px-4 py-2 rounded hover:bg-purple-400 hover:text-white transition duration-300">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="text-purple-400">Revolutionize</span> Your Workflow
            </h1>
            <p className="text-xl md:text-2xl mb-12 animate-fade-in-delay-1">
              The future of productivity is here
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-purple-400 hover:text-white transition duration-300 flex items-center mx-auto animate-fade-in-delay-2">
              Get Started <ChevronRight className="ml-2" />
            </button>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-800">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                title="AI-Powered Insights" 
                description="Leverage cutting-edge AI to gain valuable insights and boost productivity."
              />
              <FeatureCard 
                title="Seamless Integrations" 
                description="Connect with your favorite tools and streamline your workflow effortlessly."
              />
              <FeatureCard 
                title="Real-time Collaboration" 
                description="Work together with your team in real-time, no matter where you are."
              />
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Transform Your Workflow
            </h2>
            <Link to="/register" className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-purple-400 hover:text-white transition duration-300 inline-flex items-center">
              Start Free Trial
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 Shlok. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function NavLink({ to, children, mobile = false }) {
  const baseClasses = "text-white hover:text-purple-400 transition duration-300"
  const mobileClasses = mobile ? "block py-2" : ""
  
  return (
    <Link to={to} className={`${baseClasses} ${mobileClasses}`}>
      {children}
    </Link>
  )
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  mobile: PropTypes.bool,
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-gray-700 shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}