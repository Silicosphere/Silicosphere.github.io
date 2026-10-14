import { Outlet, Link, useLocation } from 'react-router-dom'
import { Layout, Drawer, Button } from 'antd'
import { useState } from 'react'
import { team } from '../../constants/team'

const { Header, Content, Footer } = Layout

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/posts', label: 'Posts' },
  { to: '/updates', label: 'Updates' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/team', label: 'People' },
]

export function MainLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { pathname } = useLocation()
  const selectedKey = pathname.startsWith('/posts') ? '/posts' : pathname

  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <div className="app-header-inner">
          <Link to="/" className="app-brand">
            <span className="app-brand-name">{team.name}</span>
          </Link>

          <div className="app-header-side">
            <nav className="app-nav" aria-label="Primary">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} className={selectedKey === item.to ? 'is-active' : undefined}>
                  {item.label}
                </Link>
              ))}
            </nav>

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
        title={team.name}
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <nav className="app-drawer-nav" aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={selectedKey === item.to ? 'is-active' : undefined}
              onClick={() => setDrawerOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Drawer>

      <Content className="app-content">
        <Outlet />
      </Content>
      <Footer className="app-footer">
        <div className="app-footer-inner">
          <p className="app-footer-main">
            {team.name} &bull; {team.university} &bull; {team.faculty}
          </p>
          <p className="app-footer-sub">
            &copy; {team.year} {team.name}.
          </p>
        </div>
      </Footer>
    </Layout>
  )
}
