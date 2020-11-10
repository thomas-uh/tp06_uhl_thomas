<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

use Firebase\JWT\JWT;

class UserController
{

    public function login(Request $request, Response $response, array $args): Response
    {
        $data = $request->getParsedBody();

        $login = $data['login'] ?? "";
        $password = $data['password'] ?? "";

        if ($login != $_ENV['USER_LOGIN'] || $password != $_ENV['USER_PASSWORD']) {
            $response->getBody()->write(json_encode(['success' => false]));

            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(401);
        }

        $issuedAt = time();

        $payload = [
            'iat' => $issuedAt,
            'exp' => $issuedAt + 60,
            'user_id' => 1
        ];

        $token_jwt = JWT::encode($payload, $_ENV['JWT_SECRET'], 'HS256');

        $response->getBody()->write(json_encode([
            'success' => true,
            'user' => [
                'id' => 1,
                'login' => $login
                ]  
            ]));
        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withHeader('Authorization', 'Bearer ' . $token_jwt)
            ->withStatus(200);
    }

    public function register(Request $request, Response $response, array $args): Response
    {
        $user = $request->getParsedBody();

        $response->getBody()->write(json_encode($user));
        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }
}