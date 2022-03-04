import React from 'react';
import './App.css';

class Form extends React.Component{
    state = {
  value: ''
    }
  
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value.trim() === '' ) {
            alert('scrivi qualcosa')
            return
        }
      this.props.submit(this.state.value)
      this.setState({
          value: '' 
      })
    }
  
    onChangeText = (e) => {
      this.setState({
         value: e.target.value

      })
    }
    render() {
      return(
        <form onSubmit={this.handleSubmit}>
          <input className='input' type="text" value={this.state.value} placeholder="aggiungi todo" onChange={this.onChangeText} ></input>
        </form>
      )
    }
  }

  export default Form;