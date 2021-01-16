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
        onClick={props.onReset}
      >
        <FontAwesomeIcon icon={faSync} />
      </button>
      <button
        className="btn btn-primary m-2"
        disabled={props.counters.length !== 0 ? "disabled" : ""}
        onClick={props.onRestart}
      >
        <FontAwesomeIcon icon={faRecycle} />
      </button>
      {props.counters.map(counter => (
        <Counter
          key={counter.id} 
          id={counter.id}
          value={counter.value}
          onIncrementDecrement={props.onIncrementDecrement}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
}

export default Counters;