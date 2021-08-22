import { MAIN } from ".."
import { makeForm, makeTodo } from "./element-creator"
import { NAVIGATION } from "./navigation-handler"
import { TODO } from "./todo"

export const SHOWPAGE = (function(){

    function clearPage(){
        MAIN.getSelectors().contentPage.textContent = ''
    }

    function homePage(){
        clearPage()
        TODO.todoBuffer.length = 0
        if(TODO.categoryArray.length == 0 && TODO.catSpawn == true){
             MAIN.getSelectors().contentPage.textContent = (
                'Click the + button to add a new item!')
                ///TESTING PURPOSES
                TODO.generateTestItems()
                NAVIGATION.home()

        }else{
            let todoDisplay = document.createElement('div')
            todoDisplay.id = ('todo-display')
            MAIN.getSelectors().contentPage.appendChild(todoDisplay)
            TODO.render()

        }
    }

    function categoryPage(title){
        clearPage()
        let catTitle = document.createElement('h1')
        catTitle.classList.add('cat-header')
        catTitle.textContent = title
        let todoDisplay = document.createElement('div')
        todoDisplay.id = ('todo-display')
        MAIN.getSelectors().contentPage.appendChild(todoDisplay)
        MAIN.getSelectors().todoContent.appendChild(catTitle)
        let todoContainer = document.createElement('div')
        todoContainer.id = ('todo-container')
        MAIN.getSelectors().todoContent.appendChild(todoContainer)
        MAIN.getSelectors().todoContent.style.flexDirection = ('column')
        TODO.itemSetup()
        TODO.trashSetup()
    }

    function newTodo(){
        clearPage()
        let newFormDivc = document.createElement('form')
        newFormDivc.id = 'todo-form'
        MAIN.getSelectors().contentPage.appendChild(newFormDivc)


        let todoCategory = new makeForm()
        todoCategory.createInputForm(
            'select', 'select', true, 'todo-category', 'todo-category-label',
            'todo-category-input', 'Category:', 'select', 'todo-category-input',
            null, MAIN.getSelectors().formDiv)

        let catNew = new makeForm()
        catNew.createInputForm(
            'input', 'null', true, 'cat-name', null, null,
             null, 'inputCat', 'cat-name', 'Enter category name', 
            MAIN.getSelectors().formDiv)
        
            MAIN.getSelectors().todoCatName.style.visibility = 'visible'

        let todoTitle = new makeForm()
        todoTitle.createInputForm(
            'input', 'null', true, 'todo-title', 'todo-title-label', 'todo-title-input',
             'Title', 'input', 'todo-title-input', 'What do you need to do?', 
             MAIN.getSelectors().formDiv)

        let todoDate = new makeForm()
        todoDate.createInputForm(
            'input', 'date', true, 'todo-date', 'todo-date-label', 'todo-date-input',
            'When?', 'date', 'todo-date-input', null, 
            MAIN.getSelectors().formDiv)

        let todoTime = new makeForm()
        todoTime.createInputForm(
            'input', 'time', true, 'todo-time', 'todo-time-label', 'todo-time-input',
            'What time?', 'time', 'todo-time-input', null, 
            MAIN.getSelectors().formDiv)

        let todoDescription = new makeForm()
        todoDescription.createInputForm(
            'textarea', null, false, 'todo-description', 'todo-desc-label', 'todo-desc-area', 'Desciption',
            'desc', 'todo-desc-area', 'Describe your activity..',
            MAIN.getSelectors().formDiv)

        let todoHighPriority = new makeForm()
        todoHighPriority.createInputForm(
            'input', 'checkbox', false, 'todo-hp', 'todo-hp-label', 'todo-hp-radio',
            'High Priority', 'radio' ,'todo-radio-hp', null, 
            MAIN.getSelectors().formDiv)

        let todoSubmit = new makeForm()
        todoSubmit.createButtonForm('btn', 'todo-submit-button',
        MAIN.getSelectors().formDiv)
        
        MAIN.getSelectors().todoCategory.addEventListener('change', (e)=>{
            switch(e.target.value){
                case 'New category':
                    MAIN.getSelectors().todoCatName.style.visibility = 'visible'
                    break
                default:
                    MAIN.getSelectors().todoCatName.style.visibility = 'hidden'
                    break

            }
        })

        MAIN.getSelectors().todoSubmitBtn.onclick = function () {
            if(
                MAIN.getSelectors().todoTitleInpt.value != '' &&
                MAIN.getSelectors().todoDateInpt.value != '' &&
                MAIN.getSelectors().todoTimeInpt.value != ''){
                    switch(MAIN.getSelectors().todoCatName.style.visibility){
                        case 'visible':
                            TODO.createList(
                                MAIN.getSelectors().todoCatName.value,
                                MAIN.getSelectors().todoTitleInpt.value,
                                MAIN.getSelectors().todoDateInpt.value,
                                MAIN.getSelectors().todoTimeInpt.value,
                                MAIN.getSelectors().todoDescInpt.value,
                                MAIN.getSelectors().todoHp.checked,
                                TODO.todoArray.length);
                            TODO.createNewCategory(
                                MAIN.getSelectors().todoCatName.value)
                                break;
                        case 'hidden':
                            TODO.createList(
                                MAIN.getSelectors().todoCategory.value,
                                MAIN.getSelectors().todoTitleInpt.value,
                                MAIN.getSelectors().todoDateInpt.value,
                                MAIN.getSelectors().todoTimeInpt.value,
                                MAIN.getSelectors().todoDescInpt.value,
                                MAIN.getSelectors().todoHp.checked,
                                TODO.todoArray.length);
                            TODO.createNewCategory(
                                MAIN.getSelectors().todoCategory.value)
                                break;
                    }
                }
        homePage()

        }
        TODO.setupCategory()
    }
    return{
        newTodo,
        homePage,
        categoryPage
    }
})()