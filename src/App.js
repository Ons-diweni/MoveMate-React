import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Acceuil } from './pages/acceuil';
import { Signinup } from './pages/signin-up';




//le composant racine de l'application 
function App() {
   return (

<BrowserRouter> 
<Routes>

<Route path='/login' element={<Signinup/>} > </Route>
<Route path='/' element={<Acceuil/>} > </Route>

</Routes>
 
 </BrowserRouter> )


}

export default App;
