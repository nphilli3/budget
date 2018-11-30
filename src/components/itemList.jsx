
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
    		costs: []
    	};

    	this.getCost = this.getCost.bind(this)
    	this.costList = this.costList.bind(this)
    	this.toggle = this.toggle.bind(this)


  	}
  	toggle() {
    	this.setState({ collapse: !this.state.collapse });

  }

	getCost(event){

	  	// $.get('/cost').done(function(data){
      var data = {rows:[
        {id: 1, itemName:'car', itemCost:439},
          {id: 2, itemName:'car2', itemCost:500},
          {id: 3, itemName:'Cabelas', itemCost:400},
          {id: 4, itemName:'CapitalOne', itemCost:200},
          {id: 5, itemName:'Collect', itemCost:100}
        ]
      }
	  		this.setState({
	  			costs:data.rows
	  		})
			this.costList(data)
			this.toggle()
    }//.bind(this))
    // }

	costList(){

		const list = this.state.costs.map((row)=>{
			var title = row.itemName + ' ' + row.itemCost

				return (
					<div key={row.id}>
						<MyDropdown ref={row.id} label={title}>
							<CostForm row={row}></CostForm>
						</MyDropdown>

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
			<div>
    			<Button onClick={this.getCost}>Cost list</Button>
				<MyCard>
					{ this.costList() }
				</MyCard>
			</div>
    	)
    }
}
