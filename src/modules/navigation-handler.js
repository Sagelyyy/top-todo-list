import { SHOWPAGE } from "./display-page";

export const NAVIGATION = (function(){

    function home(){
        SHOWPAGE.homePage()
    }

    function newTask(){
        SHOWPAGE.newTodo()
    }

    function showCatPage(title){
        SHOWPAGE.categoryPage(title)
    }
    return{
        home,
        newTask,
        showCatPage
    }
})();