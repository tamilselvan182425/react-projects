import { useLocation, useNavigate } from "react-router-dom"

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
        function pathMathRoute(route) {
            if(route === location.pathname){
                return true
            }
        }
    
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
    
    <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
    <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Original_Adidas_logo.svg/779px-Original_Adidas_logo.svg.png" alt="logo" 
        className="h-20 cursor-pointer"
        onClick={()=>navigate("/home")}
        />
    </div> 
    <div>
    <ul className="flex space-x-10">
    <li className={`cursor-pointer py-6 text-sm font-bold text-gray-600 border-b-[3px] border-b-transparent ${pathMathRoute("/home")  && "text-black  border-b-red-600"}`}  onClick={()=>navigate("/home")} >Home</li>
    <li className={`cursor-pointer py-6 text-sm font-bold text-gray-600 border-b-[3px] border-b-transparent ${pathMathRoute("/sign-in")  && "text-black  border-b-red-600"}`}  onClick={()=>navigate("/sign-in")}>Sign in</li>
    <li className={`cursor-pointer py-6 text-sm font-bold text-gray-600 border-b-[3px] border-b-transparent ${pathMathRoute("/Offers")  && "text-black  border-b-red-600"}`}  onClick={()=>navigate("/Offers")}>Offers</li>
   
    </ul>
    </div>
   </header>
   </div>
  )
}
