import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App'
import Products from "./pages/Products"
import About from "./pages/About"
import ProductDetails from "./pages/ProductDetails"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
	{
		path: "/products",
		element: <Products />
	},
	{
		path: "/about",
		element: <About />
	},
	{
		path: "/products/:productId",
		element: <ProductDetails />
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)