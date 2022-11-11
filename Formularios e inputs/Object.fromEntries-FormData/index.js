
let value = []

const input = document.querySelector('.input1')
input.addEventListener('change', (event)=>{
    //console.log(e.target.value)
    //console.log(x)
    console.log(event.target.value)
    //value = event.target.size
    //console.log(value)
})


//console.log(value)

const form =  document.getElementById('form')
console.log(form)
console.log(form.password.value)
const userName = document.querySelector('.parrafo')
const image = document.querySelector('#img')


const renderImage = (data) => {
const file = data.get('image')
//const file = data.image
const imageUrl = URL.createObjectURL(file)
image.setAttribute('src', imageUrl)
}

const userContent = (data) => {
   userName.textContent = data.get('name')
   //userName.textContent = data.name
}


const send = (e) => {
    e.preventDefault()
    console.log(e.target)
    //const data = Object.fromEntries( new FormData( e.target ) ) 
    const formData = new FormData( e.target )
      console.log(formData)
      fetch('/img', {
        method: 'POST',
        body: formData
      }) 
    //userContent(formData)
    //renderImage(formData)
}

form.addEventListener('submit', send)

const file = form.querySelector('#file')
console.log(file)
// file.addEventListener('change',(e)=> {
//     const data = new FormData(form )  
//        renderImage(data)
// })

 





