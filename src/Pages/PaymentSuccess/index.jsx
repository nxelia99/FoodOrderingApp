import React from 'react'
import { Alert } from "../../Components/elements/Alert";

function PaymentSucces() {
  return (
    <div className="max-w-lg mx-auto p-4">
      <Alert variant="success">
          Your payment was successful
      </Alert>
    </div>
  )
}

export default PaymentSucces