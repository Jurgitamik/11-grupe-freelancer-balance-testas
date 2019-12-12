function renderRow ( months, accounts ) {
   let HTML = '';

   for ( let i=0; i<accounts.length; i++) {
       
    if ( !accounts[i].income ) {
        accounts[i].income = 0;
    }
    if ( !accounts[i].expense ) {
        accounts[i].expense = 0;
    } 
    if ( !accounts[i].balance ) {
        accounts[i].balance = 0;
    }

        HTML += `<div class="table-row">
                    <div class="cell">${accounts[i].month}</div>
                    <div class="cell">${months[i]}</div>
                    <div class="cell">${accounts[i].income + '.00 Eur'}</div>
                    <div class="cell">${accounts[i].expense + '.00 Eur'}</div>
                    <div class="cell">${(accounts[i].income - accounts[i].expense) + '.00 Eur'}</div>
                </div>`;
   
    }

    return document.getElementById('accounts').innerHTML = HTML;
}

function summFooter ( accounts ) {
    let HTML = '';
    let sumaIncome = 0;
    let sumaExpense = 0;
    let sumaBalance = 0;
    let i = 0;

    if ( !accounts[i].income ) {
        i++;
    } else {
    
    for ( let i=0; i<accounts.length; i++) {
        sumaIncome += accounts[i].income;
        sumaExpense += accounts[i].expense;
        sumaBalance = accounts[i].income - accounts[i].expense;
    }   
}

        HTML += `<div class="cell"></div>
                <div class="cell"></div>
                <div class="cell">${sumaIncome + '.00 Eur'}</div>
                <div class="cell">${sumaExpense + '.00 Eur'}</div>
                <div class="cell">${sumaBalance + '.00 Eur'}</div>`;
    
    return document.getElementById('footer').innerHTML = HTML;
    }

  

    
