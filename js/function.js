function renderRow ( months, accounts ) {
   let HTML = '';
   
   for ( let i=0; i<months.length; i++) {
        HTML += `<div class="table-row">
                    <div class="cell">${months[i]}</div>
                </div>`;
   }
   document.getElementById('accounts').innerHTML = HTML;

   for ( let j=0; j<accounts.length;j++) {
        HTML += `<div class="table-row">
                    <div class="cell">${accounts[j].month}</div>
                    <div class="cell">${accounts[j].income}</div>
                    <div class="cell">${accounts[j].expense}</div>
                    <div class="cell">${accounts[j].balance}</div>
                </div>`;
   }
   document.getElementById('accounts').innerHTML = HTML;


    
    return;
}