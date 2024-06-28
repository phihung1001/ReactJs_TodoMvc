export const isNotCheckAll = (todos = []) => todos.find(todo => !todo.isCheck)

export const filterBystatus = (todos = [], status='', id='') => {
  switch (status){
       case 'ACTIVE' : return todos.filter(todo => !todo.isCheck)
       case 'COMPLETED' : return todos.filter(todo => todo.isCheck)
       case 'REMOVE': return todos.filter(todo => todo.id !=id)
       default : return todos
  }
}