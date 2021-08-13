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

export class makeTodo{

    createDetails(detailsClass, container){
        let newDetail = document.createElement('details')
        newDetail.classList.add(detailsClass)
        container.appendChild(newDetail)
    }

    createSummary(sClass, sText, container){
        let tempSum = document.createElement('summary')
        tempSum.classList.add(sClass)
        tempSum.textContent = sText
        container.appendChild(tempSum)
    }

    createP(
        pClass, pText, container){
            let tempPara = document.createElement('p')
            tempPara.classList.add(pClass)
            tempPara.textContent = pText
            container.appendChild(tempPara)
    }

}