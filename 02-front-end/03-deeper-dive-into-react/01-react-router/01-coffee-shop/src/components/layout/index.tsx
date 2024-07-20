import { Outlet } from 'react-router-dom';
import NavBar from '../nav-bar';
import Footer from '../footer';

function Layout() {
    return (
        <>
            <div className='wrapper'>
                <NavBar />
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;
