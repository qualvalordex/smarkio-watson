# SMARKIO - TESTE TÉCNICO - IBM WATSON TTS

## Dependências

Para a completa execução deste projeto é necessário que você tenha o `docker-compose` instalado na sua máquina. [Veja na documentação oficial](https://docs.docker.com/compose/install/) como instalar. Também é necessário o `NodeJS` e o seu gerenciador de pacotes `npm`. [Aqui você pode baixá-lo.](https://nodejs.org/en/download/)

OBS: Este protótipo foi desenvolvido para rodar em ambientes Unix, podendo haver problemas de execução em outras plataformas.

## Credenciais

Antes de utilizar a aplicação, você deve adicionar as suas credenciais de acesso a API do IBM WATSON TTS. Para mais detalhes sobre como obter suas credenciais, [acesse a docementação oficial](https://cloud.ibm.com/docs/text-to-speech-data?topic=text-to-speech-data-gettingStarted&locale=pt-BR).

Com a chave da API e a URL do serviço em mãos, edite o arquivo `./server/.env` substituindo os textos entre aspas pelas suas credenciais.
```
// .env
API_KEY="SUA_CHAVE_DA_API_IBM"
API_URL="ENDEREÇO_DO_SERVIÇO"
```

## Instalação do projeto

Clone o repositório em um local de sua preferência:
```
git clone git@github.com:qualvalordex/smarkio-watson.git
```

Em um terminal, navegue até a pasta raíz do projeto e execute o comando
```
npm run setup
```
para instanciar o servidor MySQL e instalar as dependências do projeto.

<img src="https://i.imgur.com/7bM84zk.gif" width="500" />

Em seguida, digite o comando
```
npm run start-server
```
para subir o servidor.

<img src="https://i.imgur.com/urumWaF.gif" width="500" />

Você deverá receber a mensagem `Server is running on 8080`.

Agora abra um novo terminal e, na raíz do projeto, execute o comando
```
npm run start-client
```
<img src="https://i.imgur.com/Uqf7wGV.gif" width="500" />

Caso a inicialização ocorra com sucesso, você receberá a mensagem `You can now view client in the browser.`. Basta abrir um navegador da internet e digitar o seguinte caminho: `http://localhost:3000` e o site irá inicializar.

## Screenshots

<img src="https://i.imgur.com/z0u4qbI.png" width="600" title="Tela principal da aplicação" />

<img src="https://i.imgur.com/RszGkvc.gif" width="600" title="Tela principal da aplicação - animação"/>