# Kanbam Desafio Técnico - Backend

Para iniciar os serviços basta rodar o comando abaixo

```
docker compose up
```


## Problema no Frontend
Durante o desenvolvimento do codigo tive problema pois o React está recebendo status 200 quando cria um novo card, mesmo o backend configurado para enviar 201.
Mesmo com esse erro o sistema funciona, só é necessario atualizar a pagina a cada vez que adicionar um novo card.

## Docker File
Em vez de criar um container com um script ou programa simples, verificando a existencia do banco e migrações, optei por toda vez que subir a aplicação, dropar o banco de dados, recriar, fazer as migrações, e se existirem seeds, popular o banco, usando o script prestart do npm. 
