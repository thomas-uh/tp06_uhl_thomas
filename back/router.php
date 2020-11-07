<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;
use Slim\App;

use App\Controllers\UserController;
use App\Middlewares\CorsMiddleware;

return function(App $app) {
    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        return $response;
    });
    $app->add(CorsMiddleware::class);

    $app->group('/users', function(Group $group) {
        $group->post('/login', UserController::class . ':login');
        $group->post('/register', UserController::class . ':register');
    });
};

