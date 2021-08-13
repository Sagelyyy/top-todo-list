import { makeTodo } from "./element-creator";
import { MAIN } from "..";

export const TODO = (function () {
    const todoArray = []
    const createList = (title, date, desc, priority, itemID) => {
        itemID = todoArray.length
        todoArray.push({title, desc, date, priority, itemID})

    }

    function itemSetup () {
        for(let i = 0; i < todoArray.length; i++){
            let tempDetail = new makeTodo()
            tempDetail.createDetails(
                `todo-item${[i]}`, MAIN.getSelectors().todoContent)
            let obj = todoArray[i]
            for(let prop in obj){
                let tempItems = new makeTodo()
                if(prop == 'title'){
                    tempItems.createSummary('todo-summary', obj['title'],
                    document.querySelector(`.todo-item${[i]}`))
                }
                if(prop != 'title' && prop != 'priority' && prop != 'itemID'){
                    console.log(prop)
                tempItems.createP(
                    'todo-para', obj[prop],
                    document.querySelector(`.todo-item${[i]}`))
                }
            }
        }
    }


    return{
        createList,
        todoArray,
        itemSetup
    }
})();