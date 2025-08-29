import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Product from '../pages/Products/Product';
import MainLayout from '../layouts/MainLayout';
import Shop from '../pages/Shop';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from '../components/PrivateRoute';

const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route index element={<Home></Home>}></Route>
            <Route path='about' element={<About></About>}></Route> */}
            <Route element={<MainLayout></MainLayout>}>
                <Route path='/' element= {<Home></Home>}></Route>
                <Route path='products' element= {<Product></Product>}></Route>
                <Route path='about' element= {<About></About>}></Route>
                <Route path='shop' element={<Shop/>}></Route>
                <Route path='login' element={<Login />}></Route>
                <Route path='register' element={<Register />}></Route>
                <Route path='dashboard' element={
                    <PrivateRoute>
                        <Dashboard></Dashboard>
                    </PrivateRoute>
                }></Route>
            </Route>
        </Routes>

    );
};

export default AppRoutes;