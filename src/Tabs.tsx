import { useState } from "react";
import styled from "styled-components";

import TotalBlocks from "./TotalBlocks";
import AverageBlockTime from "./AverageBlockTime";
import TotalTransactions from "./TotalTransactions";
import WalletAddresses from "./WalletAddresses";
import GasTracker from "./GasTracker";
// import SubmitMsgSend from "./SubmitMsgSend";
import QueryAccount from "./QueryAccount";

type TabProps = {
  selected: boolean;
};
const Tab = styled.button<TabProps>`
  font-size: 15px;
  padding: 10px 60px;
  margin: 10px 1px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  color: black;
  ${({ selected }) =>
    selected &&
    `
    opacity:1;
  `}
`;

/*
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ButtonGroup = styled.div`
    display:flex;
`;
*/

const types = ['Total blocks', 'Average block time', 'Total transactions', 'Wallet addresses', 'Gas tracker', 'Query account'];

function Tabs() {
  const [active, setActive] = useState(types[0])

  return (
    <>
      <div>
        {types.map(type => (
          <Tab key={type} selected={active===type} onClick={() => setActive(type)}>
            {type}
          </Tab>
        ))}
      </div>
      {active === types[0] ? (<TotalBlocks />): (null)}
      {active === types[1] ? (<AverageBlockTime />): (null)}
      {/* {active === types[1] ? (<SubmitMsgSend />): (null)} */}
      {active === types[2] ? (<TotalTransactions />): (null)}
      {active === types[3] ? (<WalletAddresses />): (null)}
      {active === types[4] ? (<GasTracker />): (null)}
      {active === types[5] ? (<QueryAccount />): (null)}
    </>
  )
}
export default Tabs;
