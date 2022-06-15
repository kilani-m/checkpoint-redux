import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './ChangeTodo.css'
import {changeData} from '../JS/EditData'

const ChangeTodo = () => {
    let params = useParams()
    let navigate = useNavigate();

    const count = useSelector((state) => state.EditData.data)
    const test = (count.filter(el=>(el.id===params.id))[0])

    const dispatch = useDispatch();
    const [newtodo, setNewtodo] = useState(test.desc)
    const handleChange = (e) => {
        setNewtodo(e.target.value)
    }
    const handleClick = () => {
        dispatch(changeData({id:params.id,desc:newtodo}))
        setNewtodo('')
        navigate('/')
    }
    return (
        <div className='containerchange'>
            <input type="text" value={newtodo} placeholder="Add task" onChange={handleChange}/>
            <button onClick={handleClick} disabled={newtodo==""?true:false}>Edit</button>
            
        </div>
    )
}

export default ChangeTodo