import React, { Component } from 'react'
// this is pretty tricky.   why exactly super props and using intial state?
export class Form extends Component {
    constructor(props){
        super(props);
        this.initialState = {
            name:'',
            job:''
        }
        this.state = this.initialState;
    }
    tracker = e => {
        const { name, value } = e.target;

        this.setState(
            {
                [name]: value
            }
        )
    }
  render() {

    const {name, job } = this.state;
    return (
      <form>
          name: <input type="text" name="name" value ={name} onChange={this.tracker}></input>
          job: <input type="text" name="job" value ={job} onChange={this.tracker}></input>
        <button>Obey</button>
      </form>
    )
  }
}

export default Form
