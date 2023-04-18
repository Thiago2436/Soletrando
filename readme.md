<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Jogo de Soletrar</title>
</head>
<body>
    <h1>Jogo de Soletrar</h1>
    <p>Este projeto consiste em um jogo de soletrar que utiliza uma API pública para buscar palavras aleatórias em português e apresentá-las aos usuários. O objetivo do jogo é acertar a palavra apresentada antes que o tempo acabe.</p>

    <h2>Tecnologias utilizadas</h2>
    <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>API do Dicionário Aberto</li>
    </ul>

    <h2>Como testar o projeto localmente</h2>
    <p>Para testar o projeto localmente, siga os seguintes passos:</p>
    <ol>
        <li>Clone o repositório em seu computador:
            <pre>git clone https://github.com/seu-usuario/nome-do-repositorio.git</pre>
        </li>
        <li>Navegue até o diretório do projeto:
            <pre>cd nome-do-repositorio</pre>
        </li>
        <li>Abra o arquivo index.html em seu navegador de internet</li>
    </ol>

    <h2>Como jogar</h2>
    <p>Ao iniciar o jogo, uma palavra aleatória em português será exibida na tela por 10 segundos. Após esse período, a palavra será ofuscada e o usuário deverá tentar soletrá-la corretamente no campo de entrada abaixo da palavra. O usuário tem um tempo limite de 30 segundos para soletrar a palavra corretamente.</p>

    <p>A cada acerto, o usuário ganha um ponto e uma nova palavra aleatória será apresentada. Caso o usuário erre a palavra ou o tempo se esgote, o usuário perde um ponto e uma nova palavra aleatória será apresentada.</p>

    <p>O score do usuário e o tempo restante são exibidos na tela. O jogo pode ser reiniciado a qualquer momento clicando no botão "Reiniciar Jogo".</p>
</body>
</html>
