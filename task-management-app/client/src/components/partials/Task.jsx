import React from 'react'
import moment from 'moment/moment';
import { deleteTaskApi, markTaskApi } from '../../services/api';
import { toast } from 'react-toastify';

// function Task({ task, setRefreshList }) {

//     const handleDelete =async()=>{
//         const result=await deleteTaskApi({
//             task_id:task._id
//         })
//         console.log('delete task',result)
//         if(result.data.status===200){
//             setRefreshList(new Date())
//             toast("Deleted");
//         }
//         else{
//             toast("Failed to delete,try again");
//         }
//     }


//     const handleMarkTask =async()=>{
//         const result=await markTaskApi({
//             task_id:task._id
//         })
//         console.log('mark task',result)
//         if(result.data.status===200){
//             setRefreshList(new Date())
//             toast(result.data.message);
//         }
//         else{
//             toast("Failed to mark,try again");
//         }
//     }
//     if(!task || typeof task.isCompleted === 'undefined'){
//         return null;
//     }
//     //console.log('task',task);
//   return (
    
//       <div className="col-sm-3 mx-3 my-2 alert text-white bg-info">
//         <div className="card-header">
//             {task.isCompleted?'Completed':'Not Completed'}
//         </div>
//         <div className="card-body">
//             <h4 className="card-title" style={{textDecoration:task.isCompleted ? 'line-through': 'none'}}>{task.title}</h4>
//             <p className="card-text">{moment(task.date).fromNow()}</p>

            
//         </div>
//         <div className="actionButtons" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
//                 <div className="deleteButton">
//                     <button style={{background:'red'}} onClick={handleDelete}>Delete</button>
//                 </div>
//                 <div className="markTask">
//                     <button onClick={handleMarkTask}style={{background:'white'}}>{task.isCompleted? 'Mark Incomplete':'Mark Complete'} </button>
//                 </div>
//             </div>
//       </div>
    
//   )
// }

// export default Task


// import React from 'react';
// import moment from 'moment/moment';
// import { deleteTaskApi, markTaskApi } from '../../services/api';
// import { toast } from 'react-toastify';

// function Task({ task, setRefreshList }) {
//   const handleDelete = async () => {
//     const result = await deleteTaskApi({
//       task_id: task._id,
//     });
//     console.log('delete task', result);
//     if (result.data.status === 200) {
//       setRefreshList(new Date());
//       toast('Deleted');
//     } else {
//       toast('Failed to delete, try again');
//     }
//   };

//   const handleMarkTask = async () => {
//     const result = await markTaskApi({
//       task_id: task._id,
//     });
//     console.log('mark task', result);
//     if (result.data.status === 200) {
//       setRefreshList(new Date());
//       toast(result.data.message);
//     } else {
//       toast('Failed to mark, try again');
//     }
//   };

//   if (!task || typeof task.isCompleted === 'undefined') {
//     return null;
//   }

//   return (
//     <div className="col-sm-3 mx-3 my-2 alert text-white" style={{ backgroundColor: '#4361ee', borderRadius: '5px', border: 'none', height: '180px' }}>
//       <div className="card-header">{task.isCompleted ? 'Completed' : 'Not Completed'}</div>
//       <div className="card-body">
//         <h4
//           className="card-title"
//           style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
//         >
//           {task.title}
//         </h4>
//         <p className="card-text">{moment(task.date).fromNow()}</p>
//       </div>
//       <div className="actionButtons" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px' }}>
//         <div className="deleteButton">
//           <button style={{ background: '#ff3f34', color: '#fff', border: 'none', padding: '4px 8px', borderRadius: '5px', fontSize: '14px' }} onClick={handleDelete}>
//             Delete
//           </button>
//         </div>
//         <div className="markTask">
//           <button style={{ background: '#20bf6b', color: '#fff', border: 'none', padding: '4px 8px', borderRadius: '5px', fontSize: '14px' }} onClick={handleMarkTask}>
//             {task.isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Task;


