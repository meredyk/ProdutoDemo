<?php

declare(strict_types=1);

namespace App\Jobs\Web\Products;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use JustSteveKing\Launchpad\Database\Portal;

final class UpdateProduct implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    public function __construct(
        public readonly Product $product,
        public readonly string $newName,
        public readonly string $newDescription,
        public readonly int $newPrice,
        public readonly int $newCategoryId,
        public readonly string $newImageUrl,
    ) {
    }

    public function handle(Portal $database): void
    {
        $database->transaction(
            callback: fn () => $this->product->update([
                'name' => $this->newName,
                'description' => $this->newDescription,
                'price' => $this->newPrice,
                'category_id' => $this->newCategoryId,
                'image_url' => ($this->newImageUrl) ? $this->newImageUrl : 'https://via.placeholder.com/200x200.png/000000',
            ]),
        );
    }
}
