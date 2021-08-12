export class makeForm{
    createInputForm(
        formElement, type, eClass, eLabel, eFor, eLabelTxt, iName, iId, iPh, container)
        {
        eLabel = document.createElement('label')
        eLabel.className = eClass
        eLabel.setAttribute('for', eFor)
        eLabel.innerText = eLabelTxt
        iName = document.createElement(formElement)
        iName.setAttribute('type', type)
        iName.setAttribute('id', iId)
        iName.setAttribute('placeholder', iPh)
        container.appendChild(eLabel)
        container.appendChild(iName)
    }

    createButtonForm(name, btnClass, container){
        name = document.createElement('button')
        name.setAttribute('type', 'button')
        name.classList.add(btnClass)
        name.innerText = 'Submit'
        container.appendChild(name)
    }

}