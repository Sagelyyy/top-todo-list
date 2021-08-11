import { TODO } from "./todo";

export const NAVIGATION = function (){

    function pushNewButton(){
        const newListBtn = document.querySelector('#new-list')
        newListBtn.onclick = function () {console.log(TODO.createList('test', 'test description', 'now', 'high'));};
    }

    return{
        pushNewButton
    }
}();
