import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Counter(props) { 
  return (
    <div className="row">
      <div className="col-md-1">
        <span 
          style={{ fontSize: 24 }} 
          className={`badge m-2 badge-${props.value === 0 ? "warning" : "primary"}`}
        >
          {props.value || "Zero"}
        </span>
      </div>
      <div className="col-md-4">
        <button
          className="btn btn-secondary"
          onClick={() => props.onIncrementDecrement(props.id, true)}
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
        <button
          className="btn btn-info m-2"
          disabled={props.value === 0 ? "disabled" : ""}
          onClick={() => props.onIncrementDecrement(props.id, false)}
        >
          <FontAwesomeIcon icon={faMinusCircle} />
        </button>
        <button
          className="btn btn-danger"
          onClick={() => props.onDelete(props.id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
}

export default Counter;