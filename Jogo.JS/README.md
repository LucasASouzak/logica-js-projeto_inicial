
**Jogo do Número Secreto**
 Descrição do Jogo O Jogo do Número Secreto é um clássico jogo de adivinhação onde o jogador tenta descobrir um número secreto escolhido aleatoriamente pelo computador. O jogador tem um número limitado de tentativas para adivinhar o número e recebe dicas sobre se seu palpite está maior, menor ou igual ao número secreto.

Funcionalidades do Código O código JavaScript implementado neste README fornece as funcionalidades básicas para o Jogo do Número Secreto, incluindo:

## Geração de número secreto:

 A função `numeroRandom()` gera um número aleatório entre 1 e 10. Esse número é armazenado na variável segredo e serve como o objetivo do jogo para o jogador adivinhar.

***Interface do jogo:*** A função `exibiTextoNaTela(tag, texto)` é utilizada para atualizar o conteúdo textual na tela do jogo. Ela recebe como parâmetros a tag HTML que deseja modificar e o texto a ser exibido.

***Saudação inicial:*** A função `exibeSaudacao()` é responsável por exibir a saudação inicial do jogo, orientando o jogador sobre as regras e como jogar.

***Verificação do palpite:*** A função `verificarChute()` é o núcleo do jogo. Ela recebe o palpite do jogador (através do input) e compara com o número secreto. Se o palpite estiver correto, a função exibe uma mensagem de sucesso e informa quantas tentativas o jogador precisou. Se o palpite estiver incorreto, a função fornece dicas `("menor", "maior")` para ajudar o jogador nas próximas tentativas.

***Limpeza do input:*** A função `limpaTela()` limpa o campo de input após cada tentativa, deixando-o pronto para o próximo palpite do jogador.

***Reinicialização do jogo:*** A função `reiniciarJogo()` reinicia o jogo, gerando um novo número secreto, resetando o contador de tentativas e atualizando a interface com a saudação inicial.

Instruções para Jogar Acesse o HTML: Abra o arquivo HTML do jogo em um navegador web. 
Leia as instruções: A tela inicial exibirá uma saudação e instruções sobre como jogar. 
Insira seu palpite: Digite um número entre 1 e 10 no campo de input principal e clique no botão "Chutar". Receba feedback: A tela exibirá uma mensagem informando se seu palpite está correto, menor ou maior que o número secreto. 
Continue tentando: Repita os passos 4 e 5 até encontrar o número secreto ou atingir o limite de tentativas. Reinicie o jogo: Clique no botão "Novo jogo" para reiniciar o jogo com um novo número secreto. 
Observações Importantes O código JavaScript pode ser facilmente adaptado para incluir mais funcionalidades, como personalização de níveis de dificuldade, histórico de palpites, etc.
