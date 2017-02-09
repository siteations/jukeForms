import React from 'react';

const FilterInput = ({filter}) => {
  return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input
        className="form-control"
        placeholder="Enter artist name"
        onChange = {filter}
      />
    </form>
  );
}

export default FilterInput;
