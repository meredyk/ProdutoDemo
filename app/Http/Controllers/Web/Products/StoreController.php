<?php

declare(strict_types=1);

namespace App\Http\Controllers\Web\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\Web\Products\StoreRequest;
use App\Jobs\Web\Products\CreateNewProduct;
use Illuminate\Contracts\Auth\Factory;
use Illuminate\Http\RedirectResponse;
use JustSteveKing\Launchpad\Queue\DispatchableCommandBus;

final class StoreController extends Controller
{
    public function __construct(
        private readonly Factory $auth,
        private readonly DispatchableCommandBus $bus,
    ) {
    }

    public function __invoke(StoreRequest $request): RedirectResponse
    {
        $this->bus->dispatch(
            job: new CreateNewProduct(
                name: $request->string('name')->toString(),
                description: $request->string('description')->toString(),
                price: $request->integer('price'),
                categoryId: $request->integer('category_id'),
                imageUrl: $request->string('image_url')->toString(),
                userId: $this->auth->guard()->id()
            ),
        );

        return new RedirectResponse(
            url: action(IndexController::class),
        );
    }
}
