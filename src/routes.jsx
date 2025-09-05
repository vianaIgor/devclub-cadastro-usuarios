import { createBrowserRouter } from "react-router-dom"
import Home from './pages/Home/index.jsx'
import ListUsers from './pages/ListUsers/index.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/lista-de-usuarios",
        element: <ListUsers />
    }
])

export default router