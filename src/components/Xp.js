import React, { Component } from 'react'

export class Xp extends Component {
  render() {
      const { modifize, num } = this.props;
    return (
      <div>
        <button onClick={()=>modifize(num)}>Multiply {num} by 4?</button>
        <p>Did you know that I made <a href="https://google.com"> this</a> with react? {this.props.num}</p>
      </div>
    )
  }
}

export default Xp
