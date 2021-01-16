import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Counter(props) { 
  return (
    <div className="row">
      <div className="col-md-1">
        <span 
          style={{ fontSize: 24 }} 
          className={`badge m-2 badge-${props.counter.value === 0 ? "warning" : "primary"}`}
        >
          {props.counter.value || "Zero"}
        </span>
      </div>
      <div className="col-md-4">
        <button
          className="btn btn-secondary"
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
        <button
          className="btn btn-info m-2"
          disabled={props.counter.value === 0 ? "disabled" : ""}
        >
          <FontAwesomeIcon icon={faMinusCircle} />
        </button>
        <button
          className="btn btn-danger"
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
}

export default Counter;