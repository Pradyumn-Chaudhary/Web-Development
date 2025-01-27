import React, { useMemo, useState } from 'react'

const nums = new Array(30000000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical:i===29000000
  }
})

const App = () => {
  const [count, setcount] = useState(0)
  const [numbers, setnumbers] = useState(nums)

  // const magicalNumber = numbers.find(e => e.isMagical);
  const magicalNumber =  useMemo(() => numbers.find(e => e.isMagical), [numbers])

  const handleSetNumbers = () => {setnumbers(new Array(10000000).fill(0).map((_, i) => {
    return {
      index: i,
      isMagical:i===9000000
    }
  }))}

  return (
    <div>
      <span>Magical Number: {magicalNumber.index}</span><br />
      <button onClick={()=>setcount(count + 1)}>
        Count: {count}
      </button><br />
      <button onClick={handleSetNumbers}>Set Numbers</button>
    </div>
  )
}

export default App
