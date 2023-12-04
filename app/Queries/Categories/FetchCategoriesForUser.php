<?php

declare(strict_types=1);

namespace App\Queries\Categories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Collection;

final class FetchCategoriesForUser
{
    public function handle(int $user, array $include = []): Collection
    {
        return Category::query()
            ->with($include)
            ->where('user_id', $user)
            ->get();
    }
}
