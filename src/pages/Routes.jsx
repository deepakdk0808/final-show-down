import { Routes,Route } from "react-router-dom";
import Home from "./Home"
import CLass  from "./class"
import {Admin} from "./Admin"
import {Edit} from "./Edit"
export  const Rout  = () =>{
 return(
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/class" element={<CLass/>}/>
         <Route path="/admin-login" element={<Admin/>}/>
         <Route path="/edit" element={<Edit/>}/>

         
     </Routes>
 )

}
