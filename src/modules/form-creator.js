export class makeForm{
    createElement(eClass, eLabel, eFor, eLabelTxt, iName, container){
        eLabel = document.createElement('label')
        eLabel.className = eClass
        eLabel.setAttribute('for', eFor)
        eLabel.innerText = eLabelTxt
        iName = document.createElement('input')
        container.appendChild(eLabel)
        container.appendChild(iName)
    }

}