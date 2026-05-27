import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const url = new URL(window.location.href);
const redirectPath = url.searchParams.get('redirect');

if (redirectPath && redirectPath.startsWith('/')) {
  window.history.replaceState(null, '', redirectPath);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
