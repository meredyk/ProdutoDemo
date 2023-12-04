<?php

declare(strict_types=1);

namespace App\Queries\Products;

use App\Models\Product;
use Illuminate\Database\Eloquent\Model;

final class FetchProductById
{
    public function handle(int $id, array $include = []): Model|Product|null
    {
        return Product::query()
            ->with($include)
            ->findOrFail(
                id: $id
            );
    }
}
