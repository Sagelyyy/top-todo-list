import './modules/style.css'
import { SIDEBAR } from './modules/sidebar';


export const MAIN = (function(){

    function getSelectors(){
        const newListBtn = document.querySelector('#new-list')
        const homeBtn = document.querySelector('#home')
        const contentPage = document.querySelector('.content-page')
        return{
            newListBtn,
            homeBtn,
            contentPage
        }
    }

    function init(){
        SIDEBAR.pushHomeButton(MAIN.getSelectors().homeBtn)
        SIDEBAR.pushNewButton(MAIN.getSelectors().newListBtn)
    }
    return{
        init,
        getSelectors
    }
})()

window.onload = MAIN.init



