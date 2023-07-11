// import React,{ useEffect, useState } from 'react'
// import { register } from '../services/api'
// import {ToastContainer,toast} from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from 'react-router-dom';
// import Header from './partials/Header';

// function Register() {

//   const [form, setform] = useState({
//     name:"",
//     username:"",
//     email:"",
//     password:"",
//   });

//   const [errors, setErrors] = useState(null)

//   const navigation = useNavigate();

//   useEffect(() => {
//     const user=localStorage.getItem("user");
//     if(user){
//       return navigation('/');
//     }
//   }, [])
 
  
//   const handleInputChange = (e) => {

//     setform({...form,[e.target.name]:e.target.value})
    
//   }

//   const handleSubmit=async()=>{
//     const result=await register(form);
//     console.log(result);

//     if(result.status===200){

//       if(result.data.status===201){
//         setErrors(result.data.data)
//         toast(result.data.message);
//         return;
//       }

//       if(result.data.status===200){
//         localStorage.setItem('user',JSON.stringify(result.data.data))
//         navigation('/')
//         return;
//       }

//       if(result.data.status===202){
//         toast(result.data.message)
//         return;
//       }

//     }
//     else{
//       toast("Something went wrong, please try again");
//     }

    
//   }
  

//   return (
//     <>
//     <Header/>
//     <div className="container">
//       <ToastContainer/>
//       <div className="row justify-content-md-center mt-4">
//         <div className="col-lg-5 card border-primary mt-4">
//       <div className="card text-white bg-info mb-3" >
  
//   <div className="card-body">
//     <h4 className="card-title">Register An Account</h4>
//     <div className="form-group">
//   <label htmlFor="exampleInputEmail1" className="form-label mt-4">
//     Name
//   </label>
//   <input
//     type="text"
//     name="name"
//     onChange={handleInputChange}
//     className="form-control"
//     //id="exampleInputEmail1"
//     aria-describedby="emailHelp"
//     placeholder="Enter Your Name"
//   />
//   {
//     errors?.name &&  (<small id="emailHelp" className="form-text text-danger">
//     {errors.name.msg}
//   </small>)
//   }
// </div>

//     <div className="form-group">
//   <label htmlFor="exampleInputEmail1" className="form-label mt-4">
//     Username
//   </label>
//   <input
//     type="text"
//     name="username"
//     onChange={handleInputChange}
//     className="form-control"
//     id="exampleInputEmail1"
//     aria-describedby="emailHelp"
//     placeholder="Enter a Username"
//   />
//   {
//     errors?.username &&  (<small id="emailHelp" className="form-text text-danger">
//     {errors.username.msg}
//   </small>)
//   }
// </div>



// <div className="form-group">
//   <label htmlFor="exampleInputEmail1" className="form-label mt-4">
//     E-mail 
//   </label>
//   <input
//     type="email"
//     name="email"
//     onChange={handleInputChange}
//     className="form-control"
//     //id="exampleInputEmail1"
//     aria-describedby="emailHelp"
//     placeholder="Enter Your E-mail"
//   />
//   {
//     errors?.email &&  (<small id="emailHelp" className="form-text text-danger">
//     {errors.email.msg}
//   </small>)
//   }
// </div>

// <div className="form-group">
//   <label htmlFor="exampleInputEmail1" className="form-label mt-4">
//     Password
//   </label>
//   <input
//     type="password"
//     name="password"
//     onChange={handleInputChange}
//     className="form-control"
//     //id="exampleInputEmail1"
//     aria-describedby="emailHelp"
//     placeholder="Enter a Password"
//   />
//   {
//     errors?.password &&  (<small id="emailHelp" className="form-text text-danger">
//     {errors.password.msg}
//   </small>)
//   }
// </div>
// <div className="row justify-content-md-center form-group mt-4">
// <button type="button" onClick={handleSubmit} class="col-sm-6 btn btn-warning">Register</button>
// </div>

    
//   </div>
// </div>
// </div>

// </div>
// </div>
      

      
      
// </>
//   );
// }

// export default Register



import React, { useEffect, useState } from 'react';
import { register } from '../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Header from './partials/Header';

function Register() {
  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState(null);

  const navigation = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      return navigation('/');
    }
  }, []);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const result = await register(form);
    console.log(result);

    if (result.status === 200) {
      if (result.data.status === 201) {
        setErrors(result.data.data);
        toast(result.data.message);
        return;
      }

      if (result.data.status === 200) {
        localStorage.setItem('user', JSON.stringify(result.data.data));
        navigation('/');
        return;
      }

      if (result.data.status === 202) {
        toast(result.data.message);
        return;
      }
    } else {
      toast('Something went wrong, please try again');
    }
  };

  return (
    <>
      <Header />
      <div className="container" style={{ borderRadius: '5px' }}>
        <ToastContainer />
        <div className="row justify-content-md-center mt-4">
          <div className="col-lg-5 card border-primary mt-4">
            <div className="card text-white bg-info mb-3">
              <div className="card-body">
                <h4 className="card-title">Register An Account</h4>
                <div className="form-group">
                  <label htmlFor="name" className="form-label mt-4">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    className="form-control"
                    id="name"
                    aria-describedby="nameHelp"
                    placeholder="Enter Your Name"
                    style={{ borderRadius: '5px' }}
                  />
                  {errors?.name && (
                    <small id="nameHelp" className="form-text text-danger">
                      {errors.name.msg}
                    </small>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="username" className="form-label mt-4">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    onChange={handleInputChange}
                    className="form-control"
                    id="username"
                    aria-describedby="usernameHelp"
                    placeholder="Enter a Username"
                    style={{ borderRadius: '5px' }}
                  />
                  {errors?.username && (
                    <small id="usernameHelp" className="form-text text-danger">
                      {errors.username.msg}
                    </small>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label mt-4">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter Your E-mail"
                    style={{ borderRadius: '5px' }}
                  />
                  {errors?.email && (
                    <small id="emailHelp" className="form-text text-danger">
                      {errors.email.msg}
                    </small>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="form-label mt-4">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    className="form-control"
                    id="password"
                    aria-describedby="passwordHelp"
                    placeholder="Enter a Password"
                    style={{ borderRadius: '5px' }}
                  />
                  {errors?.password && (
                    <small id="passwordHelp" className="form-text text-danger">
                      {errors.password.msg}
                    </small>
                  )}
                </div>
                <div className="row justify-content-md-center form-group mt-4">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="col-sm-6 btn btn-warning"
                    style={{ borderRadius: '5px' }}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
