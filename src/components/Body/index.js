// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="layout-body-container">
          {showLeftNavbar && (
            <div className="left-navbar">
              <h1 className="heading">Left Navbar Menu</h1>
              <ul className="left-list">
                <li className="left-nav-item">Item 1</li>
                <li className="left-nav-item">Item 2</li>
                <li className="left-nav-item">Item 3</li>
                <li className="left-nav-item">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="context-div">
              <h1 className="heading">Content</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-navbar">
              <h1 className="heading">Right Navbar</h1>
              <ul>
                <li className="right-nav-item">
                  <p>Ad 1</p>
                </li>
                <li className="right-nav-item">
                  <p>Ad 2</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
