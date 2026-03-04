import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'
import './index.css'
// @ts-ignore
import 'swiper/css'
// @ts-ignore
import 'swiper/css/pagination'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
