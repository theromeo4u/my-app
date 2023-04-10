import React, { Component, useState } from 'react';
// import ClassComp from './ClassComp';
// import FunComp from './FunComp';
import Students from './PropsInFunctional';
import './App.css';

// function App() {
//   function apple()
//   {
//     alert("Function called");
//   }
//   return (
//     <div className="App">
//      <ClassComp />
//      <FunComp />
//     <button onClick={apple}>clickme</button>
//     </div>
//   );
// }

// function App(){
//   const [data,setData] = useState(0);
//   function updateData()
//   {
//     setData(data+1);
//   }                                          //How to use State in Functional Component
//   console.warn("_________");
//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={updateData}>Click Me</button>
//     </div>
//   );

// }

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: 1
//     }
//   }
//   apple()
//   {
//     this.setState({data:this.state.data+1})
//   }
//   render()                                     //How to use State in Functional Component
//   {
//     return (
//       <div className="App" >
//         <h1>{this.state.data}</h1>
//         <button onClick={() => this.apple()}>Click Me</button>
//       </div>
//     );
//   }
// }



// function App(){
//   const [name,setName] = useState("Subodh");
//   return (
//     <div className="App">
//       <h1>Props in React</h1>                    //Props in Functional Components
//       <Students name={name}/>
//       <button onClick={() => {setName("Subodhkumar")}} >Update Name</button>
//     </div>
//   )
// }

// import PropsInClass from './PropsInClass';
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state={
//         name: "Subodh"
//     }
//   }
//   render() {
//     return (                               //Props in Class Components
//       <div className="App">
//         <h1>Props in Class</h1>
//         <PropsInClass name={this.state.name} />
//         <button onClick={() => {this.setState({name : "SubodhKumar"})}}>Update Data</button>
//       </div>
//     )
//   }
// }


// function App(){
//   const [data,setName] = useState(null);
//   const [Print,printData] = useState(false);
//   function getData(val){
//     console.log(val.target.value)
//     setName(val.target.value)
//     printData(false)
//   }
//   return (
//     <div className="App">                    //Get Value From Input Box
//     {
//       Print?
//       <h1>{data}</h1>
//       :null
//     }
//       <input type='text' onChange={getData}/>
//       <button onClick={()=>{printData(true)}}>Print Data</button>
//     </div>
//   )
// }


// function App(){
//   const [status,setStatus] = useState(false);
//   return (
//     <div className="App">                      //How to Hide and Show Elements in React Js
//     {
//       status? <h1>Hello World</h1> : null
//     }
//       <button onClick={()=>{setStatus(!status)}}>Toggle</button>
//       {/* <button onClick={()=>{setStatus(true)}}>Show</button> */}
//     </div>
//   )
// }



function App(){
  function getFormData(e){
    e.preventDefault()
  }
  return (
    <div className="App">
      <form onSubmit={getFormData}>
        <h1>Hello World</h1>
        <input type='text' placeholder='enter your name'/>
        <br/><br/>
        <select>
          <option>Select Option</option>
          <option>Mumbai</option>
          <option>Thane</option>
          <option>Bhiwandi</option>
        </select>
        <br/><br/>
          <input type='checkbox' />
          <span>Accept terms and condition</span>
          <br/><br/>
          <button type='submit'>Submit</button>
      </form>
    </div>
  )
}







export default App;
