export const TODO = (function () {

    const createList = (title, desc, date, priority) => {
        return{title, desc, date, priority}
    }

    return{
        createList
    }
})();