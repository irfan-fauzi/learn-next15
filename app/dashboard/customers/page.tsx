import React from 'react'

const CustomerPage = async () => {
  console.log('wait')
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log('resolve')
  return (
    <div>
      <p>Customers page</p>
    </div>
  )
}

export default CustomerPage