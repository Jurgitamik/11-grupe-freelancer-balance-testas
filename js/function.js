function renderRow ( months, accounts ) {
   let HTML = '';
//    let balance[j] = accounts[j].income - accounts[j].expense;


   for ( let i=0; i<accounts.length; i++) {
    if ( !accounts[i].income ) {
        accounts[i].income = '0';
    }
    if ( !accounts[i].expense ) {
        accounts[i].expense = '0';
    } 
    if ( !accounts[i].balance ) {
        accounts[i].balance = '0';
    }

          
 
        HTML += `<div class="table-row">
                    <div class="cell">${accounts[i].month}</div>
                    <div class="cell">${months[i]}</div>
                    <div class="cell">${accounts[i].income + '.00 Eur'}</div>
                    <div class="cell">${accounts[i].expense + '.00 Eur'}</div>
                    <div class="cell">${accounts[i].balance + '.00 Eur'}</div>
                </div>`;
   
    }

    return document.getElementById('accounts').innerHTML = HTML;
}
