// import React,{ useEffect, useState } from 'react'
// import Header from './partials/Header'
// import Task from './partials/Task'
// import AddTaskModal from './partials/AddTaskModal'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom'
// import { getTaskListApi, getToken } from '../services/api'

// function Home() {
//   const navigation=useNavigate();
//   const [searchText, setSearchText] = useState("");
//   const [list, setList] = useState([]);
//   const [refreshList,setRefreshList]=useState();
//   const [filteredList, setFilteredList] = useState([]);
//   useEffect(() => {
//     if(!getToken()){
//       navigation('/login')
//     }

//     fetchTaskList()
    
//   }, [refreshList])

//   useEffect(() => {
//     if(searchText===''){
//       setFilteredList(list)
//     }
//     else{
//       const filterlist = list.filter(task=>task.title.toLowerCase().includes(searchText.toLowerCase().trim()))
//       setFilteredList(filterlist)
//     }
    
//   }, [list,searchText])
  

//   async function fetchTaskList(){
//     const result = await getTaskListApi()
//     console.log("tasklist",result)
//     if(result.status ===200 && result.data.status === "All tasks list"){

       
//       setList(result.data.message.tasks.reverse());
//     }
//   }
//   console.log("list",list);


//   return (<div>
//     <Header searchText={searchText} setSearchText={setSearchText}/>
//     <ToastContainer/>

//     <div className="container">
//       <div className="row justify-content-md-center mt-4">

//         {
//           filteredList.map((task) => <Task task={task} key={task._id} setRefreshList={setRefreshList}/>)
//         }
//         {
//           filteredList.length===0 && <div className="notFoundTasks">
//             No Tasks Found
//           </div>
//         }

        

//       </div>
//     </div>

//     <div className="" style={{position:"fixed",right:50,bottom:50,zIndex:1030}}>
//       <button type="button"
//       data-bs-toggle="modal"
//       data-bs-target="#exampleModal"
//       className="btn btn-warning">
//         Add

//       </button>

//     </div>

//     <AddTaskModal setRefreshList={setRefreshList}/>

//     </div>
//   )
// }

// export default Home



import React,{ useEffect, useState } from 'react'
import Header from './partials/Header'
import Task from './partials/Task'
import AddTaskModal from './partials/AddTaskModal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { getTaskListApi, getToken } from '../services/api'

function Home() {
  const navigation=useNavigate();
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState([]);
  const [refreshList,setRefreshList]=useState();
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if(!getToken()){
      navigation('/login')
    }

    fetchTaskList()
    
  }, [refreshList])

  useEffect(() => {
    if(searchText===''){
      setFilteredList(list)
    }
    else{
      const filterlist = list.filter(task=>task.title.toLowerCase().includes(searchText.toLowerCase().trim()))
      setFilteredList(filterlist)
    }
    
  }, [list,searchText])
  

  async function fetchTaskList(){
    const result = await getTaskListApi()
    console.log("tasklist",result)
    if(result.status ===200 && result.data.status === "All tasks list"){

       
      setList(result.data.message.tasks.reverse());
    }
  }
  console.log("list",list);


  return (<div>
    <Header searchText={searchText} setSearchText={setSearchText}/>
    <ToastContainer/>

    <div className="container">
      <div className="row justify-content-md-center mt-4">

        {
          filteredList.map((task) => <Task task={task} key={task._id} setRefreshList={setRefreshList}/>)
        }
        {
          filteredList.length===0 && <div className="notFoundTasks">
            No Tasks Found
          </div>
        }

        

      </div>
    </div>

    <div className="" style={{position:"fixed",right:50,bottom:50,zIndex:1030}}>
      <button type="button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      className="btn btn-warning">
        Add

      </button>

    </div>

    <AddTaskModal setRefreshList={setRefreshList}/>

    </div>
  )
}

export default Home
