import { useState } from 'react';
import './App.css';

function App() {

 const data = [
   {
     name: "helen",
     bday: "5/3/1990",
     gender: "female"
   },
   {
     name: "harry",
     bday: "5/18/1990",
     gender: "male"
   },
   {
     name: "sally",
     bday: "9/18/1998",
     gender: "female"
   },
   {
     name: "will",
     bday: "7/13/1984",
     gender: "male"
   },
   {
     name: "trina",
     bday: "12/30/2000",
     gender: "female"
   }
 ]
 const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="App">
      <div> 
            <input 
            id='search' 
            type="text" 
            placeholder='search' 
            onChange={event=> {
                setSearchTerm(event.target.value)
            }}/> 
            {data.filter((val) => {
                if (searchTerm == "") {
                    return val
                    //if the searched item includes the search tearms (i put by name)
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return (
                    <div className='place' key={key}>
                        <h1>{val.name}</h1>
                    </div>
                );
            })}
        </div>
    </div>
  );
}

export default App;
