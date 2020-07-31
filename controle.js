function search(){
    var pesq = document.getElementById('pesquisar').value;
    if(pesq === document.body){
        alert('pesquisa encontrada!!!');
    }else{
        alert('pesquisa não encontrada!!!');
    }
}

window.onload = () => {
    document.querySelector('.email').value = ''
}