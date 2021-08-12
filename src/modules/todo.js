export const TODO = (function () {
    const todoArray = []
    const createList = (title, date, desc, priority) => {
        todoArray.push({title, desc, date, priority})
    }

    return{
        createList,
        todoArray
    }
})();