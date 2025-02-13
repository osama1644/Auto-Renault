
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Videos from './Componants/Videos.jsx'
import Tawasal from './Componants/Tawasal.jsx'
import Na7n from './Componants/Na7n.jsx'
import Khadamat from './Componants/Khadamat.jsx'

createRoot(document.getElementById('root')).render(
  
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/'element={<App />} />
      <Route path='/services' element={<Videos />} />
      <Route path='/about' element={<Tawasal />} />
      <Route path='/na7n' element={<Na7n />}/>
      <Route path='/kahdamat' element={<Khadamat />}/>
    </Routes>
    </BrowserRouter>
  
  </>

)
