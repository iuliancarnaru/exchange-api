import React from "react";
import styled from "styled-components";

const DisplayData = props => {
  const { rates } = props.data.data;

  console.log(rates);

  const lastWeek = {
    AUD: 1.6323,
    BGN: 1.9558,
    BRL: 4.3407,
    CAD: 1.4886,
    CHF: 1.1142,
    CNY: 7.7502,
    CZK: 25.619,
    DKK: 7.4661,
    GBP: 0.89155,
    HKD: 8.8379,
    HRK: 7.4035,
    HUF: 323.58,
    IDR: 16036.15,
    ILS: 4.0458,
    INR: 78.5065,
    ISK: 141.5,
    JPY: 121.71,
    KRW: 1312.25,
    MXN: 21.396,
    MYR: 4.6901,
    NOK: 9.6678,
    NZD: 1.7158,
    PHP: 58.159,
    PLN: 4.2556,
    RON: 4.7262,
    RUB: 71.4393,
    SEK: 10.6348,
    SGD: 1.5336,
    THB: 34.978,
    TRY: 6.5291,
    USD: 1.1307,
    ZAR: 16.1309
  };

  return (
    <FlexContainer>
      {Object.keys(rates).map((key, index) => (
        <Card key={key}>
          <p>
            <strong>{key}</strong>
          </p>
          <Price>{parseFloat(rates[key]).toFixed(3)}</Price>
          <Trend>
            {rates[key] > lastWeek[key] ? (
              <InfoUp />
            ) : rates[key] < lastWeek[key] ? (
              <InfoDown />
            ) : (
              <InfoNeutral />
            )}
          </Trend>
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
  margin-right: 10px;
  margin-bottom: 10px;
  flex: 0 1 120px;
  text-align: center;
  /* background-color: #3c6382; */
  color: #60a3bc;
`;

const Price = styled.span`
  color: white;
  font-weight: bolder;
  background-color: #34495e;
  padding: 2px 7px;
  border-radius: 5px;
`;

const Trend = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const InfoUp = styled.div`
  /* width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #e74c3c; */
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;

  border-bottom: 10px solid#e74c3c;
`;

export const InfoDown = styled.div`
  /* width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #2ecc71; */
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;

  border-top: 10px solid #2ecc71;
`;

export const InfoNeutral = styled.div`
  /* width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #f1c40f; */
  width: 20px;
  height: 5px;
  background-color: #f1c40f;
`;
