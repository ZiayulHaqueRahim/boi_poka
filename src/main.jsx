import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './components/Root/Root';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/ErrorPage/Error';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import PagesToRead from './components/PagestoRead/PagesToRead';
import BookDetails from './components/BookDetails/BookDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/pages',
        element: <PagesToRead />
      },
      {
        path: 'books/:bookId',
        loader:() => fetch('/booksData.json'),
        element: <BookDetails />
      },
    ]

  },
]);






createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
