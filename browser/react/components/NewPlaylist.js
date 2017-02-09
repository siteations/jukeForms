import React from 'react';

const NewPlaylist = (props) => {
	//console.log(props);

  return (
    <div>
    <div display="" className="alert alert-warning">{props.warning}</div>
    <form onSubmit={props.sub} className="form-group" style={{marginTop: '20px'}}>
      <input
        className="form-control"
        placeholder="Enter playlist name"
        onChange = {props.col}
        value = {props.stval}
      />
      <button disabled={!props.valid} type="submit" value="Submit">submit</button>
    </form>
    </div>
  );
}

export default NewPlaylist;
