import React, { useState } from 'react'

export const FruitSelectDropdown = () => {
  const [currentFruit, setCurrentFruit] = useState<any>()
  
  const changeFruit = (newFruit: React.SetStateAction<string>) => {
    setCurrentFruit(newFruit)
  }
  
  return (
    <form>
      <select 
        onChange={(event) => changeFruit(event.target.value)}
        value={currentFruit}
      >
        <option value="0">default</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    </form>
  )
}