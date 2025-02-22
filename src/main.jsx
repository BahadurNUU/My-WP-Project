import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FinanceContextProvider } from './context/FinanceContext.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <FinanceContextProvider>
    <App />
  </FinanceContextProvider>
)