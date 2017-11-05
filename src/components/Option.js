import React from 'react';

 const Option = (props) => {
  return (
    <div>
      { props.optionText }
      <button onClick={() =>{
        props.handleDeleteOption(props.optionText);
      }}
      >
        Remove
      </button>
    </div>
  )  
}

export default Option;