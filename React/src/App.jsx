import { rules } from 'eslint-plugin-react-refresh';

import { useState } from 'react';
import { useEffect } from 'react';


// function Greeting(props){
//   var age=54;
//   return(
//     <div>
//       <h1>Namaste{props.name}</h1>
//       <p>{age}</p>
//     </div>
//   );
// }

//  function Message(props){
//    return(
//     <p>{props.text}</p> 
//    )
//  }

//  function App(){
//   return(
//     <>
//       <Greeting name="Aayush" />
//       <Greeting name="Lalit"/>
//     </>
//   );
// }

//  function App(){
//    return(
//      <>
//        <Message text="Text goes here"/>
//      </>
//    );
//  }


//  function Greeting({ age }){
 // var age = 17;

/*  if(age>18){
    return <h1>You're legal to Drive</h1>
  }
  else{
    return <h1>You are not legal to drive</h1>
  }
*/
// return (
//   <h1>
//     {age>18? "You are legal to drive":"You are not legal to drive"} //using ternary operators
//   </h1>
// );
// }
// function App(){
//   return(
//     <>
//       {
//         <Greeting age="15"/>
//       }

//     </>
//   )

// }

// function handleClick(){
//   alert("Buttion Clicked!");
// }

// function App(){
//   const[count, setCount]= useState(0);
//   return(
//   //   <>
//   //   <button onClick={handleClick}>Click ME!</button>
//   //  </> 
//       <>
//       <h1>Counter;{count}</h1>
//       <button onClick={()=> setCount(count+1)}>Increase count</button>
//       <button onClick={()=> setCount(count-1)}>Decrease Count</button>
//       </>
//   );
// }

// function App() {
//   const [name,setName]=useState("");
//   return(
//     <>
//       <input 
//       type="text"
//       value={name}
//       onChange={(e)=>setName(e.target.value)}
//       placeholder="Enter your name"
//       />
//       <p>{name}</p>
//     </>
//   );

// }

// function App(){
//   const[state,setState]= useState({
//     username:"",
//     email:"",
//     password:"",
//   });

//   function handleState(e){
//     const{name,value}=e.target;
//     setState({
//       state,
//       [name]: value,
//     });
//   }

//   function handleSubmit(e){
//     e.preventDefault();
//     alert(
//       `Username:${state.username},Email:${state.email},Password:${state.password}`
//     );
//   }

//   return(
//     <form onSubmit={handleSubmit}>
//       <input 
//         type="text"
//         name="username"
//         placeholder="username"
//         value={state.username}
//         onChange={handleState}
//       />
//       <input 
//         type="text" 
//         name="email" 
//         placeholder="email"
//         value={state.email}
//         onChange={handleState} 
//       />
//       <input 
//        type="text" 
//        name="password" 
//        placeholder="password"
//        value={state.password}
//        onChange={handleState}
//       />
//       <button type='submit'>Submit</button>
//     </form>
//   );

// }

function App(){
 // const [count, setCount] = useState(0);

      /*  useEffect(()=>{
          console.log("component rendered,count:"+count);
        },[count]);

        return(
          <>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Add</button>
          </>
        )
      */
     
  const [users,setUsers]=useState([]);

  useEffect(()=>{
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res)=>res.json())
    //   .then((data)=>setUsers(data));
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
      setUsers(res.data);
    });
  },[]);

  return(
    <>
      <h1>Users List</h1>
      <ul>
        {users.map((user)=>(
          <li key={user.id}>{user.name}</li>
        ))}

      </ul>
    </>
  );
}  
export default App;