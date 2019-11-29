function renderMonths( list ) {
    let HTML = '';
    let listHTML = '';

    // render Months
    
    for ( let i=0; i<list.length; i++ ) {
        const months = list[i];
       
        listHTML += `<div class="cell ${account.month}">
                    <img src="./img/statistics/${months.men}">             
                    <div class="name">${account.income}</div>
                    <div class="link">${account.expence}</div>
                    <div class="about">${account.balance}</div>
                    </div>`;                   
    }
}