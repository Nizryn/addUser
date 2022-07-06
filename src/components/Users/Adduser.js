import {React, useState} from "react";

import Card from '../UI/Card';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css';



const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
   const [enteredAge, setEnteredAge] = useState('');
   const [error, setError] = useState();

   const addUserHandler =(event) => {
       event.preventDefault();  
       var letters = /^[A-Za-z]+$/; 
       if(enteredUsername.value.match(letters)){
        
        alert('Your name have accepted : you can try another'); 
        return true;
       } else {
        alert('Your name have accepted');
        return false;
       }


       if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ) {
        setError ({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty value).'
        });
        return;
       }
        if (+enteredAge <1) {
            setError ({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0).'
            });
            return;
        }

       props.onAddUser(enteredUsername, enteredAge);
    //    para mairase ang laman ng textbox after submit button
        setEnteredUsername (''); 
       setEnteredAge('');
   }; 

     const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
     };

     const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
     };

     const errorHandler = () => {
         setError(null);
     };

     return (
    <div>
      {error && (
      <ErrorModal
       title={error.title} 
       message={error.message} 
       Onpindot={errorHandler} 
       />
    )}
        <Card className={classes.input}>
         <form onSubmit={addUserHandler}>   
            <label htmlFor="username">Username</label>   
            <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
            <label htmlFor="Age">Age (Years)</label>
            <input id="Age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
            <Button type="submit">Add User</Button>
         </form>
      </Card>
    </div>
     );
};

export default AddUser;