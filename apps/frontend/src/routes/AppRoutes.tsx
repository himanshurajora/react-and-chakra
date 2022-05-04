import {Route, Routes} from 'react-router-dom'
import RegisterForm from '../components/form/Form'
import Home from '../components/home/Home'
import CustomTable from '../components/table/CustomTable'
import { HOME_ROUTE, TABLE_ROUTE } from '../constants/RouterConstants'

export default function AppRoutes(){
    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<Home />}/>
            <Route path={TABLE_ROUTE} element={<CustomTable />}/>
            <Route path={"/form"} element={<RegisterForm />}/>
        </Routes>
    )   
}