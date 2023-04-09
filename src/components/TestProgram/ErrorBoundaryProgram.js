import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';


function ErrorHandler({error}) {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

function City({name}) {
    return <div>Hello, visit {name.toUpperCase()}</div>
}

function Country({capital}) {
    return <div>Hello, visit {capital.toUpperCase()}</div>
}

export function ErrorBoundaryProgram() {
  return (
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <Country />
      <City />
    </ErrorBoundary>
  )
}


