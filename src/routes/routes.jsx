import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../components/layout/MainLayout'
import { HomePage } from '../pages/HomePage'
import { UpdatesPage } from '../pages/UpdatesPage'
import { TimelinePage } from '../pages/TimelinePage'
import { TeamPage } from '../pages/TeamPage'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'updates',
          element: <UpdatesPage />,
        },
        {
          path: 'timeline',
          element: <TimelinePage />,
        },
        {
          path: 'team',
          element: <TeamPage />,
        },
      ],
    },
  ],
  { basename: '/Silicosphere.github.io/' },
)
