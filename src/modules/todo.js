import { makeTodo } from "./element-creator";
import { MAIN } from "..";
import { NAVIGATION } from "./navigation-handler";
import { SHOWPAGE } from "./display-page";

export const TODO = (function () {
    const todoArray = []
    const todoBuffer = []
    const categoryArray = []
    let itemID = 0
    let catSpawn = true

    const createList = (
        cat, title, date, time, desc, priority, itemID) => {
        itemID = itemID + 1
        todoArray.push({
            cat, title, date, time, desc, priority, itemID})
    }


    function render(){
        categoryDisplay()
        categoryText()
        catTrash()
        deleteCategory()
    }


    function generateTestItems(){
        for(let i = 0;i < 9; i++){
            TODO.createList(`Cat${i}`, `Cat${i}`, `1/1/2021`,
            `13:00 pm`, `test item`, false, itemID)
            categoryArray.push(`Cat${i}`)
            catSpawn = false

        }
    }

    function createNewCategory(title){
        categoryArray.push(title)
    }

    function setupCategory(){
        let catOption = document.createElement('option')
        catOption.textContent = 'New category'
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


    function trashSetup(){
        for(let i = 0; i < todoBuffer.length; i++){
            if(document.querySelector('.todo-item'+[i]) != null){
                let trash = document.createElement('div')
                trash.textContent = 'delete'
                trash.classList.add('material-icons')
                trash.classList.add('md-48')
                trash.id = ('trash')
                document.querySelector('.todo-item'+[i]).appendChild(trash)
            }
        }
        let trashes = document.querySelectorAll('#trash')
        trashes.forEach(item => item.addEventListener('click',(e) => {
            let item = e.target.parentNode
            for(let i = 0; i < todoArray.length; i++){
                if(item.children[0].textContent == todoArray[i].title){
                    item.parentNode.removeChild(item)
                    todoArray.splice(i,1)
                    break;
                }
            }

        }))
    }

    function deleteCategory(){
        let cats = document.querySelectorAll('#trash-container')
        cats.forEach(cat => cat.addEventListener('click', (e) => {
            let item = e.currentTarget.parentNode
            console.log(item.children[0].textContent)
            for(let i = 0;i < categoryArray.length;i++){
                if(item.children[0].textContent == categoryArray[i]){
                    console.log('test')
                    item.parentNode.removeChild(item)
                    //todoArray.splice(i,1)
                    categoryArray.splice(i,1)
                    NAVIGATION.home()
                }
            }
        }, true))
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

    function categoryText(){
        let newCatArray = cleanDuplicates()
        let cats = document.querySelectorAll('.cat-div')
        let i = 0
        let catTitle = ''
        while(i < newCatArray.length){
            catTitle = document.createElement('p')
            catTitle.classList.add('cat-title')
            catTitle.textContent = newCatArray[i]
            cats[i].appendChild(catTitle)
            i++
        }
    }

    function categoryDisplay(){
        let newCatArray = cleanDuplicates()
        for(let i = 0;i < newCatArray.length; i++){
            let newCat = new makeTodo()
            newCat.createDiv(
                MAIN.getSelectors().todoContent)
                addCategoryListeners()        
        }
    }

    function catTrash(){
        let cats = document.querySelectorAll('.cat-div')
        cats.forEach(function(item){
            let trash = document.createElement('div')
            trash.textContent = 'delete'
            trash.classList.add('material-icons')
            trash.classList.add('md-48')
            trash.id = 'trash-container'
            item.appendChild(trash)
        })
    }

    function addCategoryListeners(){
        let myDivs = document.querySelectorAll('.cat-div')
        myDivs.forEach(item => item.addEventListener('click', categoryNav, true))
    }

    function categoryNav(e){
        NAVIGATION.showCatPage(
            e.currentTarget.children[0].textContent
       )
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
        todoBuffer,
        selectCorrectItems,
        trashSetup,
        render,
        generateTestItems,
        catSpawn
  
    }
})();