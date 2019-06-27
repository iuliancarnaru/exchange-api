import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

function App() {
  const [data, setData] = useState({ loading: true, data: null });

  useEffect(() => {
    if (localStorage.getItem("data") === null) {
      axios.get(`https://api.exchangeratesapi.io/latest`).then(response => {
        setData({ loading: false, data: response.data });
        localStorage.setItem("data", JSON.stringify(response.data));
      });
    }
  }, []);

  return (
    <MainWrapper>
      <h1>Foreign exchange rates</h1>
      {/* {data.loading ? "Loading..." : <code>{JSON.stringify(data)}</code>} */}
    </MainWrapper>
  );
}

export default App;

const MainWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  font-family: "PT Sans", sans-serif;
  box-sizing: border-box;
`;

//https://api.exchangeratesapi.io/latest
