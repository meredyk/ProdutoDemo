<?php

declare(strict_types=1);

namespace App\Http\Controllers\Web\Categories;

use App\Http\Resources\Web\CategoryResource;
use App\Queries\Categories\FetchCategoryById;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\ResponseFactory;

final class ShowController
{
    public function __construct(
        private readonly ResponseFactory $response,
        private FetchCategoryById $query,
    ) {
    }

    public function __invoke(Request $request, int $id): Response
    {
        return $this->response->render(
            component: 'Categories/Show',
            props: [
                'category' => new CategoryResource(
                    resource: $this->query->handle(
                        id: $id,
                        include: ['products', 'user'],
                    )
                ),
            ],
        );
    }
}
