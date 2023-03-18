import React from 'react';

export const Small = React.memo(({ value }) => {

    console.log(' Me llame de nuevo :( ');

  return (
    <small>{ value }</small>
  )
})
