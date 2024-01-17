import './index.css'

const Tabs = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {id, buttonText} = tabDetails

  const onClickTabButton = () => {
    clickTabItem(id)
  }

  const activeTabClassName = isActive ? 'active-tab-button' : ''

  return (
    <li className="tab-row-container">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabButton}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default Tabs
