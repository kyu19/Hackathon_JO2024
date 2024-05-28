import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './Routes/home.jsx';
import Predictions from './Routes/predictions.jsx';
import { Container } from '@mui/material';
import Questions from './Routes/questions.jsx';
import Visualisations from './Routes/visualisations.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/predictions",
    element: <Predictions />,
  },
  {
    path: "/questions",
    element: <Questions />,
  },
  {
    path: "/visualisations",
    element: <Visualisations />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Container sx={{marginTop:15}}>
      <RouterProvider router={router} />
    </Container>
    
  </React.StrictMode>,
)
