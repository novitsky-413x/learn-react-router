import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    function navigateHandler() {
        // navigate to /products programmatically
        // in case if some action needs to be done before navigation
        // or if some timer expired and you can call navigate() then
        navigate('/products');
    }

    return (
        <>
            <h1>My Home Page</h1>
            <p>
                Go to the <Link to="products">the list of products</Link>.
                {/* Go to <a href="/products">the list of products</a>. */}
            </p>
            <p>
                <button onClick={navigateHandler}>Navigate to Products</button>
            </p>
        </>
    );
}
export default HomePage;
