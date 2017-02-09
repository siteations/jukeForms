import React from 'react';
import { Link } from 'react-router';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';


export default class FilterableArtistsContainer extends React.Component {
	constructor(props){
		super(props);
		this.state = { value: '' };
		this.collecting = this.collecting.bind(this);
		this.filtering = this.filtering.bind(this);
	}

	collecting(e){
		this.setState({ value: e.target.value });
	}

	filtering(){
		return this.props.artists.filter(artist =>{

			return this.state.value === artist.name
		})
	}

	render(){
		console.log(this.props, this.state);

		return (
		        <div>
		        	<FilterInput filter={this.collecting} />
		        	<Artists artists={this.filtering()} />
		        </div>
		)
	}
}
