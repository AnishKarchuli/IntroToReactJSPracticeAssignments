import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import About from './pages/About'
import Stays from './pages/Stays'
import StayDetails from "./pages/StayDetails"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
	{
		path: "/about",
		element: <About />
	},
	{
		path: "/stays",
		element: <Stays />
	},
	{
		path: "/stays/:stayId",
		element: <StayDetails />
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)