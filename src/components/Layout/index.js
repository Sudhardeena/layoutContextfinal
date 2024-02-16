// Write your code here
import './index.css'

import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'

const Layout = () => (
  <div className="layout-div">
    <div className="layout-content">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default Layout
