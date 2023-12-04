<?php

declare(strict_types=1);

use App\Http\Controllers\Web\Categories\IndexController;

use function Pest\Laravel\get;

it('will redirect if not authenticated', function (): void {
    get(
        uri: action(IndexController::class)
    )->assertRedirect(
        uri: '/login',
    );
});

/*test('example', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
});*/
