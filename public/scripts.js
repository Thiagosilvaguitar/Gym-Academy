const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const closeModal = document.querySelector(".close-modal");

for (let card of cards){
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id") //Colocando o video de maneira dinamica
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
    })
}

document.querySelector(".close-modal").addEventListener("click" , function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src="" //faz remover o video em segundo plano
})

