import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ContactsContextProvider from './Context/ContactsContext.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContactsContextProvider>
      <App />
    </ContactsContextProvider>
  </BrowserRouter>
);
