export const addTodo = (data) => {
    return {
    type: 'todoList/addTodo',
    payload: data
    }
}
export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}
export const statusFilterChange = (status) => {
    return {
        type:'filters/statusFilterChange',
        payload: status
    }
}
export const statusTodoChange = (id) => {
    return {
        type:'todoList/changeStatusTodo',
        payload: id
    }
}
export const priorityFilterChange = (priorities) => {
    return {
        type:'filters/prioritiesFilterChange',
        payload: priorities
    }
}