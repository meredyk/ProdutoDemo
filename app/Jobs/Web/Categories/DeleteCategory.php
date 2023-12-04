<?php

declare(strict_types=1);

namespace App\Jobs\Web\Categories;


use App\Models\Category;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use JustSteveKing\Launchpad\Database\Portal;

final class DeleteCategory implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    public function __construct(
        public readonly Category $category,
    ) {}

    public function handle(Portal $database): void
    {
        $database->transaction(
            callback: fn () => $this->category->delete(),
        );
    }
}
