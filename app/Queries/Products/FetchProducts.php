<?php

declare(strict_types=1);

namespace App\Queries\Products;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;

final class FetchProducts
{
    public function handle(array $include = []): Collection
    {
        return Product::query()
            ->with($include)
            ->get();
    }
}
