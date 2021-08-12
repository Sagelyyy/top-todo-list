import './modules/style.css'
import { SIDEBAR } from './modules/sidebar';
import { SHOWPAGE } from './modules/display-page';


export const MAIN = (function(){

    function getSelectors(){
        const newListBtn = document.querySelector('#new-list')
        const homeBtn = document.querySelector('#home')
        const contentPage = document.querySelector('.content-page')
        const formDiv = document.querySelector('#todo-form')
        const todoSubmitBtn = document.querySelector('.todo-submit-button')
        const todoTitleInpt = document.querySelector('#todo-title-input')
        const todoDateInpt = document.querySelector('#todo-date-input')
        const todoDescInpt = document.querySelector('#todo-desc-area')
        const todoHp = document.querySelector('#todo-radio-hp')
        return{
            newListBtn,
            homeBtn,
            contentPage,
            formDiv,
            todoSubmitBtn,
            todoTitleInpt,
            todoDateInpt,
            todoDescInpt,
            todoHp
        }
    }

    function init(){
        SHOWPAGE.homePage()
        SIDEBAR.pushHomeButton(MAIN.getSelectors().homeBtn)
        SIDEBAR.pushNewButton(MAIN.getSelectors().newListBtn)
    }
    return{
        init,
        getSelectors
    }
})()

window.onload = MAIN.init



