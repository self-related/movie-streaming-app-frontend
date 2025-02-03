import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import Trending from "./pages/trending/Trending";
import Favorites from "./pages/favorites/Favorites";
import Welcome from "./pages/welcome/Welcome";

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/favorites",
                element: <Favorites />,
            },
            {
                path: "/trending",
                element: <Trending />,
            },
        ]
    },
    {
        path: "/welcome",
        element: <Welcome />
    }
]);