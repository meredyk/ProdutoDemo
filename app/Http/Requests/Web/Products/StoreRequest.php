<?php

declare(strict_types=1);

namespace App\Http\Requests\Web\Products;

use Illuminate\Foundation\Http\FormRequest;

final class StoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => [
                'required',
                'string',
                'min:2',
                'max:255',
            ],
            'description' => [
                'required',
                'string',
                'min:15',
                'max:350',
            ],
            'price' => [
                'required',
                'numeric',
                'min:0',
            ],
            'category_id' => [
                'required',
                'integer',
            ],
        ];
    }
}
