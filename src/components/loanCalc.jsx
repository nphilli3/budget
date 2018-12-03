import React from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap'
import $ from 'jquery'
import ReactDOM from 'react-dom'

export default class loanCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row:this.props,
      loanAmount: 0,
      loanIntrest: 0,
      loanTerm: 0

    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.caclulate = this.caclulate.bind(this)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  caclulate(event) {

    var groupName = this.state.group
  	var url = '/item'
    var formData = {
    	itemName: this.state.itemName,
  		itemCost: this.state.itemCost,
  	}
  	$.post(url, formData).done(function(data){
  		console.log(formData);
  	})
    event.preventDefault()
    var itemForm = ReactDOM.findDOMNode(this.refs.itemForm)
    itemForm.reset()
    return false
  }

  handelUpdate(event){

  }

  render() {
    return (
	    <div>
	      <Form action='/addItem' ref="itemForm">
	      	<FormGroup>
	      		<Input
              defaultValue={item.loanAmount}
              onChange= {this.handleInputChange}
  	      		type="float"
  	      		name="loanAmount"
  	      		placeholder="Item"/>
            <Input
              defaultValue={item.loanIntrest}
              onChange= {this.handleInputChange}
              type="float"
              name="loanIntrest"
              placeholder="Cost"/>
            <Input
              defaultValue={item.loanTerm}
              onChange= {this.handleInputChange}
              type="float"
              name="loanTerm"
              placeholder="Cost"/>
	      		<Button
              id = {"submit " + item.id}
              style ={{display:this.state.showSubmit}}
              onClick={this.caclulate}>
              Calculate
            </Button>
	      	</FormGroup>
	      </Form>
	    </div>
    );
  }
}
