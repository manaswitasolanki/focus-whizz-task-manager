// import React,{ useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';


// function Header({searchText, setSearchText}) {

//   const navigation=useNavigate();

//   const [user, setUser] = useState(null);

  

//   useEffect(() => {
//     const u = localStorage.getItem('user');
//     setUser(u);
  
  
//   }, [])
  

//   const handleLogout=()=>{

//     localStorage.clear();
//     navigation('/login');

//   }

//   return(
//   <nav className="navbar navbar-expand-lg bg-light"  data-bs-theme="light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Focus Whizz</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarColor01">
//       <ul className="navbar-nav me-auto">
//         <li className="nav-item">
//           <Link className="nav-link active"  to="/" > Home
//             <span className="visually-hidden">(current)</span>
//           </Link>
//         </li>
        
//         {
//           user ? <li className="nav-item">
//           <a className="nav-link" onClick={handleLogout}
//           style={{cursor:'pointer'}}>Logout</a>
//         </li>
//         :
//         <>
//         <li className="nav-item">
//           <Link className="nav-link" to="/login">Login</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/register">Register</Link>
//         </li>
//         </>
//         }
        
        
//       </ul>
//       {
//         user &&  <form className="d-flex">
//         <input className="form-control me-sm-2" type="search" placeholder="Search"
//         value={searchText}
//         onChange={(e)=>setSearchText(e.target.value)}/>
//         <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
//       </form>
//       }
     
//     </div>
//   </div>
// </nav>)
// }

// export default Header

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ searchText, setSearchText }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = localStorage.getItem('user');
    setUser(u);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary text-white" data-bs-theme="light">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Focus Whizz
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/">
                Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>

            {user ? (
              <li className="nav-item">
                <a className="nav-link text-white" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                  Logout
                </a>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          {user && (
            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                style={{ borderRadius: '5px' }} 
              />
              <button className="btn btn-light my-2 my-sm-0" type="submit" style={{ borderRadius: '5px' }}> Search
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;

