
#  Projeto Backend Junior Cubos Tecnologia

<p align = "center">Projeto ApiFinanceira</p>


<p align = "center">
<a href="#Sobre">Sobre</a>.
<a href="#Etapas">Etapas</a>.
<a href="#Instruções">Instruções</a>.

</p>

# Sobre
<p>O projeto ApiFinanceira, foi desenvolvida por meio do desafio passado pela Cubos Tecnologia, por se tratar de uma empresa inovadora e desenvolvedora de serviços financeiros. Está  Api, tem como função realizar cadastro de cliente, criação de conta, criar cartões relacionadas as contas e também pessoas, realizar transações. </p>


# Etapas


[x]Criação de uma pessoa. <br>
[x]Criação de uma conta para uma pessoa.<br>
[x]Criação de um cartão em uma conta.<br>
[x]Listagem de todos os cartões de uma conta.<br>
[x]Criação de uma transação em uma conta.<br>
[x]Listagem de todas as transações de uma conta<br>
[ ]Retorna o saldo de uma conta.<br>
[ ]Realiza a reversão de uma transação

# Instruções
<p>Para executar a aplicação, é necessario tem instalado o NodeJs, Typescript, Famework Adonis,migrations, PostgreSQL e o Insominia ou Postman, para enviar as requisições.</p>

<h2>Instruções<h2>
<ul>
<ol>
#Verificar instalações:
<li># check node.js version
node -v</li>
<li>npm init adonis-ts-app@latest .</li> 
<li>Clone a aplicação</li>

</ol>
</ul>

<p>Para executar a aplicação,garantir que está com o banco de dados e o framework de requisições abertos "Insominia ou Postman". No terminal, execute o, "node ace migration:fresh" para atualizar o banco. </p>
<p>Para iniciar o servidor, "node ace serve --watch  " e nele, crie os requests desejado pela aplicação, metodos Posts e Gets:
<ul>
<li>POST /people</li>
<li>POST /people/:peopleId/accounts</li> 
<li>GET /people/:peopleId/accounts</li>
<li>POST /accounts/:accountId/cards</li>
<li>GET /accounts/:accountId/cards</li>
<li>GET /people/:peopleId/cards</li>
<li>POST /accounts/:accountId/transactions</li>
<li>GET /accounts/:accountId/transactions</li>

</ul>
</p>


