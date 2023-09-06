import {useState, useEffect} from "react"
import {web3GetBlock} from "./services"

function TotalTransactions() {

  const [blockTransactions, setBlockTransactions] = useState([])

  useEffect(() => {
    async function startFetching() {
      setBlockTransactions([]);
      const {transactions} = await web3GetBlock();
      // console.log(response)
      if (!ignore) {
        setBlockTransactions(transactions);
        console.log(transactions)
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    }
  }, []);

  if (blockTransactions.length === 0) return <div>Loading...</div>;

  return (
    <>
      <h2>Total transactions for latest block: {blockTransactions.length}</h2>
      <ul>
        {blockTransactions.map((tx, i) => (<li key={i}>{i}. {tx}</li>))}
      </ul>
    </>
  )
}

export default TotalTransactions;
