import React from "react";
import styled from "styled-components";

const DisplayData = props => {
  const { rates } = props.data.data;

  return (
    <FlexContainer>
      {Object.keys(rates).map((key, index) => (
        <Card key={key}>
          <p>{key}</p>
          <Price>{parseFloat(rates[key]).toFixed(3)}</Price>
          <p> - </p>
        </Card>
      ))}
    </FlexContainer>
  );
};

export default DisplayData;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  border: 0.5px solid grey;
  border-radius: 5px;
  padding: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
  flex: 0 1 100px;
  text-align: center;
  background-color: #34495e;
  color: white;
`;

const Price = styled.span`
  color: #27ae60;
  font-weight: bolder;
`;
