import * as React from 'react'

/* do a string type input parameter */
export function SendTransaction(address: string) {
  return (
    <form>
      <input aria-label="Recipient" placeholder="0xA0Cf…251e" />
      <input aria-label="Amount (ether)" placeholder="0.05" />
      <button>Send</button>
    </form>
  )
}