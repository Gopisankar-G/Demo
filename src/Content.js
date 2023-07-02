import React from 'react'
import ItemsComp from './ItemsComp';

const Content = ({items, handleCheck, handleDelete, handleReload}) => {
    

  return (
    <main>
      {(items.length) ? ( 
        <ItemsComp
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
      ) : (
        <p className='msg'>AddItem list is Empty!.. </p>
      )
    }
    </main>
    
  )
}

export default Content