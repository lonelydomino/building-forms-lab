// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state);
    this.setState({name: ''})
    // document.querySelector("#field").value = ""
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id="field" onChange={this.handleChange} type="text"/>
          <button type="submit"> Submit </button>
        </form>
      </div>
    )
  }
}

export default BandInput
