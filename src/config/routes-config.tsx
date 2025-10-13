import { lazy } from 'react'
import { createBrowserRouter, Outlet } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { Auth } from '../modules/auth'

const LazyHomePage = lazy(() => import('../pages/home/Home'))
const LazyLoginPage = lazy(() => import('../pages/login/Login'))
const LazyDashboardPage = lazy(() => import('../pages/dashboard/Dashboard'))
const LazyProjectPage = lazy(() => import('../pages/project/Project'))
const LazyPlaygroundPage = lazy(() => import('../pages/playground/Playground'))

const router = createBrowserRouter([
  {
    path: '/',
    Component: Outlet,
    children: [
      {
        index: true,
        Component: LazyHomePage,
      },
      {
        path: 'login',
        Component: LazyLoginPage,
      },
      {
        path: 'playground',
        Component: LazyPlaygroundPage,
      },
      {
        element: (
          <Auth>
            <Outlet />
          </Auth>
        ),
        children: [
          {
            path: 'dashboard',
            Component: LazyDashboardPage,
          },
          {
            path: 'project/:id',
            Component: LazyProjectPage,
          },
        ],
      },
      {
        path: '*',
        element: '404',
      },
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
