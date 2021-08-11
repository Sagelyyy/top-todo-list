import { NAVIGATION } from "./navigation-handler";

export const SIDEBAR = function (){

    function pushHomeButton(btn){
        btn.onclick = function () {
            NAVIGATION.home()
        }
    }

    function pushNewButton(btn){
        btn.onclick = function () {
           NAVIGATION.newTask()
        };
    }

    return{
        pushHomeButton,
        pushNewButton
    }
}();
