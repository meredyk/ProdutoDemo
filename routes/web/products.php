<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\Products\IndexController;
use App\Http\Controllers\Web\Products\ShowController;
use App\Http\Controllers\Web\Products\StoreController;
use App\Http\Controllers\Web\Products\UpdateController;
use App\Http\Controllers\Web\Products\DeleteController;

Route::get('/', IndexController::class)->name('index');
Route::get('{id}', ShowController::class)->name('show');
Route::post('/', StoreController::class)->name('store');
Route::put('/', UpdateController::class)->name('update');
Route::delete('/', DeleteController::class)->name('delete');

