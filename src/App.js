import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./page/Home";
import Profile from "./page/Profile";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import ForgotPassword from "./page/ForgotPassword";
import Offers from "./page/Offers";

function App() {
  return (
   
   <Router>
   <Routes>
    <Route path="/Home"element={<Home/>} />
    <Route path="/Profile"element={<Profile/>} />  
    <Route path="/Sign-in"element={<SignIn/>} />
    <Route path="/Sign-up"element={<SignUp/>} />
    <Route path="/forgot-password"element={<ForgotPassword/>} />
    <Route path="/offers"element={<Offers/>} />
   
   </Routes>
 </Router>
   
  );
}

export default App;
