import logo from './logo.svg';
import './App.css';
import { type } from '@testing-library/user-event/dist/type';

function App() {

  let typeParameter = "None";


  function TypeSelect(){
    // let typeParameter = '';
    if(document.getElementById("typeselect").value == "1"){
        typeParameter = "None";
    }
    else if(document.getElementById("typeselect").value == "2"){
        typeParameter = "education";

    }
    else if(document.getElementById("typeselect").value == "3"){
        typeParameter = "recreational";

    }
    else if(document.getElementById("typeselect").value == "4"){
       typeParameter = "social";

    }
    else if(document.getElementById("typeselect").value == "5"){
      typeParameter = "diy";

    }
    else if(document.getElementById("typeselect").value == "6"){
      typeParameter = "charity";

    }
    else if(document.getElementById("typeselect").value == "7"){
      typeParameter = "cooking";

    }
    else if(document.getElementById("typeselect").value == "8"){
      typeParameter = "relaxation";

    }
    else if(document.getElementById("typeselect").value == "9"){  
      typeParameter = "music";

    }
    else if(document.getElementById("typeselect").value == "10"){  
      typeParameter = "busywork";

    }
      
    
    console.log(typeParameter)
  }


  







  const  fetchRandomData  = async (e) => {
    e.preventDefault();
    
    const randomActivity = document.getElementById('activity')

   const response = await fetch('http://www.boredapi.com/api/activity/');
   const randomdata = await response.json();
 
   randomActivity.innerHTML = randomdata.activity;
  
  }

  const  fetchCustomData  = async (e) => {
    e.preventDefault();

      let randomdata;

      
    const randomActivity = document.getElementById('activity')

      if(typeParameter === "None") {
        alert("Please select an option from both categories.")
      }
      else{
        const response = await fetch(`http://www.boredapi.com/api/activity?type=${typeParameter}`);
        let randomdata = await response.json();
        console.log(randomdata)
        
        randomActivity.innerHTML = randomdata.activity;
      }
      


     
 
  
  }

  return (
    <div className='form-position'>
        <form>
              <div class="mb-3">
                  <h1 className='topheading'>I'm Bored What Should I Do?</h1>
                  <br></br>
                  <h3 className='preheading'>Activity: <h3 id='activity'></h3></h3>
                  <br></br>
                 
              </div>
              
              <div class="mb-3">
                  <h3>Select from the options below or <button onClick={fetchRandomData} type="submit" class="btn btn-success">Get a random activity</button></h3>
              </div>
              <div class="mb-3">
              <select onChange={TypeSelect} id='typeselect' class="form-select" aria-label="Default select example">
                    <option value="1">Select Activity Type</option>
                    <option value="2">Education</option>
                    <option value="3">Recreational</option>
                    <option value="4">Social</option>
                    <option value="5">DIY</option>
                    <option value="6">Charity</option>
                    <option value="7">Cooking</option>
                    <option value="8">Relaxation</option>
                    <option value="9">Music</option>
                    <option value="10">Busy Work</option>

              </select>
              </div>
            
              <button onClick={fetchCustomData} type="submit" class="btn btn-success">Submit</button>
        </form>

    </div>
  );
}

export default App;
