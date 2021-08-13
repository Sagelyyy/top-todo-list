import { makeTodo } from "./element-creator";
import { MAIN } from "..";

export const TODO = (function () {
    const todoArray = []
    const createList = (title, date, time, desc, priority, itemID) => {
        itemID = todoArray.length
        todoArray.push({title, desc, date, time, priority, itemID})

    }

    function arrangeItems(){
        if(todoArray.length > 1){
            todoArray.forEach(function(item, i){
                if(item.priority == true){
                    todoArray.splice(i, 1)
                    todoArray.unshift(item)
                }
            });
        }
    }

    function itemSetup () {
        arrangeItems()
        console.log(todoArray)
        for(let i = 0; i < todoArray.length; i++){
            let tempDetail = new makeTodo()
            tempDetail.createDetails(
                `todo-item${[i]}`, MAIN.getSelectors().todoContent)
            let obj = todoArray[i]
            for(let prop in obj){
                let tempItems = new makeTodo()
                if(prop == 'title'){
                    if(obj['priority'] == true){
                        tempItems.createSummary('todo-summary-hp', 
                        `⚠️ ${obj['title']}`,
                        document.querySelector(`.todo-item${[i]}`))
                    }else{
                        tempItems.createSummary('todo-summary', obj['title'],
                        document.querySelector(`.todo-item${[i]}`))
                    }
                }
                if(prop != 'title' && prop != 'priority' && prop != 'itemID' && prop != 'time'){
                    if(prop == 'desc'){
                        tempItems.createP(
                            'todo-para', obj[prop],
                            document.querySelector(`.todo-item${[i]}`))
                    }else{
                        tempItems.createP(
                            'todo-para', `${obj['date']} at ${obj['time']}`,
                            document.querySelector(`.todo-item${[i]}`))
                    }
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