import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import AllCategories from './pages/AllCategories'
import LivingRoomFurniture from './pages/LivingRoomFurniture'
import BedRoomFurniture from './pages/BedRoomFurniture'
import OutDoorFurniture from './pages/OutDoorFurniture'
import KitchenFurniture from './pages/KitchenFurniture'
import OfficeFurniture from './pages/OfficeFurniture'
// import Products from './pages/Products'
import WebLayout from "./layout/WebLayout"
const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element = {<WebLayout/>}>
                    <Route path ='/' element={<Home/>}/>
                    <Route path ='/AllCategories' element={<AllCategories/>}/>
                    <Route path ='/LivingRoomFurniture' element={<LivingRoomFurniture/>}/>
                    <Route path ='/BedRoomFurniture' element={<BedRoomFurniture/>}/>
                    <Route path ='/OutDoorFurniture' element={<OutDoorFurniture/>}/>
                    <Route path ='/KitchenFurniture' element={<KitchenFurniture/>}/>
                    <Route path ='/OfficeFurniture' element={<OfficeFurniture/>}/>
                    {/* <Route path ='/products' element={<Products/>}/> */}
                </Route>
            
            </Routes>
        </BrowserRouter>
        </>
  )
}

export default App