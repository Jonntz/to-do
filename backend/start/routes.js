'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register', 'AuthController.register');
Route.post('/login', 'AuthController.authenticate');

Route.get('/tarefas', 'TarefaController.index').middleware(["auth"]);

Route.get('users', 'UserController.index').middleware(["auth"]);
Route.get('users/:id', 'UserController.show').middleware(["auth"]);