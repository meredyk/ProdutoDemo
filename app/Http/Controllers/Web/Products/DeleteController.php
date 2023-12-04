<?php

declare(strict_types=1);

namespace App\Http\Controllers\Web\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\Web\Products\StoreRequest;
use App\Jobs\Web\Products\DeleteProduct;
use App\Queries\Products\FetchProductById;
use Illuminate\Contracts\Auth\Factory;
use Illuminate\Http\RedirectResponse;
use JustSteveKing\Launchpad\Queue\DispatchableCommandBus;

use function action;

final class DeleteController extends Controller
{
    public function __construct(
        private readonly Factory $auth,
        private FetchProductById $query,
        private readonly DispatchableCommandBus $bus,
    ) {
    }

    public function __invoke(StoreRequest $request): RedirectResponse
    {
        $this->bus->dispatch(
            job: new DeleteProduct(
                product: $this->query->handle($request->integer('id')),
            ),
        );

        return new RedirectResponse(
            url: action(IndexController::class),
        );
    }
}
