<?php

namespace App\Http\Middleware;

use App\Http\Resources\Web\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => Auth::user()
                    ? new UserResource(
                        resource: $request->user(),
                    ) : null,
            ],
            'ziggy' => function () use ($request): array {
                return array_merge((new Ziggy())->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
