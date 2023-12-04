<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\Categories\IndexController;
use App\Http\Controllers\Web\Categories\ShowController;
use App\Http\Controllers\Web\Categories\StoreController;
use App\Http\Controllers\Web\Categories\UpdateController;
use App\Http\Controllers\Web\Categories\DeleteController;

Route::get('/', IndexController::class)->name('index');
Route::post('/', StoreController::class)->name('store');
Route::get('{id}', ShowController::class)->name('show');
Route::put('/', UpdateController::class)->name('update');
Route::delete('/', DeleteController::class)->name('delete');
