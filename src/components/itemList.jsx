
import React from 'react';
import { Button, Collapse } from 'reactstrap';
import $ from 'jquery'
import MyDropdown from './myDropdown'
import CostForm from './costForm'
import MyCard from './myCard'


export default class GetCostList extends React.Component {


	constructor(props) {
    	super(props);
    	this.state = {
    		collapse:false,
    		cost: []
    	};

    	this.getCost = this.getCost.bind(this)
    	this.costList = this.costList.bind(this)
    	this.toggle = this.toggle.bind(this)


  	}
  	toggle() {

    	this.setState({ collapse: !this.state.collapse });
  }

	getCost(event){
		$.get('/item').done(function(data){
	  	this.setState({
	  		cost:data.rows
	  	})
			this.costList()
			this.toggle()
    	}.bind(this))
    }

	costList(){


		if(!this.state.cost){return}

		const list = this.state.cost.map((row)=>{
			var title = row.itemName

				return (
					<div key={row.id}>
					<MyCard ref={row.id} cardTitle ={title}>

							<CostForm row={row}></CostForm>

						</MyCard>

					</div>
				)
			}
		)
		return (
			<ul>{list}</ul>
		)
	}


    render(){
    	return(
			<MyCard>
    			<Button onClick={this.getCost}>Cost list</Button>

				<Collapse isOpen={this.state.collapse}>
					{ this.costList() }
				</Collapse>
				</MyCard>
    	)
    }
}