// function Task({ task, setRefreshList }) {
//     const handleDelete = async () => {
//       const result = await deleteTaskApi({
//         task_id: task._id,
//       });
//       console.log('delete task', result);
//       if (result.data.status === 200) {
//         setRefreshList(new Date());
//         toast('Deleted');
//       } else {
//         toast('Failed to delete, try again');
//       }
//     };
  
//     const handleMarkTask = async () => {
//       const result = await markTaskApi({
//         task_id: task._id,
//       });
//       console.log('mark task', result);
//       if (result.data.status === 200) {
//         setRefreshList(new Date());
//         toast(result.data.message);
//       } else {
//         toast('Failed to mark, try again');
//       }
//     };
  
//     if (!task || typeof task.isCompleted === 'undefined') {
//       return null;
//     }
  
//     const isHighPriority = task.highPriority;
//     const backgroundColor = isHighPriority ? '#ff3f34' : '#4361ee';
  
//     return (
//       <div className="col-sm-3 mx-3 my-2 alert text-white" style={{ backgroundColor, borderRadius: '5px', border: 'none', height: '180px' }}>
//         <div className="card-header">{task.isCompleted ? 'Completed' : 'Not Completed'}</div>
//         <div className="card-body">
//           <h4
//             className="card-title"
//             style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
//           >
//             {task.title}
//           </h4>
//           <p className="card-text">{moment(task.date).fromNow()}</p>
//         </div>
//         <div className="actionButtons" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px' }}>
//           <div className="deleteButton">
//             <button style={{ background: backgroundColor, color: '#fff', border: 'none', padding: '4px 8px', borderRadius: '5px', fontSize: '14px' }} onClick={handleDelete}>
//               Delete
//             </button>
//           </div>
//           <div className="markTask">
//             <button style={{ background: '#20bf6b', color: '#fff', border: 'none', padding: '4px 8px', borderRadius: '5px', fontSize: '14px' }} onClick={handleMarkTask}>
//               {task.isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default Task;


function Task({ task, setRefreshList }) {
    const handleDelete = async () => {
      const result = await deleteTaskApi({
        task_id: task._id,
      });
      console.log('delete task', result);
      if (result.data.status === 200) {
        setRefreshList(new Date());
        toast('Deleted');
      } else {
        toast('Failed to delete, try again');
      }
    };
  
    const handleMarkTask = async () => {
      const result = await markTaskApi({
        task_id: task._id,
      });
      console.log('mark task', result);
      if (result.data.status === 200) {
        setRefreshList(new Date());
        toast(result.data.message);
      } else {
        toast('Failed to mark, try again');
      }
    };
  
    if (!task || typeof task.isCompleted === 'undefined') {
      return null;
    }
  
    const isHighPriority = task.highPriority;
    const backgroundColor = isHighPriority ? '#f0ad4e' : '#343a40';
  
    return (
      <div className="col-sm-3 mx-3 my-2 alert text-white" style={{ backgroundColor, borderRadius: '5px', border: 'none' }}>
        <div className="card-header">{task.isCompleted ? 'Completed' : 'Not Completed'}</div>
        <div className="card-body">
          <h4
            className="card-title"
            style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
          >
            {task.title}
          </h4>
          <p className="card-text">{moment(task.date).fromNow()}</p>
        </div>
        <div className="actionButtons" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px' }}>
          <div className="deleteButton">
            <button style={{ background: '#d9534f', color: '#fff', border: 'none', padding: '4px 8px', borderRadius: '5px', fontSize: '14px' }} onClick={handleDelete}>
              Delete
            </button>
          </div>
          <div className="markTask">
            <button style={{ background: '#4bbf73', color: '#fff', border: 'none', padding: '4px 8px', borderRadius: '5px', fontSize: '14px' }} onClick={handleMarkTask}>
              {task.isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Task;
  


