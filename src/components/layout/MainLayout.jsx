import { Outlet, Link, useLocation } from 'react-router-dom'
import { Layout, Menu, Button, Drawer } from 'antd'
import { useState } from 'react'

const { Header, Content, Footer } = Layout

const menuItems = [
  { key: '/', label: <Link to="/">Home</Link> },
  { key: '/timeline', label: <Link to="/timeline">Timeline</Link> },
  { key: '/team', label: <Link to="/team">About Us</Link> },
]

export function MainLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <div className="app-header-inner">
          <Link to="/" className="app-brand">
            Graduation Documentation
          </Link>

          <div className="app-header-actions">
            <Menu
              mode="horizontal"
              items={menuItems}
              className="app-menu"
              selectedKeys={[pathname === '/' ? '/' : pathname]}
            />
            <Button
              type="text"
              className="app-hamburger"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
            >
              ☰
            </Button>
          </div>
        </div>
      </Header>

      <Drawer
        title="Navigation"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        className="app-drawer"
      >
        <Menu mode="inline" items={menuItems} className="app-drawer-menu" selectedKeys={[pathname === '/' ? '/' : pathname]} />
      </Drawer>

      <Content className="app-content">
        <Outlet />
      </Content>
      <Footer className="app-footer">
        University of Science • Faculty of Computer Science • 2026
      </Footer>
    </Layout>
  )
}
