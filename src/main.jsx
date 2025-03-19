import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TaskContext from './context/TaskContext.jsx'
import AuthContext from './context/AuthProvider.jsx'
import './index.css'

localStorage.clear()
createRoot(document.getElementById('root')).render(
 
    <AuthContext>
      <TaskContext>
            <App />
      </TaskContext>
    </AuthContext>
)
