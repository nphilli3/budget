import React from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap'
import $ from 'jquery'
import ReactDOM from 'react-dom'

export default class AgentForm extends React.Component {
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
    var url = '/agent/' + id
    $.ajax({
      url: url,
      headers: {},
      method: 'DELETE',
      success: function(response){
        console.log('succes: '+ response.toString());
      }
    })

    // const newState = this.state
    // const index = newState
    // var agentForm1 = ReactDOM.findDOMNode(deleteRef)

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
  	var url = '/agent'
    var formData = {
    	firstName: this.state.firstName,
  		lastName: this.state.lastName,
  		screenName: this.state.firstName,
  		loginId: this.state.email,
  		password: 'Zulily@123',
  		emailAddress: this.state.email,
  		department: 'service',
      group: this.state.groups[groupName]
  		// groups: {
    //     link:[{
    //       rel:"group",
    //       href: "/system/ws/v12/administration/group/" + groups[groupName]
    //     }]
    //   }
  	}
  	$.post(url, formData).done(function(data){
  		console.log(formData);
  	})
    // $.ajax({
    //   url: url,
    //   headers: {
    //     'X-egain-session':'c27bc3ef-1a37-4f29-9cee-efc4e12a9b92',
    //     'Content-Type':'application/json',
    //     'X-Frame-Options': 'SAMEORIGIN'
    //   },
    //   method: 'POST',
    //   dataType: 'json',
    //   data: formData,
    //   success: function(data){
    //     console.log('succes: '+data);
    //   }
    // });
    event.preventDefault()
    var agentForm1 = ReactDOM.findDOMNode(this.refs.agentForm1)
    agentForm1.reset()
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
	      <Form action='/addItem' ref="agentForm1">
	      	<FormGroup>
	      		<Input
              defaultValue={item.itemName}
              onChange= {this.handleInputChange}
  	      		type="text"
  	      		name="itemName"
  	      		placeholder="First Name"/>
              <Input
                defaultValue={item.itemCost}
                onChange= {this.handleInputChange}
                type="number"
                name="itemCost"
                placeholder="First Name"/>


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
