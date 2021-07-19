const form = document.getElementById('form');

form.addEventListener('submit',(e) =>{
    e.preventDefault();  //Não deixar Recarregar    
    let email = document.getElementById('email').value;
    let data =
    {
        email
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('email',convertData);

    let content = document.getElementById('content');
    //
    
    //
    content.innerHTML = `<img class="img-carregando" src="assets/carregando.gif">`

    setTimeout(()=>{
        content.innerHTML = `<img class="img-carregando" src="assets/concluido.gif">`

    }
    ,1000);

} );