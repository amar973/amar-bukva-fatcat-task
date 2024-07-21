import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from '@homework-task/App';
import { UserPage } from '@homework-task/components/pages/UserPage';
import routeNames from '@homework-task/router/routeNames';

const RootRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routeNames.root()} element={<App />} />
                <Route path={routeNames.userPage()} element={<UserPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RootRouter;
