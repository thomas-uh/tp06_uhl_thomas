<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;
use Slim\App;
use Tuupola\Middleware\JwtAuthentication;

use App\Controllers\UserController;
use App\Middlewares\CorsMiddleware;
use App\Controllers\ErrorController;

return function(App $app) {
    // Error routing
    // $errorMiddleware = $app->addErrorMiddleware(true, true, true);
    // $errorMiddleware->setDefaultErrorHandler((new ErrorController())->getHandlerFunction($app));

    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        return $response;
    });
    
    $app->add(CorsMiddleware::class);

    $app->group('/users', function(Group $group) {
        $group->post('/login', UserController::class . ':login');
        $group->post('/register', UserController::class . ':register');
        $group->get('/account/{login}', UserController::class . ':getUser');
    });

    $options = [
        "attribute" => "token",
        "header" => "Authorization",
        "regexp" => "/Bearer\s+(.*)$/i",
        "secure" => false,
        "algorithm" => ["HS256"],
        "secret" => $_ENV['JWT_SECRET'],
        "path" => ["/"],
        "ignore" => ["/users/register","/users/login"],
        "error" => function ($response, $arguments) {
            $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'JWT Non valide');
            $response = $response->withStatus(401);
            return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
        }
    ];

    $app->add(new JwtAuthentication($options));
};

