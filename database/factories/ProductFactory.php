<?php

namespace Database\Factories;

use App\Enums\Products\Status;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

final class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'price' => $this->faker->randomDigit(),
            'description' => $this->faker->text(300),
            'image_url' => $this->faker->imageUrl(200, 200),
            'status' => Status::ACTIVE,
            'user_id' => User::factory(),
            'category_id' => Category::factory(),
        ];
    }
}
