import { MAIN } from ".."
import { makeForm } from "./element-creator"
import { TODO } from "./todo"

export const SHOWPAGE = (function(){

    function clearPage(){
        MAIN.getSelectors().contentPage.textContent = ''
    }

    function homePage(){
        clearPage()


        if(TODO.todoArray.length == 0){
            // MAIN.getSelectors().contentPage.textContent = (
            //     'Click the + button to add a new item!')
            //for testing purposes
            TODO.createList(
                'Date night',
                '08/14/2021',
                'Go out to dinner with my Fiance',
                'false')
        }else{
            let todoDisplay = document.createElement('div')
            todoDisplay.id = ('todo-display')
            MAIN.getSelectors().contentPage.appendChild(todoDisplay)
            TODO.itemSetup()
        }
    }

    function newTodo(){
        clearPage()
        let newFormDivc = document.createElement('form')
        newFormDivc.id = 'todo-form'
        MAIN.getSelectors().contentPage.appendChild(newFormDivc)

        let todoTitle = new makeForm()
        todoTitle.createInputForm(
            'input', 'null', 'todo-title', 'todo-title-label', 'todo-title-input',
             'Title', 'input', 'todo-title-input', 'What do you need to do?', 
             MAIN.getSelectors().formDiv)

        let todoDate = new makeForm()
        todoDate.createInputForm(
            'input', 'date', 'todo-date', 'todo-date-label', 'todo-date-input',
            'When?', 'date', 'todo-date-input', null, 
            MAIN.getSelectors().formDiv)

        let todoDescription = new makeForm()
        todoDescription.createInputForm(
            'textarea', null, 'todo-description', 'todo-desc-label', 'todo-desc-area', 'Desciption',
            'desc', 'todo-desc-area', 'Describe your activity..',
            MAIN.getSelectors().formDiv)

        let todoHighPriority = new makeForm()
        todoHighPriority.createInputForm(
            'input', 'checkbox', 'todo-hp', 'todo-hp-label', 'todo-hp-radio',
            'High Priority', 'radio' ,'todo-radio-hp', null, 
            MAIN.getSelectors().formDiv)

        let todoSubmit = new makeForm()
        todoSubmit.createButtonForm('btn', 'todo-submit-button',
        MAIN.getSelectors().formDiv)

        MAIN.getSelectors().todoSubmitBtn.onclick = function () {
            TODO.createList(
                MAIN.getSelectors().todoTitleInpt.value,
                MAIN.getSelectors().todoDateInpt.value,
                MAIN.getSelectors().todoDescInpt.value,
                MAIN.getSelectors().todoHp.checked)
                homePage();
        }
    }
    return{
        newTodo,
        homePage
    }
})()