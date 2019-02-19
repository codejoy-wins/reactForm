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

    tracker2 = e => {
      console.log(`tracking ${e} from form.js`);
      const { name, value } = e.target;
  
      this.setState(
          {
              [name]: value
          }
      )
  }
    
  render() {

    const {name, job } = this.state;
    const { track } = this.props;
    return (
      <form>
          name: <input type="text" name="name" value ={name} onChange={this.tracker2}></input>
          job: <input type="text" name="job" value ={job} onChange={this.tracker2}></input>
        <button onClick={()=>track(this.state)} > Obey</button>
      </form>
    )
  }
}

export default Form
