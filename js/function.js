function renderRow ( months, accounts ) {
   let HTML = '';
//    let balance[j] = accounts[j].income - accounts[j].expense;
   
   
   
   for ( let i=0; i<months.length; i++) {
      
        HTML += `<div class="table-row">
                    <div class="cell">${months[i]}</div>
                </div>`;
   }


   for ( let j=0; j<accounts.length;j++) {
    if ( !accounts[j].income ) {
        accounts[j].income = '0';
    }
    if ( !accounts[j].expense ) {
        accounts[j].expense = '0';
    } 
    if ( !accounts[j].balance ) {
        accounts[j].balance = '0';
    }
    
           
 
        HTML += `<div class="table-row">
                    <div class="cell">${accounts[j].month}</div>
                    <div class="cell">${accounts[j].income + '.00 Eur'}</div>
                    <div class="cell">${accounts[j].expense + '.00 Eur'}</div>
                    <div class="cell">${accounts[j].balance + '.00 Eur'}</div>
                </div>`;
   
    }
    return document.getElementById('accounts').innerHTML = HTML;
}
