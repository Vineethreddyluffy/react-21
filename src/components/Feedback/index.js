import {Component} from 'react'

import GetItem from './index2'

import './index.css'

class Feedback extends Component {
  state = {isClicked: true}

  onTrigger = () => {
    this.setState({isClicked: false})
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const url = resources.loveEmojiUrl
    return (
      <div className="cont">
        {isClicked ? (
          <div className="card-cont">
            <h1 className="heading">
              How Satisfied are you with our customer support performance?
            </h1>
            <div className="card">
              {resources.emojis.map(each => (
                <GetItem item={each} key={each.id} onTrigger={this.onTrigger} />
              ))}
            </div>
          </div>
        ) : (
          <div className="card-cont">
            <img src={url} alt="love emoji" className="image" />
            <h1 className="para">Thank You!</h1>
            <p className="para">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
