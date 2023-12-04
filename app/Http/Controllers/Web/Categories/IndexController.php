<?php

declare(strict_types=1);

namespace App\Http\Controllers\Web\Categories;

use App\Http\Resources\Web\CategoryResource;
use App\Queries\Categories\FetchCategoriesForUser;
use Illuminate\Contracts\Auth\Factory;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\ResponseFactory;

final class IndexController
{
    public function __construct(
        private readonly Factory $auth,
        private FetchCategoriesForUser $query,
        private ResponseFactory $response,
    ) {
    }

    public function __invoke(Request $request): Response
    {
        return $this->response->render(
            component: 'Categories/Index',
            props: [
                'categories' => CategoryResource::collection(
                    resource: $this->query->handle(
                        user: $this->auth->guard()->id()
                    )
                ),
            ]
        );
    }
}
