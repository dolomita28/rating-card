const btnRound = document.querySelectorAll('[data-btn]');
const btnSubmit = document.querySelector('.btn-submit');
const cards = document.querySelectorAll('.card');
const score = document.querySelector('.score');

const updateScore = (scoreTxt) => {
    score.innerHTML = '';
    score.insertAdjacentHTML('beforeend', scoreTxt)
}

btnRound.forEach(btn=>{
    btn.addEventListener('click',(event)=>{
        event.preventDefault();        
        updateScore(`You selected ${event.target.innerText} out of 5`);
    })
})

btnSubmit.addEventListener('click',()=>{   
    cards.forEach(card => {        
        card.classList.toggle('hidden');       
    })
})

