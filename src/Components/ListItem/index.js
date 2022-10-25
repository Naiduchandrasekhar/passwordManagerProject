import './index.css'

const ListItem = props => {
  const {eachOne, isChecked, onDeleteItem} = props
  const {id, websiteURLName, userName, passWord} = eachOne

  const maskedPasswordResult = isChecked ? (
    <p className="password">{passWord}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="starImg"
    />
  )

  const deleteItem = () => {
    onDeleteItem(id)
  }

  return (
    <li className="listItems">
      <div>
        <p className="website">{websiteURLName}</p>
        <p className="username">{userName}</p>
        {maskedPasswordResult}
      </div>
      <button type="button" onClick={deleteItem} className="deleteButton">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete"
          className="deleteImg"
        />
      </button>
    </li>
  )
}

export default ListItem
