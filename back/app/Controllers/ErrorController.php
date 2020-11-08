<?php

namespace App\Controllers;

use Psr\Http\Message\ServerRequestInterface;
use Psr\Log\LoggerInterface;
use Throwable;
use Slim\App;

class ErrorController {

    public function getHandlerFunction(App $app) {
        return function (
            ServerRequestInterface $request,
            Throwable $exception,
            bool $displayErrorDetails,
            bool $logErrors,
            bool $logErrorDetails,
            ?LoggerInterface $logger = null
        ) use ($app) {
            $payload = $this->getErrorPayload($exception);
    
            $response = $app->getResponseFactory()->createResponse();
            $response->getBody()->write(
                json_encode($payload, JSON_UNESCAPED_UNICODE)
            );
    
            return $response;
        };
    }

    private function getErrorPayload(Throwable $exception): array {
        if ($exception->getCode() == 404) {
            return ['Not Found Error' => $exception->getMessage()];
        }
        else {
            return ['Error message' => $exception->getMessage()];
        }
    }

}