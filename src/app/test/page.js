'use client';
import { Button } from '@/components'
import React from 'react'
import Child from './child';

function Test() {
     const [count, setCount] = React.useState(0);
     const [show, setShow] = React.useState(true);
     return (
          <>
               <div>{count}</div>
               <Button className="text-white" onClick={e => {
                    setCount(prev => prev + 1);
               }}>Increase</Button >
               <Child show={show} />
          </>
     )
}

export default Test