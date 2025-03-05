import React from "react";
 
const ListAndKeys = () => {
  // Array of names
  const names = ["Alice", "Bob", "Charlie", "David"];
 
  // Array of employees
  const employees = [
    { id: 1, name: "Supriya" },
    { id: 2, name: "Mrudhula" },
    { id: 3, name: "Swetha" }
  ];
  const activeEmployees = [
    { id: 1, name: "Supriya", active:false },
    { id: 2, name: "Mrudhula",active:true },
    { id: 3, name: "Swetha",active:true }
  ];
 
  return (
    <div>
      <h2>Names List</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
 
      <h2>Employees List</h2>
      <ul>
      { employees.map((employee)=>(
            <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
        
      <h2>Active Employees list</h2>  
      <ul>
      { activeEmployees
            .filter((activeEmployees)=>activeEmployees.active)
            .map((activeEmployees)=>(
            <li key={activeEmployees.id}>{activeEmployees.name}</li>
        ))}
      </ul>

      
    </div>
  );
}

 
export default ListAndKeys;