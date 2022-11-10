// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerateRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    console.log(randomNumber)
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="random-card-container">
          <h1>Random number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.onGenerateRandomNumber}>
            Generate
          </button>
          <p className="value">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
