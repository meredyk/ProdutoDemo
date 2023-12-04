<?php

namespace App\Jobs\Web\Products;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use JustSteveKing\Launchpad\Database\Portal;

final class CreateNewProduct implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    public function __construct(
        public readonly string $name,
        public readonly string $description,
        public readonly int $price,
        public readonly int $categoryId,
        public readonly string $imageUrl,
        public readonly int $userId,
    ) {
    }

    public function handle(Portal $database): void
    {
        $database->transaction(
            callback: fn () => Product::query()->create([
                'name' => $this->name,
                'description' => $this->description,
                'price' => $this->price,
                'category_id' => $this->categoryId,
                'image_url' => ($this->imageUrl) ? $this->imageUrl : 'https://via.placeholder.com/200x200.png/000000',
                'user_id' => $this->userId,
            ]),
        );
    }
}
