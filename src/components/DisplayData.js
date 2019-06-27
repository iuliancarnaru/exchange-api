import React from "react";
import styled from "styled-components";

const DisplayData = props => {
  const { rates } = props.data.data;

  return (
    <div>
      <h1>Data comes here</h1>
      {Object.keys(rates).map((key, index) => (
        <div key={key}>
          <p>{key}</p>
          <p>{rates[key]}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
