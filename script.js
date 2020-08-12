var form = document.getElementById('contactForm')
var listaContact = []

contactForm.addEventListener('submit', event => {
    event.preventDefault()

    listaContact= localStorage.getItem('data')
    if(listaContact == null){
        listaContact=[]
    }else{
        listaContact = JSON.parse(listaContact)
    }
    }

    var nameForm = document.getElementById('name')
    var phoneForm = document.getElementById('phone')
    var emailForm = document.getElementById('email')
    var messegeForm = document.getElementById('message')

    console.log(nameForm)

    data = {
        name: nameForm.nodeValue,
        phone: phoneForm.nodeValue,
        email: emailForm.nodeValue,
        message: messegeForm.nodeValue,
    }

    listaContact.push(data)
    localStorage.setItem('data',JSON.stringify(listaContact))

    nameForm.value = ""
    phoneForm.value = ""
    emailForm.value = ""
    messegeForm.value = ""
})