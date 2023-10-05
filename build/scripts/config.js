$(document).ready(function() {
    $("#validar").click(function() {
        var email = $("#cemail").val();
        
        // Faça a validação do email, envie os dados ou realize a ação desejada aqui
        if (isValidEmail(email)) {
            // O email é válido, você pode prosseguir com a ação desejada
            alert("Email válido. Enviando...");
        } else {
            // O email não é válido, você pode tratar os erros aqui
            alert("Email inválido. Por favor, corrija os erros.");
        }
    });

    // Função para validar o formato do email
    function isValidEmail(email) {
        // Implemente sua lógica de validação de email aqui
        // Esta é uma validação de exemplo simples
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
});
