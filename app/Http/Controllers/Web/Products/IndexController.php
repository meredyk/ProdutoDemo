<?php

declare(strict_types=1);

namespace App\Http\Controllers\Web\Products;

use App\Http\Resources\Web\ProductResource;
use App\Queries\Products\FetchProductsForUser;
use Illuminate\Contracts\Auth\Factory;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\ResponseFactory;

final class IndexController
{
    public function __construct(
        private readonly Factory $auth,
        private FetchProductsForUser $query,
        private ResponseFactory $response,
    ) {
    }

    public function __invoke(Request $request): Response
    {
        return $this->response->render(
            component: 'Products/Index',
            props: [
                'products' => ProductResource::collection(
                    resource: $this->query->handle(
                        user: $this->auth->guard()->id()
                    )
                ),
            ]
        );
    }
}
