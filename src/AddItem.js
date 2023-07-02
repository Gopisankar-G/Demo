import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  
const inputRef = useRef()

  return (
    <form className = 'addForm' onSubmit={handleSubmit}>
      <div style={{ display: 'flex' }}>
        <div>
        <label htmlFor="addItem"> Add Item</label> 
        <input
            autoFocus
            ref={inputRef}
            id = 'addItem'
            type="text"
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        /></div>
      
        <button
            type='submit'
            aria-label = 'Add Item'
            onClick={ () => inputRef.current.focus()}
        >
            <FaPlus />
        </button>    
        </div>
    </form>    
  )
}

export default AddItem