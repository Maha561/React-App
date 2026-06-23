
import './App.css'
import Contact from './Contact.jsx'
import Course from './course.jsx'
import Navbar from  './Navbar.jsx'
import HTML from './assets/HTML.jpg'
import CSS from './assets/CSS.jpg'
import JS from './assets/JS.jpg'


function App() {
  

  return (
    <>
    
  
    <Course name = "HTML " price = "$199" image = {HTML}/>
    <Course  name = "CSS" price = "$259" image = {CSS} />
    <Course name = "JS  " price = "$569" image = {JS} />



    
    </>
    

  )
}

export default App
