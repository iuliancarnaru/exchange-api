import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DisplayData from "./DisplayData";

function App() {
  const [data, setData] = useState({ loading: true, data: null });

  const getData = async endpoint => {
    fetch(endpoint)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error(`${res.status} : Unable to fetch data from API...`);
        }
      })
      .then(json => {
        setData({ loading: false, data: json });
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData(`https://api.exchangeratesapi.io/latest`);
  }, []);

  return (
    <MainWrapper>
      <h1>Foreign exchange rates</h1>
      <p>Rates are quoted against the Euro by default</p>
      {data.loading ? "Loading..." : <DisplayData data={data} />}
    </MainWrapper>
  );
}

export default App;

const MainWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  font-family: "PT Sans", sans-serif;
  box-sizing: border-box;
  padding: 20px;
  text-rendering: optimizeLegibility;
`;

//https://api.exchangeratesapi.io/latest
