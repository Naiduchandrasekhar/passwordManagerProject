import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import ListItem from '../ListItem/index'

class PasswordPage extends Component {
  state = {
    websiteURL: '',
    username: '',
    password: '',
    dataArray: [],
    isChecked: false,
    searchInputValue: '',
  }

  onAddValues = event => {
    event.preventDefault()
    const {websiteURL, username, password} = this.state
    const newObject = {
      id: uuidv4(),
      websiteURLName: websiteURL,
      userName: username,
      passWord: password,
    }
    this.setState(prevState => ({
      dataArray: [...prevState.dataArray, newObject],
      websiteURL: '',
      username: '',
      password: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({websiteURL: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onCheckClick = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  onDeleteItem = id => {
    const {dataArray} = this.state
    const updatedDataArray = dataArray.filter(eachOne => eachOne.id !== id)
    this.setState({dataArray: updatedDataArray})
  }

  onSearchInput = event => {
    this.setState({searchInputValue: event.target.value})
  }

  render() {
    const {
      dataArray,
      username,
      password,
      websiteURL,
      isChecked,
      searchInputValue,
    } = this.state

    const resultArray = dataArray.filter(eachOne =>
      eachOne.websiteURLName
        .toLowerCase()
        .includes(searchInputValue.toLowerCase()),
    )

    console.log(resultArray)

    const resultOfNoPasswordImg =
      resultArray.length === 0 ? (
        <div className="noPasswordDiv">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="noPasswordImg"
          />
          <p className="noPasswordText">No Passwords</p>
        </div>
      ) : (
        <div>
          <ul className="unorderList">
            {resultArray.map(eachOne => (
              <ListItem
                key={eachOne.id}
                eachOne={eachOne}
                isChecked={isChecked}
                onDeleteItem={this.onDeleteItem}
              />
            ))}
          </ul>
        </div>
      )

    return (
      <div className="mainContainer">
        <div className="cardContainer">
          <div className="fsCard">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="applogo"
            />
            <div className="firstCard">
              <div className="formPage">
                <h1 className="headingName">Add New Password</h1>
                <form onSubmit={this.onAddValues}>
                  <div className="inputBar">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                      alt="website"
                      className="imgLogos"
                    />
                    <input
                      type="text"
                      placeholder="Enter Website"
                      className="textInput"
                      onChange={this.onChangeWebsite}
                      value={websiteURL}
                    />
                  </div>
                  <div className="inputBar">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                      alt="username"
                      className="imgLogos"
                    />
                    <input
                      type="text"
                      placeholder="Enter Username"
                      className="textInput"
                      onChange={this.onChangeUsername}
                      value={username}
                    />
                  </div>
                  <div className="inputBar">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                      alt="password"
                      className="imgLogos"
                    />
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="textInput"
                      onChange={this.onChangePassword}
                      value={password}
                    />
                  </div>
                  <div className="buttonDiv">
                    <button className="button" type="submit">
                      Add
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                  alt="password manager"
                  className="passwordManagerImage"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                  alt="password manager"
                  className="passwordManagerImage hidden"
                />
              </div>
            </div>
            <div className="secondCard">
              <div className="secondContainer">
                <div className="passwordBlock">
                  <h1 className="yourPasswordText">Your Passwords</h1>
                  <p className="number">{resultArray.length}</p>
                </div>
                <div className="searchBar">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                    alt="search"
                    className="searchImg"
                  />
                  <input
                    type="search"
                    placeholder="search"
                    className="textInput"
                    onChange={this.onSearchInput}
                  />
                </div>
              </div>
              <hr />
              <div>
                <label className="label">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onClick={this.onCheckClick}
                  />
                  Show Passwords
                </label>
                {resultOfNoPasswordImg}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordPage
