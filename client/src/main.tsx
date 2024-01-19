import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './mobile.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { AuthProvider } from './context/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <AuthProvider>
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </AuthProvider>
  </Router>
)
