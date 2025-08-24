import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Product from '../pages/Products/Product';
import MainLayout from '../layouts/MainLayout';

const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route index element={<Home></Home>}></Route>
            <Route path='about' element={<About></About>}></Route> */}
            <Route element={<MainLayout></MainLayout>}>
                <Route path='/' element= {<Home></Home>}></Route>
                <Route path='products' element= {<Product></Product>}></Route>
                <Route path='about' element= {<About></About>}></Route>
            </Route>
        </Routes>

    );
};

export default AppRoutes;