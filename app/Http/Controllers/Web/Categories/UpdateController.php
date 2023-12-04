<?php

declare(strict_types=1);

namespace App\Http\Controllers\Web\Categories;

use App\Http\Controllers\Controller;
use App\Http\Requests\Web\Categories\StoreRequest;
use App\Http\Requests\Web\Categories\UpdateRequest;
use App\Jobs\Web\Categories\UpdateCategory;
use App\Queries\Categories\FetchCategoryById;
use Illuminate\Contracts\Auth\Factory;
use Illuminate\Http\RedirectResponse;
use JustSteveKing\Launchpad\Queue\DispatchableCommandBus;

use function action;

final class UpdateController extends Controller
{
    public function __construct(
        private readonly Factory $auth,
        private FetchCategoryById $query,
        private readonly DispatchableCommandBus $bus,
    ) {
    }

    public function __invoke(UpdateRequest $request): RedirectResponse
    {
        $this->bus->dispatch(
            job: new UpdateCategory(
                category: $this->query->handle($request->integer('id')),
                newName: $request->string('name')->toString(),
            ),
        );

        return new RedirectResponse(
            url: action(IndexController::class),
        );
    }
}
