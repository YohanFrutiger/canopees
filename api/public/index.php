<?php

use App\Kernel;

// require_once dirname(__DIR__).'/vendor/autoload_runtime.php';
require_once '/home/yohanfrutiger/www/vendor/autoload_runtime.php'; // dev

return function (array $context) {
    return new Kernel($context['APP_ENV'], (bool) $context['APP_DEBUG']);
};
