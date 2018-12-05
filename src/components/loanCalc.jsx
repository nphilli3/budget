import React from 'react';
import {Form, FormGroup, Input, Button, Label, Row, Col} from 'reactstrap'
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
  }

  render() {
    return (
	    <div>
	      <Form action='/addItem' ref="itemForm">
	      	<FormGroup>
            <Row>
              <Label sm={2}>Loan Amount: </Label>
              <Col sm={10}>
    	      		<Input
                defaultValue={this.state.loanAmount}
                onChange= {this.handleInputChange}
      	      	type="float"
      	      	name="loanAmount"
      	      	placeholder="Item"/>
              </Col>
            </Row>
            <Row>
              <Label sm={2}>APR: </Label>
              <Col sm={10}>
                <Input
                defaultValue={this.state.loanIntrest}
                onChange= {this.handleInputChange}
                type="float"
                name="loanIntrest"
                placeholder="Cost"/>
              </Col>
            </Row>
            <Row>
              <Label sm={2}>Loan Term: </Label>
              <Col sm={10}>
                <Input
                defaultValue={this.state.loanTerm}
                onChange= {this.handleInputChange}
                type="float"
                name="loanTerm"
                placeholder="Cost"/>
              </Col>
            </Row>
            <Button

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
