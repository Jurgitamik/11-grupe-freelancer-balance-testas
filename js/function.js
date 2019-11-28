function renderMonths( list ) {
    let HTML = '';
    let listHTML = '';

    // render Months
    
    for ( let i=0; i<list.length; i++ ) {
        const months = list[i];
       
        listHTML += `<div class="cell ${months.months}">
                    // <img src="./img/statistics/${cliento.photo}">             
                    // <div class="name">${cliento.name}</div>
                    // <div class="link">${cliento.link}</div>
                    // <div class="about">${cliento.about}</div>
                    </div>`;
                    
    }