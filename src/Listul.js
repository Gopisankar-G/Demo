import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const Listul = ({item, handleCheck, handleDelete}) => {
  return (
    <div className="item">
            <label 
                style={(item.checked) ? {color:'black',textDecoration : 'line-through'} : null}
                onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
                <input
                  type = "checkbox"
                  onChange={()=>handleCheck(item.id)}
                  checked = {item.checked}
                />
            <FaTrashAlt
                onClick={()=>handleDelete(item.id)}
                role="button"
                tabIndex="0"
            />
          </div>
  )
}

export default Listul