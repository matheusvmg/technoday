window.onload = () => {
    document.querySelector('.email').value = ''
    document.querySelector('#e-mail').value = ''
    setTimeout(()=> {
        $(function() {
            $("#newsletterModal").modal();
        });
    }, 5000)
}