(function() {
    console.log('la ele dez mil vezes')
    emailjs.init({
        publicKey: "yre5Wvh_XuuyeDzqJ",

    })

})();

document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    emailjs.sendForm("service_n0iuc6m", "template_y7hcvv7", this).then(
        function() {
            console.log('sucewsso')
            alert('Email enviado com sucesso!')

        }, function(err) {
            console.log("fail", err)
            alert('Falha ao enviar o email, tente novamente mais tarde.')

        }

    )
})