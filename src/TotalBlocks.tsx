import {useState, useEffect} from "react"
import {web3GetBlock} from "./services"

function TotalBlocks() {
  const [quantity, setQuantity] = useState(BigInt(0))

  useEffect(() => {
    async function startFetching() {
      setQuantity(0);
      const response = await web3GetBlock();
      // console.log(response)
      if (!ignore) {
        setQuantity(response.number);
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    }
  }, []);
  
  return (
    <>
      <h2>Total blocks</h2>
      <p>{quantity.toString() ?? "Loading..."}</p>
    </>
  )
}

export default TotalBlocks;
