<?php

namespace App\Http\Resources\Web;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JustSteveKing\Launchpad\Http\Resources\DateResource;

/**
 * @property-read Product $resource
 */
class ProductResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->resource->getKey(),
            'name' => $this->resource->name,
            'description' => $this->resource->description,
            'price' => $this->resource->price,
            'price_br' => 'R$ '.number_format($this->resource->price, 2, ',', '.'),
            'image_url' => $this->resource->image_url,
            'status' => $this->resource->status,
            'created' => new DateResource(
                resource: $this->resource->created_at
            ),
            'category' => $this->resource->category->name,
            'category_id' => $this->resource->category->id,
        ];
    }
}
