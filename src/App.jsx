import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ConfigProvider } from 'antd'
import { router } from './routes/routes'

function App() {
  return (
    <HelmetProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#0f172a',
            borderRadius: 12,
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </HelmetProvider>
  )
}

export default App
