const express = require ('express');
const routes = require('./routes');
const { errors } = require('celebrate');
const cors = require ('cors');

const app = express();
 
app.use(cors());
app.use(express.json()); //requisição json
app.use(routes);
app.use(errors());

module.exports = app;


/**
 * Rota / Recursos
 *
 */

/**
 * Métodos HTTP: 
 *
 * GET: busca uma informação do back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */

/**
 * Tipo de parâmetros
 * 
 * Query Params: Parâmetros nomeados na rota após "?" (Filtros, paginação)
 * 
 * { 
 * http://localhost:3333/user?nome=Wenderson&idade=25
 * const params = request.query;
    console.log(params);
    }
 * 
 * Route Params: Parâmetros utilizados para identificar recurso
 * 
 * {
 * http://localhost:3333/user/1
 * const params = request.params;
 * }
 * 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * {
 * utiliza o metodo post http://localhost:3333/user
 * declara app.user(express.json());
 * const body = request.body;
    console.log(body);
 * }
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Serve
 * NoSQL: MongoDB, CounchDB, etc...
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */