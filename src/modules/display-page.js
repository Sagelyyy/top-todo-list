import { MAIN } from ".."
import { makeForm } from "./form-creator"

export const SHOWPAGE = (function(){

    function clearPage(){
        MAIN.getSelectors().contentPage.textContent = ''
    }

    function homePage(){
        clearPage()
        MAIN.getSelectors().contentPage.textContent = 'Test Home'
    }

    function newTodo(){
        clearPage()
        let test = new makeForm()
        test.createElement(
            'testLabel', 'temp', 'testInput', 'This is a test', 
            'myInput', MAIN.getSelectors().contentPage)

    }
    return{
        newTodo,
        homePage
    }
})()