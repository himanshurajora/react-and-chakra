import {Route, Routes} from 'react-router-dom'
import Home from '../components/home/Home'
import { HOME_ROUTE } from '../constants/RouterConstants'

export default function AppRoutes(){
    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<Home />}/>
        </Routes>
    )   
}