import React from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap'
import $ from 'jquery'
import ReactDOM from 'react-dom'

export default class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row:this.props,
      itemName: "",
      itemCost: 0

    }
    if(!this.props.row){
      this.state.showSubmit = ''
      this.state.showUpdate = 'none'
      this.state.showDelete = 'none'
    }else{
      this.state.showSubmit = 'none'
      this.state.showUpdate = ''
      this.state.showDelete = ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this)
    this.handelDelete= this.handelDelete.bind(this)
  }
  handelDelete(){
    if(!this.props.row){
      return
    }
    var id = this.props.row.id
    var url = '/item/' + id
    $.ajax({
      url: url,
      headers: {},
      method: 'DELETE',
      success: function(response){
        console.log('succes: '+ response.toString());
      }
    })
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handelSubmit(event) {

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
    var item = this.props.row
    if(!item){
      item = {
        itemName: null,
        itemCost: null,
      }

    }
    function getKeyByValue(object, value) {
      return Object.keys(object).find(key => object[key] === value);
    }


    return (
	    <div>
	      <Form action='/addItem' ref="itemForm">
	      	<FormGroup>
	      		<Input
              defaultValue={item.itemName}
              onChange= {this.handleInputChange}
  	      		type="text"
  	      		name="itemName"
  	      		placeholder="Item"/>
              <Input
                defaultValue={item.itemCost}
                onChange= {this.handleInputChange}
                type="number"
                name="itemCost"
                placeholder="Cost"/>


	      		<Button
              id = {"submit " + item.id}
              style ={{display:this.state.showSubmit}}
              onClick={this.handelSubmit}>
              Submit
            </Button>
            <Button
              id = {"update " + item.id}
              style ={{display:this.state.showUpdate}}
              onClick={this.handelUpdate}>
              Update
            </Button>
            <Button
              id = {"delete " + item.id}
              style ={{display:this.state.showDelete}}
              onClick={this.handelDelete}>
              Delete
            </Button>
	      	</FormGroup>
	      </Form>
	    </div>
    );
  }
}
