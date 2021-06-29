# Weather App

Aplicativo de previsão do tempo desenvovido com React Native.

![Example of Weather App](https://i.imgur.com/VzxrKNr.gif)

## O que precisa para rodar?

Para rodar o aplicativo localmente em seu emulador, serão necessários alguns pre-requisitos.
Para executar em emuladores iOS, é necessário que você tenha um MacOS.

- NPM

### iOS

- XCode
- Cocoapods

### Android

- Android Studios
- Emulador

## Antes de começar

Primeiramente configure o seu .env com as chaves necessárias para rodar as API's do projeto.
No arquivo `.env.example` há um exemplo das variáveis de ambiente necessárias.

Porém será necessário gerar as API Keys do Google Places e Open Weather API.

[Google Places API Key](https://developers.google.com/maps/documentation/places/web-service/get-api-key)
[Open Weather API Key](https://openweathermap.org/api)

## Como executar no emulador

Para rodar no iOS 
```
yarn ios
```

Para rodar no Android primeiro abra o metro bundler.
```
yarn start
``` 

Em seguida rode o comando abaixo para rodar o aplicativo no android.
```
yarn android
```