import { makeTodo } from "./element-creator";
import { MAIN } from "..";
import { NAVIGATION } from "./navigation-handler";
import { SHOWPAGE } from "./display-page";

export const TODO = (function () {
    const todoArray = []
    const todoBuffer = []
    const categoryArray = []

    const createList = (
        cat, title, date, time, desc, priority, itemID) => {
        itemID = todoArray.length
        todoArray.push({
            cat, title, date, time, desc, priority, itemID})
    }

    function createNewCategory(title){
        categoryArray.push(title)
    }

    function setupCategory(){
        let catOption = document.createElement('option')
        catOption.textContent = 'New category'
        let catOption2 = document.createElement('option')
        MAIN.getSelectors().todoCategory.appendChild(catOption)
        let newCatArray = cleanDuplicates()
        if(newCatArray.length > 0){
            for(let i = 0; i < newCatArray.length; i++){
                let catOption = document.createElement('option')
                catOption.textContent = newCatArray[i]
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

    function selectCorrectItems() {
        todoBuffer.length = 0;
        for(let i = 0; i < todoArray.length; i++){
            let obj = todoArray[i]
            for(let prop in obj){
              if(obj[prop] == document.querySelector('.cat-header').textContent){
                    todoBuffer.push(obj)
                break;
              }
            }
          }
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
        selectCorrectItems()
    }

    function cleanDuplicates(){
        let arr = []
        const destroyDuplicates = new Set(categoryArray)
        return arr = [...destroyDuplicates]
    }

    function categoryDisplay(){
        let newCatArray = cleanDuplicates()
        for(let i = 0;i < newCatArray.length; i++){
            let newCat = new makeTodo()
            newCat.createDiv(newCatArray[i],
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
        for(let i = 0; i < todoBuffer.length; i++){
            let tempDetail = new makeTodo()
            tempDetail.createDetails(
                `todo-item${[i]}`, MAIN.getSelectors().todoContainer)
            let obj = todoBuffer[i]
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
                if(prop != 'title' && prop != 'priority' && 
                prop != 'itemID' && prop != 'time' && prop != 'cat'){
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
        categoryDisplay,
        todoBuffer,
        selectCorrectItems
    }
})();