import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './components/context/AuthContext.jsx'
import { PayPalScriptProvider} from "@paypal/react-paypal-js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
      <PayPalScriptProvider options={{ clientId: "Abl6nMNGQbMKjo2lyLjNj6V4mc25z5t7cHY5uvznUhqn59u-8Pz8Q8SB7eSbcdcL1oGZ0cB42bqjyHr-" }}>
        <App />
        </PayPalScriptProvider>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
)
