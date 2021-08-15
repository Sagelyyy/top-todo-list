import { MAIN } from ".."
import { makeForm, makeTodo } from "./element-creator"
import { TODO } from "./todo"

export const SHOWPAGE = (function(){

    function clearPage(){
        MAIN.getSelectors().contentPage.textContent = ''
    }

    function homePage(){
        clearPage()
        console.log(`todo array: ${TODO.todoArray}`)
        console.log(TODO.categoryArray)

        if(TODO.categoryArray.length == 0){
             MAIN.getSelectors().contentPage.textContent = (
                'Click the + button to add a new item!')
        }else{
            let todoDisplay = document.createElement('div')
            todoDisplay.id = ('todo-display')
            MAIN.getSelectors().contentPage.appendChild(todoDisplay)
            TODO.categoryDisplay()

        }
    }

    function categoryPage(title){
        clearPage()
        let catTitle = document.createElement('h1')
        catTitle.textContent = title
        let todoDisplay = document.createElement('div')
        todoDisplay.id = ('todo-display')
        MAIN.getSelectors().contentPage.appendChild(todoDisplay)
        MAIN.getSelectors().todoContent.appendChild(catTitle)
        TODO.itemSetup()


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
        
        MAIN.getSelectors().todoCatName.hidden = false

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

        //check if projects are empty, if they are prompt to 
        //create new one, if not, then give option to make
        //new one or append to selected project

        let todoSubmit = new makeForm()
        todoSubmit.createButtonForm('btn', 'todo-submit-button',
        MAIN.getSelectors().formDiv)
        
        MAIN.getSelectors().todoCategory.addEventListener('change', (e)=>{
            console.log(e.target.value)
            switch(e.target.value){
                case 'New category':
                    MAIN.getSelectors().todoCatName.hidden = false
                    break
                default:
                    MAIN.getSelectors().todoCatName.hidden = true
                    break

            }
        })

        MAIN.getSelectors().todoSubmitBtn.onclick = function () {
            if(
                MAIN.getSelectors().todoTitleInpt.value != '' &&
                MAIN.getSelectors().todoDateInpt.value != '' &&
                MAIN.getSelectors().todoTimeInpt.value != ''
            ){
            TODO.createList(
                MAIN.getSelectors().todoTitleInpt.value,
                MAIN.getSelectors().todoDateInpt.value,
                MAIN.getSelectors().todoTimeInpt.value,
                MAIN.getSelectors().todoDescInpt.value,
                MAIN.getSelectors().todoHp.checked,
                MAIN.getSelectors().todoCategory.value);
                TODO.createNewCategory(
                    MAIN.getSelectors().todoCatName.value)
                homePage()
s
            }
        }
        TODO.setupCategory()
    }
    return{
        newTodo,
        homePage,
        categoryPage
    }
})()