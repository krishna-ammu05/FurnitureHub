import axios from 'axios'
//import OfficeFurniture from '../pages/OfficeFurniture'
const API = 'http://localhost:3000'
//const getlivingRoomFurnitures = () => axios.get(`${API}/livingRoomFurnitures/all`)
//const getKitchenFurnitures = () => axios.get(`${API}/kitchenFurnitures/all`)
const getOrders = () => axios.get(`${API}/orders/all`)
const getOrdersCount = () => axios.get(`${API}/orders/count`)
const addOrder = (order) => axios.post(`${API}/orders/add`,order)
const deleteOrder = (id) => axios.delete(`${API}/orders/delete/${id}`)
//const getLivingRoomFurniture = () => axios.get(`${API}/livingRooms/all`)
//LivingRoomFurnitures
const getlivingRoomFurniture = () => axios.get(`${API}/livingRoomFurnitures/all`)
const addlivingRoomFurnitures= (livingRoomFurniture) => axios.post(`${API}/livingRoomFurnitures/add`, livingRoomFurniture)
const getlivingRoomFurnituresCount = () => axios.get(`${API}/livingRoomFurnitures/count`)
const editlivingRoomFurnitures = (livingRoomFurniture, id) => axios.put(`${API}/livingRoomFurnitures/edit/${id}`, livingRoomFurniture)
const deletelivingRoomFurnitures= (id) => axios.delete(`${API}/livingRoomFurnitures/delete/${id}`)
//BedRoom
const getBedRoomFurniture = () => axios.get(`${API}/BedRoomFurnitures/all`)
const addBedRoomFurnitures= (BedRoomFurniture) => axios.post(`${API}/BedRoomFurnitures/add`, BedRoomFurniture)
const getBedRoomFurnituresCount = () => axios.get(`${API}/BedRoomFurnitures/count`)
const editBedRoomFurnitures = (BedRoomFurniture, id) => axios.put(`${API}/BedRoomFurnitures/edit/${id}`, BedRoomFurniture)
const deleteBedRoomFurnitures= (id) => axios.delete(`${API}/BedRoomFurnitures/delete/${id}`)
//OutDoorFurniture
const getOutdoorFurniture = () => axios.get(`${API}/OutdoorFurnitures/all`)
const addOutdoorFurnitures= (OutdoorFurniture) => axios.post(`${API}/OutdoorFurnitures/add`, OutdoorFurniture)
const getOutdoorFurnituresCount = () => axios.get(`${API}/OutdoorFurnitures/count`)
const editOutdoorFurnitures = (OutdoorFurniture, id) => axios.put(`${API}/OutdoorFurnitures/edit/${id}`, OutdoorFurniture)
const deleteOutdoorFurnitures= (id) => axios.delete(`${API}/OutdoorFurnitures/delete/${id}`)
//KitchenFurniture
const getKitchenFurniture = () => axios.get(`${API}/KitchenFurnitures/all`)
const addKitchenFurnitures= (KitchenFurniture) => axios.post(`${API}/KitchenFurnitures/add`, KitchenFurniture)
const getKitchenFurnituresCount = () => axios.get(`${API}/KitchenFurnitures/count`)
const editKitchenFurnitures = (KitchenFurniture, id) => axios.put(`${API}/KitchenOutdoorFurnitures/edit/${id}`, KitchenFurniture)
const deleteKitchenFurnitures= (id) => axios.delete(`${API}/KitchenFurnitures/delete/${id}`)
//OfficeFurniture
const getOfficeFurniture = () => axios.get(`${API}/OfficeFurnitures/all`)
const addOfficeFurnitures= (OfficeFurniture) => axios.post(`${API}/OfficeFurnitures/add`, OfficeFurniture)
const getOfficeFurnituresCount = () => axios.get(`${API}/OfficeFurnitures/count`)
const editOfficeFurnitures = (OfficeFurniture, id) => axios.put(`${API}/OfficeOutdoorFurnitures/edit/${id}`, OfficeFurniture)
const deleteOfficeFurnitures= (id) => axios.delete(`${API}/OfficeFurnitures/delete/${id}`)
//users
const getUsers = () => axios.get(`${API}/users/all`)
const getUsersCount = () => axios.get(`${API}/users/count`)
const addUser = (user) => axios.post(`${API}/users/add`, user)
const editUser = (user, id) => axios.put(`${API}/users/edit/${id}`, user)
const resetPassword = (password, id) => axios.put(`${API}/users/resetpassword/${id}`, password)
const deleteUser=(id)=>axios.delete(`${API}/users/delete/${id}`)

export { 
    getOrders,
    addOrder,
    getOrdersCount,
    deleteOrder,
    getlivingRoomFurniture,
    addlivingRoomFurnitures,
    editlivingRoomFurnitures,
    deletelivingRoomFurnitures,
    getlivingRoomFurnituresCount,
    getBedRoomFurniture,
    addBedRoomFurnitures,
    editBedRoomFurnitures,
    deleteBedRoomFurnitures,
    getBedRoomFurnituresCount,
    getOutdoorFurniture,
    addOutdoorFurnitures,
    editOutdoorFurnitures,
    deleteOutdoorFurnitures,
    getOutdoorFurnituresCount,
    getKitchenFurniture,
    addKitchenFurnitures,
    editKitchenFurnitures,
    deleteKitchenFurnitures,
    getKitchenFurnituresCount,
    getOfficeFurniture,
    addOfficeFurnitures,
    editOfficeFurnitures,
    deleteOfficeFurnitures,
    getOfficeFurnituresCount,
    getUsers,
    getUsersCount,
    addUser,
    editUser,
    resetPassword,
    deleteUser
}


// import axios from 'axios'
// const API = 'http://localhost:3000'

// // livingRoomFurnitureEndPonts
// const getlivingRoomFurnitures = () => axios.get(`${API}/livingRoomFurnitures/all`)
// const addlivingRoomFurniture = (livingRoomFurniture) => axios.post(`${API}/livingRoomFurnitures/add`, livingRoomFurniture)

// // OrderEndPonts
// const getOrders = () => axios.get(`${API}/orders/all`)

// //UserEndPoints
// const getUsers = () => axios.get(`${API}/users/all`)

// //AuthEndponts
// const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
// const Register = (credentials) => axios.post(`${API}/auth/register`, credentials)

//export { getlivingRoomFurnitures, getOrders, getUsers, Login, Register }
//export { getlivingRoomFurnitures, getOrders, getUsers, Login, Register, addlivingRoomFurniture }