<?php

declare(strict_types=1);

namespace App\Http\Controllers\Web\Categories;

use App\Http\Controllers\Controller;
use App\Http\Requests\Web\Categories\StoreRequest;
use App\Jobs\Web\Categories\CreateNewCategory;
use Illuminate\Contracts\Auth\Factory;
use Illuminate\Http\RedirectResponse;
use JustSteveKing\Launchpad\Queue\DispatchableCommandBus;

use function action;

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
            job: new CreateNewCategory(
                name: $request->string('name')->toString(),
                userId: $this->auth->guard()->id()
            ),
        );

        return new RedirectResponse(
            url: action(IndexController::class),
        );
    }
}
