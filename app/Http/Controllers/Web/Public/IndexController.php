<?php

declare(strict_types=1);

namespace App\Http\Controllers\Web\Public;

use App\Http\Resources\Web\ProductResource;
use App\Queries\Products\FetchProducts;
use Illuminate\Contracts\Auth\Factory;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\ResponseFactory;

final class IndexController
{
    public function __construct(
        private readonly Factory $auth,
        private FetchProducts $query,
        private ResponseFactory $response,
    ) {
    }

    public function __invoke(Request $request): Response
    {
        return $this->response->render(
            component: 'Home',
            props: [
                'products' => ProductResource::collection(
                    resource: $this->query->handle()
                ),
            ]
        );
    }
}
