# GradMate

Bem vindo ao repositório do projeto integrador dos alunos do 5º AMS / Desenvolvimento de Sistemas da Fatec Garça.
 
O projeto visa entregar um sistema **web** de controle de TCCs para uso da coordenação da Fatec Garça.

## Executando o projeto

### Requisitos

Antes de tudo, é necessário configurar o ambiente da sua máquina para ter todos os softwares necessários para rodar o projeto. Certifique-se de ter os seguintes programas instalados e configurados:

- Node.JS v18+ / npm v8.0+ [[Download](https://nodejs.org/en/download)]
- MySQL Server v8.0+ [[Download](https://dev.mysql.com/downloads/file/?id=518835)]

### Variáveis de ambiente

Primeiramente, é necessário configurar o projeto para que ele se conecte ao seu banco de dados. Para isso, crie um arquivo com o nome `.env` no diretório raiz do projeto e coloque as seguintes configurações dentro dele:

```
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=seu-user-aqui
DB_PASS=sua-senha-aqui
APP_PORT=7075
```

| Configuração | Definição |
|-|-|
| `DB_HOST` | É o endereço onde o banco de dados está instalado. Se você possui o banco rodando na mesma máquina que você está rodando o código, esse campo pode ser definido como `127.0.0.1` ou `localhost` |
| `DB_PORT` | É a porta do seu banco, configurada ao instalar o MySQL. Por padrão, é a porta `3306`. |
| `DB_USER` | User do banco de dados, configurado ao instalar o MySQL. |
| `DB_PASS` | Senha do banco de dados, configurado ao instalar o MySQL. |
| `APP_PORT` | É a porta que será utilizada para se conectar ao servidor. |

### Códigos básicos

```
npm run build

npm run start
```