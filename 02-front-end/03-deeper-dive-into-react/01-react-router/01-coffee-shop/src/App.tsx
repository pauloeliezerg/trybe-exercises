import Home from './pages/home';
import CoffeeList from './pages/coffee-list';
import Coffee from './pages/coffee';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/nav-bar';
import NotFound from './pages/not-found';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/coffee-list' element={ <CoffeeList /> } />
                <Route path='/coffee/:type' element={ <Coffee /> } />
                <Route path='/*' element={ <NotFound /> } />
            </Routes>
        </>
    );
}

export default App;
