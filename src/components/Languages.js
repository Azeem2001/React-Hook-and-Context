import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import InputHook from './InputHook';
const Languages = () => {
    
    const  [computerLanguages, setcomputerLanguages] = useState([
        {id:1,name:'PHP',email:"example@gmail1.com"},
        {id:2,name:'NodeJS',email:"example@gmail2.com"},
        {id:3,name:'Phython',email:"example@gmail3.com"},
        {id:4,name:'C++', email:"example@gmail4.com"}
        
    ])
        // const [name, setName] =useState('')
        const [name,setName,clearName] = InputHook("")
        const [email,setEmail,clearEmail] = InputHook("")
        const [count,setCount]=useState(0)
        
        const inputHandle = e =>{
          setName(e.target.value); 
        }


      const addLanguages = e =>{
         e.preventDefault();
         setcomputerLanguages([...computerLanguages,{id:Math.random().toFixed(3) * 4,name:name , email:email}])
         clearName();
         clearEmail()
        };
        useEffect(()=>{
          console.log('Use Effect method run!')
        },[count])
        



    return (
        <React.Fragment>
          <h1>{count}</h1>
          <table className='table'>
              <thead>
                <tr>
                    <th>ID</th>                
                    <th>NAME</th>
                    <th>Email</th>
                </tr>
              </thead>
              <tbody>
                
                    {computerLanguages.map(Languages => (
                       <tr key={Languages.id}>
                        <td>{Languages.id}</td>
                       <td>{Languages.name}</td>
                       <td>{Languages.email}</td> 
                       </tr>
                    ))}
                    
              </tbody>
          </table>
          <form onSubmit={addLanguages}>
             <div className="form-group">
                <input type="text" className='form-control' value={name} onChange ={setName} placeholder='Add Language...'/>
                </div>  
                <div className="form-group">
                <input type="email" className='form-control mt-3' value={email} onChange ={setEmail} placeholder='Add Language...'/>
                </div>                    
                <div className="form-group">
                  <input type="submit" className='btn btn-primary mt-4 ' value="Add Languages"/>
                 
                  </div>
          </form>
          <div className="form-group">
            <input type="submit" value="Count" className='btn btn-info mt-3' onClick={()=>setCount(count + 1)} />
          </div>
          </React.Fragment>
          
    )
}

export default Languages
