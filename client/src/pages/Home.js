import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS, QUERY_CATEGORIES, QUERY_USER } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery( QUERY_CATEGORIES);
    const categories = data?.categories || [];
    console.log(categories);


    return (
        <div>
            <h1>Hello</h1>
        </div>
    )

}

export default Home;