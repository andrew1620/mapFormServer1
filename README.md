# geodata-layers-api

Для установки, выполните в консоли следующие команды:

- **git clone https://github.com/Hennos/geodata-layers-api.git**
- **cd geodata-layers-api**
- **npm install**
- **npm start**

Сервер по умолчанию будет доступен адресу http://localhost:3000. Номер порта можно изменить, вызвав команду **npm start** следующим образом:

**PORT={номер_порта} npm start**

Доступны запросы:

- **GET http://localhost:{номер_порта}/layers** - получить список существующих слоёв
- **GET http://localhost:{номер_порта}/layers/configs/{id}** - получить конфигурацию конкретного слоя
- **PUT http://localhost:{номер_порта}/layers/configs** - создать конфигурацию нового слоя
- **PUSH http://localhost:{номер_порта}/layers/configs/{id}** - обновить конфигурацию существующего слоя с указанным идентификатором
