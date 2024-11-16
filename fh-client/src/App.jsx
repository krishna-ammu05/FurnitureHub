import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from './pages/Contact'
import WebLayout from "./layout/WebLayout"
import AllCategories from './pages/AllCategories'
import LivingRoomFurniture from './pages/LivingRoomFurniture'
import BedRoomFurniture from './pages/BedRoomFurniture'
import OutDoorFurniture from './pages/OutDoorFurniture'
import KitchenFurniture from './pages/KitchenFurniture'
import OfficeFurniture from './pages/OfficeFurniture'
// import Products from './pages/Products'
//Admin
import AdminLayout from "./layout/AdminLayout"
import AdminDashboard from "./pages/Admin/AdminDashboard"
import AdminProducts from "./pages/Admin/AdminProducts"
import AdminOrders from "./pages/Admin/AdminOrders"
import AdminUsers from './pages/Admin/AdminUsers'
import AdminSettings from "./pages/Admin/AdminSettings"
const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element = {<WebLayout/>}>
                    <Route path ='/' element={<Home/>}/>
                    <Route path ='/Contact' element={<Contact/>}/>
                    <Route path ='/AllCategories' element={<AllCategories/>}/>
                    <Route path ='/LivingRoomFurniture' element={<LivingRoomFurniture/>}/>
                    <Route path ='/BedRoomFurniture' element={<BedRoomFurniture/>}/>
                    <Route path ='/OutDoorFurniture' element={<OutDoorFurniture/>}/>
                    <Route path ='/KitchenFurniture' element={<KitchenFurniture/>}/>
                    <Route path ='/OfficeFurniture' element={<OfficeFurniture/>}/>
                    {/* <Route path ='/products' element={<Products/>}/> */}
                </Route>
                <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/products' element={<AdminProducts />} />
                        <Route path='/admin/orders' element={<AdminOrders />} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                        <Route path='/admin/settings' element={<AdminSettings />} />
                </Route>
            
            </Routes>
        </BrowserRouter>
        </>
  )
}

export default App