import NavBar from '../Page/Shared/NavBar/NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Page/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            { noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;