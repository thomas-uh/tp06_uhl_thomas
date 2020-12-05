<?php

namespace App\Controllers;

use Firebase\JWT\JWT;

class JWTTokenHelper {

    public static function generateJWTToken() {
        $issuedAt = time();

        $payload = [
            'iat' => $issuedAt,
            'exp' => $issuedAt + 60,
            'user_id' => 1
        ];

       return JWT::encode($payload, $_ENV['JWT_SECRET'], 'HS256');
    }

}