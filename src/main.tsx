import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'  // Only import this one CSS file
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
