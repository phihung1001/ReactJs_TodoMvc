import React, {useRef,lazy } from "react";
import './App.css';
import TodoList from './Components/content/TodoList';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Panigation from './Components/pagination/Pagination';
import ReactPaginate from 'react-paginate';
import ThemeBtn from './Components/Theme-Btn';
import { ThemeContext } from "./Context/Theme-Provider";


const App = () => {

  return (
       
      <div className="todoapp">
        <ThemeBtn/>
         <Header/>
         <TodoList/> 
         <Footer/>
      </div>
    )
 }
export default App;


{/* <Header  
//ref={headerRef}
// onEditTodo ={onEditTodo}
//isCheckAll ={isCheckAll}
/> */}
{/* <TodoList 
             //todoList={filterBystatus(todoList,status)}
            //currentPage={currentPage}
            // getTodoEditId = {getTodoEditId}
            // onEditTodo = {onEditTodo}
             //markCompleted ={markCompleted}
            // isCheckAll ={isCheckAll}
             //checkAllTodo={checkAllTodo}
             //removeTodo = {removeTodo}
           
          />  */}
{/* <Footer
            //setStatusFilter={setStatusFilter}
           // status={status}
            //clearCompleted = {clearCompleted}
            //numOfTodoLeft = {filterBystatus(todoList,'ACTIVE').length}
         /> */}
 // const [todoList, setTodoList ] = useState([
  // ]);
  // const [isCheckAll, setIscheckAll ] = useState(false);
  // const [status, setStatus ] = useState('ALL');
  // const headerRef = useRef();
  
  

  // const componentWillMount = () => {
  //     setIscheckAll(!isNotCheckAll(todoList) )
  // }

  
  // const getTodoEditId = (id) => {
  //     const todo = todoList.find(todo => id === todo.id);
  //     const name = todo.name;
  //     headerRef.current.updateState(id,name);
  // }

  // const onEditTodo= (todo = {}, id =-1) => {
  //   if(id >=0) {
  //     const updatedList =todoList.map(item => item.id===id ? ({...item, name: todo.name}) : item)
      
  //    // console.log(todo)
  //     //console.log(updatedList.map(item => item))
  //     setTodoList(updatedList);
  //   }
  // }

  // const markCompleted = (id = '') => {
  //   const updatedList = todoList.map(todo =>  todo.id ===id ? ({...todo, isCheck: !todo.isCheck}) : todo )
  //   setTodoList(updatedList);
  //   setIscheckAll(!isNotCheckAll(updatedList) )
  // }

  // const checkAllTodo = () => {
  //     const updatedList = todoList.map(todo => ({...todo ,isCheck:!isCheckAll})); 
  //     setTodoList(updatedList)
  //     setIscheckAll(!isCheckAll)
  // }

  // const setStatusFilter = (status ='') =>{
  //   setStatus(status);
  // }

  // const clearCompleted = () => {
  //   setTodoList(filterBystatus(todoList,'ACTIVE'))
  // }
  // const removeTodo = ( id ='') => {
  //   setTodoList(filterBystatus(todoList,'REMOVE',id))
  // }

//   const prePage = () => {
//     if (currentPage !== 1) setCurrentPage(currentPage - 1);
//   }
//   const nextPage = () => {
//     const npage = Math.ceil(todoList.length / recordsPerPage)
//     if (currentPage !== npage) setCurrentPage(currentPage + 1);
//   }
 
//   const changePage = (id) => {
//     setCurrentPage(id);
//  }

  {/* <Panigation 
             ref={pageRef}
             prePage = {prePage}
             nextPage = {nextPage}
             changePage = {changePage}
             numbers = {numbers}
         />    */}