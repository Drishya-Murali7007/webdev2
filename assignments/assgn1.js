const form= document.querySelector('.form');
const eventCards= document.querySelector('.cards');

form.addEventListener('submit', (e) =>
     { e.preventDefault();
        console.log(eventTitle.value);
        console.log(eventdate.value);
        console.log(category.value);
        console.log(description.value);
    
    let title = eventTitle.value;
    let date = eventdate.value;
    let cat = category.value;
    let desc = description.value;

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML =`
    <h3>${title}</h3>
    <p>📅${date}</p>
    <button>${cat}</button>
    <p>${desc}</p>
    <div class ="dlt"> X </div>
    `
    eventCards.appendChild(card);
    const dlt = card.querySelector('.dlt');
    dlt.addEventListener('click', () => {
        card.remove();
    
    });
});
 

document.querySelector('.clearAll').addEventListener('click', () => {
    document.querySelectorAll('.card').forEach(card => 
        card.remove());
    });
    // document.querySelector('.addsample').addEventListener('click', () => {
    // document.querySelectorAll('.card').forEach(card =>
    //     eventCards.appendChild(card));
    document.querySelector('.addsample').addEventListener('click', () => {
    
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <h3>sample</h3>
    <p>📅dd/mm/yyyy</p>
    <button>default</button>
    <p>sample </p>
    <div class ="dlt"> X </div>
    `;

    document.querySelector('.cards').appendChild(card);

    card.querySelector('.dlt').addEventListener('click', () => {
        card.remove();
    });
});

    document.addEventListener('keydown', (e) => {
    console.log(e.key);
    });