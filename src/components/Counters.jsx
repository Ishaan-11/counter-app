import React from "react";
import Counter from "./Counter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faRecycle } from '@fortawesome/free-solid-svg-icons';

function Counters(props) {
  return (
    <div>
      <button
        className="btn btn-success m-2"
        disabled={props.counters.length === 0 ? "disabled" : ""}
      >
        <FontAwesomeIcon icon={faSync} />
      </button>
      <button
        className="btn btn-primary m-2"
        disabled={props.counters.length !== 0 ? "disabled" : ""}
      >
        <FontAwesomeIcon icon={faRecycle} />
      </button>
      {props.counters.map(counter => (
        <Counter 
          counter={counter}
        />
      ))}
    </div>
  );
}

export default Counters;