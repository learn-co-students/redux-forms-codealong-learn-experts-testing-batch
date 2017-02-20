import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
        text: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state
    })
  }

  render(){
    return(
      <div>
        <form>
          <p>
            <label>add Todo</label>
            <input type="text" onChange={(event) => this.handleChange}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;
