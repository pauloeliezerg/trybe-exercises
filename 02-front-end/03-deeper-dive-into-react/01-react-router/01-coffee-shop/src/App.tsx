import Home from './pages/home';
import CoffeeList from './pages/coffee-list';
import Coffee from './pages/coffee';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/not-found';
import Layout from './components/layout';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={ <Layout /> }>
                    <Route index element={ <Home /> } />
                    <Route path='/coffee-list' element={ <CoffeeList /> } />
                    <Route path='/coffee/:type' element={ <Coffee /> } />
                </Route>
                <Route path='/*' element={ <NotFound /> } />
            </Routes>
        </>
    );
}

export default App;
