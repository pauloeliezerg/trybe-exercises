import { useParams, Link } from 'react-router-dom';
import { coffeeList } from '../../data';
import './coffee.css';

function Coffee() {
    const params = useParams();
    const currentCoffee = coffeeList.find((coffee) => coffee.slug === params.type);

    if (!currentCoffee) {
        return (
            <div className="not-found-coffee">
                <h1>Oops! This cafe is not on our list</h1>
                <h2>Access the <Link to="/coffee-list">coffee list page</Link> and select one of our products</h2>
            </div>
        );
    }

    return (
        <div className='coffee-page'>
            <h1>{ currentCoffee.title }</h1>
            <p>{ currentCoffee.description }</p>
            <div className='ingredients-list'>
                <h2>Ingredients</h2>
                <ul>
                    { currentCoffee.ingredients.map(
                        (ingredient) => (
                            <li key={ ingredient }>
                                { ingredient }
                            </li>
                        )
                    ) }
                </ul>
            </div>
            <img src={ currentCoffee.image } alt={ currentCoffee.title } />
        </div>
    );
}

export default Coffee;
