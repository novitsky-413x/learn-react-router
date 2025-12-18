import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main>
                {/* Outlet -> this is where child routes will be rendered */}
                <Outlet />
            </main>
        </>
    );
}
export default RootLayout;
