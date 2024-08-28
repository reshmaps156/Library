import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './react-redux/store.js'
import DataShare from './context/DataShare.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  
      <Provider store={store}>
        <DataShare>
        <BrowserRouter>
          <App />
          </BrowserRouter>
          </DataShare>
        </Provider>
   
  </StrictMode>,
)
