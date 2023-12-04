<?php

declare(strict_types=1);

namespace App\Http\Controllers\Web\Products;

use App\Http\Resources\Web\CategoryResource;
use App\Http\Resources\Web\ProductResource;
use App\Queries\Products\FetchProductById;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\ResponseFactory;

final class ShowController
{
    public function __construct(
        private readonly ResponseFactory $response,
        private FetchProductById $query,
    ) {
    }

    public function __invoke(Request $request, int $id): Response
    {
        return $this->response->render(
            component: 'Products/Show',
            props: [
                'product' => new ProductResource(
                    resource: $this->query->handle(
                        id: $id
                    )
                ),
            ],
        );
    }
}
