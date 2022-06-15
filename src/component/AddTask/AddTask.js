import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import './AddTask.css'
import {AddItemToData} from '../../JS/EditData';

const AddTask = () => {
  //disabled={true}
    const dispatch = useDispatch();
    const [newtodo, setNewtodo] = useState("")
    const handleChange = (e) => {
        setNewtodo(e.target.value)
        
    }
    const handleClick = () => {
        dispatch(AddItemToData(newtodo))
        setNewtodo('')
        
    }
  return (
    <div className='containeradd'>
        <input type="text" value={newtodo} placeholder="Add task" onChange={handleChange}/>
        <button className='addbtn' onClick={handleClick} disabled={newtodo==""?true:false} >Add</button>
    </div>
  )
}

export default AddTask