import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Consultation from './pages/Consultation'
import Faq from './pages/Faq'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import BookDemo from './pages/BookDemo'
import AiStaffGuidance from './pages/services/AiStaffGuidance'
import HealthcareWorkflow from './pages/services/HealthcareWorkflow'
import TrainingIntelligence from './pages/services/TrainingIntelligence'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="faq" element={<Faq />} />
          <Route path="services/ai-staff-guidance" element={<AiStaffGuidance />} />
          <Route path="services/healthcare-workflow" element={<HealthcareWorkflow />} />
          <Route path="services/training-intelligence" element={<TrainingIntelligence />} />
          <Route path="book-demo" element={<BookDemo />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
