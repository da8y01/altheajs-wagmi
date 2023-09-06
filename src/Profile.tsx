import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import styled from "styled-components";
import { SendTransaction } from "./SendTxn.tsx";
import {
  computePublicKey,
  recoverPublicKey,
} from '@ethersproject/signing-key'

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
  ${({ selected }) =>
    selected &&
    `
    opacity:1;
  `}
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Profile() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (isConnected)
    return (
      <FlexContainer>
        Connected to {address}
        <button onClick={() => disconnect()}>Disconnect</button>
        <SendTransaction address="0x1234" />
      </FlexContainer>
    );
  return <button onClick={() => connect()}>Connect Wallet</button>;
}
export default Profile;
