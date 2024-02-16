// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        toggleShowContent,
        toggleShowLeftNavbar,
        toggleShowRightNavbar,
      } = value
      return (
        <div className="controller-div">
          <h1>Layout</h1>
          <ul className="tab-list">
            <li className="tab-item">
              <input
                className="tab-input"
                id="context"
                type="checkbox"
                name="Content"
                value="Content"
                checked={showContent}
                onChange={toggleShowContent}
              />
              <label htmlFor="context">Content</label>
            </li>
            <li className="tab-item">
              <input
                className="tab-input"
                id="leftNavbar"
                type="checkbox"
                name="Left Navbar"
                value="Left Navbar"
                checked={showLeftNavbar}
                onChange={toggleShowLeftNavbar}
              />
              <label htmlFor="leftNavbar">Left Navbar</label>
            </li>
            <li className="tab-item">
              <input
                className="tab-input"
                id="rightNavbar"
                type="checkbox"
                name="Right Navbar"
                value="Right Navbar"
                checked={showRightNavbar}
                onChange={toggleShowRightNavbar}
              />
              <label htmlFor="rightNavbar">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
