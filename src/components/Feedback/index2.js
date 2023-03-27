import './index.css'

const GetItem = props => {
  const {item, onTrigger} = props
  const {name, imageUrl} = item
  const onTouch = () => {
    onTrigger()
  }
  return (
    <li className="image-card">
      <button className="image-card" type="button" onClick={onTouch}>
        <img src={imageUrl} alt={name} className="image" />
        <p className="para">{name}</p>
      </button>
    </li>
  )
}

export default GetItem
