import { SHOWPAGE } from "./display-page";

export const NAVIGATION = (function(){

    function home(){
        SHOWPAGE.homePage()
    }

    function newTask(){
        SHOWPAGE.newTodo()
    }
    return{
        home,
        newTask
    }
})();