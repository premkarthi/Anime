gsap.registerPlugin(Flip)

const items = document.querySelectorAll('.item')
const activeNav = document.querySelector('.active_nav')

items.forEach((item) =>{
    item.addEventListener('click', () => {
        gsap.to(items, {color: "#000000"});
        gsap.to(item, {color: "blueviolet"});
    
        let state = Flip.getState(activeNav)
        item.appendChild(activeNav)
        Flip.from(state, {
            duration: 1.25,
            absolute: true,
            ease: "elastic.out(1,0.5)",
        })
    })
})


const cards = document.querySelectorAll('.card')

cards.forEach((card, index) =>{
    card.addEventListener('click', ()=>{
        let state = Flip.getState(cards)

        let isCardActive = card.classList.contains('active')
        cards.forEach((otherCard, otherIdx) => {
            otherCard.classList.remove("active")
            otherCard.classList.remove("is-inactive")

            if(!isCardActive && index !== otherIdx){
                otherCard.classList.add('is-inactive')
            }
        })

        if(!isCardActive) card.classList.add("active")
        Flip.from(state, {
            duration: 1,
            ease: "expo.out",
            absolute: true,
            onComplete: () =>{
                gsap.to('.card p')
            }
        })
    })
})