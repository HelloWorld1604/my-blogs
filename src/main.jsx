import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "@fontsource/inter";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
