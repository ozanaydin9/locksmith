import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import MapSection from '../components/MapSection'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import WhatsAppFAB from '../components/WhatsAppFAB'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <Box component="main">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* About Section */}
      <About />
      
      {/* Service Area & Map Section */}
      <MapSection />
      
      {/* Contact Form Section */}
      <ContactForm />
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Floating Action Button */}
      <WhatsAppFAB />
    </Box>
  )
}
