# SMARKIO - TESTE TÉCNICO - IBM WATSON TTS

## Dependências

Para a completa execução deste projeto é necessário que você tenha o `docker-compose` instalado na sua máquina. [Veja na documentação oficial](https://docs.docker.com/compose/install/) como instalar.

## Instalação do projeto

Após a clonagem do repositório, em um terminal, navegue até a pasta raíz do projeto e execute os comandos:
```
npm run setup
npm start-server
```
Você deverá receber a mensagem `Server is running on 8080`. Agora abra um novo terminal e execute o comando:
```
npm start-client
```
Caso a inicialização ocorra com sucesso, você receberá a mensagem `You can now view client in the browser.`. Basta abrir um navegador da internet e digitar o seguinte caminho: `http://localhost:3000` e o site irá inicializar.