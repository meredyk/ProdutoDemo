<?php

declare(strict_types=1);

namespace App\Queries\Categories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

final class FetchCategoryById
{
    public function handle(int $id, array $include = []): Model|Category|null
    {
        return Category::query()
            ->with($include)
            ->findOrFail(
                id: $id
            );
    }
}
