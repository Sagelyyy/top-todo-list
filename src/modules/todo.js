import { makeTodo } from "./element-creator";
import { MAIN } from "..";
import { NAVIGATION } from "./navigation-handler";
import { SHOWPAGE } from "./display-page";

export const TODO = (function () {
    const todoArray = []
    const categoryArray= []

    const createList = (
        title, date, time, desc, priority, itemID) => {
        itemID = todoArray.length
        todoArray.push({
            title, desc, date, time, priority, itemID})
    }

    function createNewCategory(title){
        categoryArray.push(title)
    }

    function setupCategory(){
        let catOption = document.createElement('option')
        catOption.textContent = 'New category'
        let catOption2 = document.createElement('option')
        MAIN.getSelectors().todoCategory.appendChild(catOption)
        if(categoryArray.length > 0){
            for(let i = 0; i < categoryArray.length; i++){
                let catOption = document.createElement('option')
                catOption.textContent = categoryArray[i]
                MAIN.getSelectors().todoCategory.appendChild(catOption)
            }
        }
    }

    function deleteItem(){
        //stuff
    }

    function deleteCategory(){
        //stuff
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

    function categoryDisplay(){
        for(let i = 0;i < TODO.categoryArray.length; i ++){
            let newCat = new makeTodo()
            newCat.createDiv(TODO.categoryArray[i],
                MAIN.getSelectors().todoContent)
                addCategoryListeners()
        }
    }

    function addCategoryListeners(){
        let myDivs = document.querySelectorAll('.cat-div')
        myDivs.forEach(item => item.addEventListener('click',(e) => {
            NAVIGATION.showCatPage(e.target.textContent)
        }))
    }

    function itemSetup () {
        arrangeItems()
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
        itemSetup,
        createNewCategory,
        setupCategory,
        categoryArray,
        categoryDisplay
    }
})();