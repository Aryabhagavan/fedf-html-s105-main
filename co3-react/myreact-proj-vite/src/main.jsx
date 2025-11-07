import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReduxDemo from './ReduxDemo'
import MaterialUIDemo from './MaterialUIDemo'
//import ReusableComponents from './ReusableComponents'
//import ChildtoParentState from './ChildtoParentState'
//import ReactRouteDemo from './ReactRouteDemo'
//import Timer from './Timer'
//import Form from './Form'
//import App from './App.jsx'
//import App2 from './App2.jsx'
//import App3 from './App3.jsx'
//import PropsDemo from './PropsDemo.jsx'
//import StateObjectDemo from './StateObjectDemo.jsx'
// import listrender from './listrender.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MaterialUIDemo />
  </StrictMode>,

)
