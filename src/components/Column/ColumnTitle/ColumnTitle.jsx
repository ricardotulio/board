import React from 'react'

const ColumnTitle = ({ children }) => {
  if( typeof children === 'string' || children instanceof String )
    return <h1>{ children }</h1>
  return <h1>Column Title</h1>
}

export default ColumnTitle
