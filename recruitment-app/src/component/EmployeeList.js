import {useEffect, useState, ReactDOM} from "react";
import Employee from "./Employee";



function EmployeeList(){
    
    const [employess, setEmployess] =useState([
        {
        name: "Saurabh Chauhan",
        email: "saurabh311@gmail.com",
        phone: "734940044",
        skills: "Java, React, JavaScript, HTML, CSS, Python",
        avatar: "https://i.imgur.com/t9HFQvX.png",
        },
        {
        name: "Poonam",
        email: "poonam@gmail.com",
        phone: "734940055",
        skills: "C++, Python, SQL",
        avatar: "https://i.imgur.com/ebHfuth.png",
        },
        {
        name: "Robin ",
        email: "robin312@gmail.com",
        phone: "7349404543",
        skills: "C#, Python, SQL",
        avatar: "https://i.imgur.com/Q9qFt3m.png", 
    
        }
    ]);
    function handleAddEmployee(){
        setEmployess((prevState)=>{
            return [
                ...prevState,
                {
                    name: "Peter",
                    email: "peter44@gmail.com",
                    phone: "734944455",
                    skills: "Java, Python, SQL, Javacript",
                    avatar: "https://i.imgur.com/t9HFQvX.png", 
            
                }
            ];
        })
    };
    function handleRemoveItem (e) {
        const name = e.target.getAttribute("name")
         setEmployess(employess.filter(item => item.name !== name));
       };
     
       return (
        <div>        
        <h3>Employee List</h3>
        <button onClick={handleAddEmployee} className = "button">Add Employeee</button>
        <div>
        {employess.map((employee) => (
            <Employee EmployeesData = {employee} />
        ))}
            {employess.map(item => {
             return (
               <button name={item.name} onClick={handleRemoveItem} className = "button">Delete</button>            
               
             );
           })}
         </div>
         </div> 
       );
     };
    
    
export default EmployeeList;