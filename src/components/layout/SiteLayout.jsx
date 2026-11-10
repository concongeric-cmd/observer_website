import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../common/ScrollToTop'
export default function SiteLayout() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
