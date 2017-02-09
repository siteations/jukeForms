import React from 'react';
import { Link } from 'react-router';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';
import { hashHistory } from 'react-router';
//import FilterInput from '../components/FilterInput';


export default class PlaylistContainer extends React.Component {
	constructor(props){
		super(props);
		this.state = { value: '' , dirty: false };
		this.collecting = this.collecting.bind(this);
		this.submitting = this.submitting.bind(this);
		this.isDirty = this.isDirty.bind(this);
		this.isNotTooLong = this.isNotTooLong.bind(this);
		this.isValid = this.isValid.bind(this);

	}

	collecting(e){
		this.setState({ value: e.target.value, dirty:true });
		//console.log(this.state);
	}

	submitting(e){
		e.preventDefault();
		//console.log(this.state.value);

		this.props.createList(this.state.value);
		//console.log(this.props.selectedPlaylist);
 		const path = `/playlists/${this.props.selectedPlaylist.id}/`;
    hashHistory.push(path);
		this.setState({ value: '' , dirty: false});


	}

	isDirty(){
		return this.state.dirty;
	}

	isNotTooLong(){
		return this.state.value.length<16;
	}

	isValid(){
		//console.log(this.isDirty() && this.isNotTooLong());
		return this.isDirty() && this.isNotTooLong();
	}

	warning(){
		if (this.isDirty()===true){
			if (!this.isNotTooLong()){
				return 'Warning: your name is too long';
			} else if (this.state.value===''){
				return 'Warning: playlist name cannot be empty';
			}
		}
	}

	render(){
		//console.log(this.props, this.state);

		return (
		        <div>
		        	<NewPlaylist col={this.collecting} sub={this.submitting} stval={this.state.value} valid={this.isValid()} warning={this.warning()}/>
		        </div>
		)
	}
}
