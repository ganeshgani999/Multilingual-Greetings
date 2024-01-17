import './index.css'

const LanguageItem = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails

  return (
    <>
      <li className="item-container">
        <img className="item-img" alt={imageAltText} src={imageUrl} />
      </li>
    </>
  )
}
export default LanguageItem
