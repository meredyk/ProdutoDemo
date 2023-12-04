<?php

declare(strict_types=1);

namespace App\Queries\Products;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;

final class FetchProductsForUser
{
    public function handle(int $user, array $include = []): Collection
    {
        return Product::query()
            ->with($include)
            ->where('user_id', $user)
            ->get();
    }
}
