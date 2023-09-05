import React, { useState } from "react";
import styled from 'styled-components';

import "./App.css";
import Profile from "./Profile.tsx";
//import SubmitMsgSend from './SubmitMsgSend';
//import SubmitMsgLiquify from './SubmitMsgLiquify';
import Tabs from './Tabs.tsx';

import { WagmiConfig, createConfig } from "wagmi";
import { createPublicClient, http } from "viem";
import { altheaL1 } from "./AltheaL1.tsx";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: altheaL1,
    transport: http(),
  }),
});


type TabProps = {
  selected: boolean;
}
const Tab = styled.button<TabProps>`
  font-size: 15px;
  padding: 10px 60px;
  margin: 10px 1px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ selected }) => selected && `
    opacity:1;
  `}
`;

const ButtonGroup = styled.div`
    display:flex;
`;

const types = ['Bank Send', 'Microtx Liquify'];

function App() {
  return (
    <WagmiConfig config={config}>
      <Profile />
      <Tabs />
    </WagmiConfig>
  );
}

export default App;
