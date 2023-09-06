import {useState, useEffect} from "react"
import { generateEndpointAccount } from '@althea-net/provider'
import { ResourceNotFoundRpcError } from "viem"

// The response format is available at @althea-net/provider/rest/account/AccountResponse.
// Note that the `pub_key` will be `null` if the address has not sent any transactions.
/*
  account: {
    '@type': string
    base_account: {
      address: string
      pub_key?: {
        '@type': string
        key: string
      }
      account_number: string
      sequence: string
    }
    code_hash: string
  }
*/

function QueryAccount() {
  const [accountData, setAccountData] = useState({})
  // const [errorMessage, setErrorMessage] = useState({})
  const [errorMessage, setErrorMessage] = useState({})

  // const address = 'althea1...'
  const address = "althea1ka5ep6vh8493smdn932afclda9hldcpm2wqhqw"

  // Find node urls for either mainnet or testnet here:
  // https://docs.evmos.org/develop/api/networks.
  // const nodeUrl = 'https://grpc.bd.evmos.org:9090'
  const nodeUrl = 'https://althea.zone'
  // const nodeUrl = 'https://althea.zone:8545'
  // const nodeUrl = 'https://althea.zone:9090'
  const queryEndpoint = `${nodeUrl}${generateEndpointAccount(address)}`

  const restOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }

  useEffect(() => {
    function startFetching() {
      setAccountData({});

      // Note that the node will return a 400 status code if the account does not exist.
      fetch(
        queryEndpoint,
        restOptions,
      )
      .then(response => {
        console.log(response)
        if (!ignore) {
          if (!response['ok']) setErrorMessage({status: response.status, statusText: response.statusText})
          else setAccountData(response);
        }
      })
      .catch(error => {
        console.log(error)
        setErrorMessage(error)
      })
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    }
  }, []);

  return (
    <>
      <h2>Althea query account</h2>
      {Object.keys(errorMessage).length === 0 ?
        <div>{JSON.stringify(accountData)}</div> :
        <div style={{color: 'red'}}>{JSON.stringify(errorMessage)}</div>
      }
    </>
  )
}

export default QueryAccount;
