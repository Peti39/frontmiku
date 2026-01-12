import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ApiProvider} from './contexts/apicontext.tsx'

import { createBrowserRouter, Route } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import { KidsList } from './comps/kidsList.tsx'
import { ToysList } from './comps/toysList.tsx'
import { ConnectToyToKid } from './comps/connectToyToKid.tsx'
import {CreateToy} from './comps/createToy.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        Component: KidsList,
      },
      {
        path: "/toys",
        Component: ToysList
      },
      {
        path: "/toytokid",
        Component: ConnectToyToKid
      },
      {
        path: "/createtoy",
        Component: CreateToy
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiProvider>
      <RouterProvider router={router} />
    </ApiProvider>
  </StrictMode>,
)
