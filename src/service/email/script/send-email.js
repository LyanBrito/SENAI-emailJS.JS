emailjs.init({
    publicKey: "yre5Wvh_XuuyeDzqJ"

})
function handleEmail() {
    let templateParams = {
        name: "Destinatário",
        user_email: "lyanbrito613@gmail.com",
        from_name: "Suporte de Domingo",
        message: "Conteúdo da mensagem aqui..."
    }


    emailjs.send("service_n0iuc6m", "template_lrujwty", templateParams)
        .then((res) => {
            console.log('sucesso', res.status, res.text)
            alert('sucesso')
        }), (error) => {
            console.error('erro ao enviar o email', error)

        }
}