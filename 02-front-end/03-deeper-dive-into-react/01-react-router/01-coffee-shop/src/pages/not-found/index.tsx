import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <h1>Oops! Page not found</h1>
            <h2>Sorry, the page you are looking for does not exist.</h2>
            <Link to='/'>
                <h3>Return to home page</h3>
            </Link>
        </>
    );
}

export default NotFound;
