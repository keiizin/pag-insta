const like = document.querySelectorAll('.like')

like.forEach((like,) => {
    like.addEventListener('click', function() {
        like.classList.add('likado')
        

        /* const likado = document.querySelector('likado')
        likado.classList.remove('likado') */
    })

})
const likado = document.querySelectorAll('likado')
    likado.forEach((likado,) => {
        likado.addEventListener('click', function() {
            likado.classList.remove('likado')
    
        })
    })
    
        