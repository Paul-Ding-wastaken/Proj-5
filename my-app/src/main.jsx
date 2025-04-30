import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { LoggedProvider } from './Components/loggedContext';


globalThis.Logged = false;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoggedProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoggedProvider>
  </StrictMode>,
)
