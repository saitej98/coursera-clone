import { Route, Routes } from "react-router-dom"
import CarrerAcademy from "../CarrerAcademy/CarrerAcademy"
import Payment from "../PayementPage/Payment"




const Routesbox=()=>{
    return(
        <Routes>
            <Route path="/carreracademy" element={<CarrerAcademy/>}></Route>
            <Route path="/payment" element={<Payment/>}></Route>
        </Routes>
    )

}



export default Routesbox