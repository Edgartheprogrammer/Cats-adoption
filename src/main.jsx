// main.jsx
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
