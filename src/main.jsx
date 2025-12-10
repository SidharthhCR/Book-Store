import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="982634079596-i38ofdt1it8gqn6fi31p2vvfrh2ofsqb.apps.googleusercontent.com">
       <BrowserRouter>
    <App />
    </BrowserRouter>
      </GoogleOAuthProvider>;
   


  </StrictMode>,
)
