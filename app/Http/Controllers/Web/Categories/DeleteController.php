<?php

declare(strict_types=1);

namespace App\Http\Controllers\Web\Categories;

use App\Http\Controllers\Controller;
use App\Http\Requests\Web\Categories\StoreRequest;
use App\Jobs\Web\Categories\DeleteCategory;
use App\Queries\Categories\FetchCategoryById;
use Illuminate\Contracts\Auth\Factory;
use Illuminate\Http\RedirectResponse;
use JustSteveKing\Launchpad\Queue\DispatchableCommandBus;

use function action;

final class DeleteController extends Controller
{
    public function __construct(
        private readonly Factory $auth,
        private FetchCategoryById $query,
        private readonly DispatchableCommandBus $bus,
    ) {
    }

    public function __invoke(StoreRequest $request): RedirectResponse
    {
        $this->bus->dispatch(
            job: new DeleteCategory(
                category: $this->query->handle($request->integer('id')),
            ),
        );

        return new RedirectResponse(
            url: action(IndexController::class),
        );
    }
}
