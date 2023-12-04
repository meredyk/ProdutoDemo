<?php

declare(strict_types=1);

namespace App\Enums\Products;

enum Status: string
{
    case ACTIVE = 'Ativo';
    case INACTIVE = 'Inativo';
}
