<?php

use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\ContainersController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LocationsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('articles', [ArticlesController::class, 'index'])->name('articles');
    Route::get('locations', [LocationsController::class, 'index'])->name('locations');
    Route::get('containers', [ContainersController::class, 'index'])->name('containers');
    Route::get('articles/{searchText}', [ArticlesController::class, 'searchResult'])->name('articles.searchText');
    Route::get('/article/{id?}', [ArticlesController::class, 'newArticle'])->name('article.new');
    Route::post('article-store', [ArticlesController::class, 'store'])->name('article.store');
    Route::post('article-delete', [ArticlesController::class, 'deleteArticle'])->name('article.delete');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');    
});

require __DIR__.'/auth.php';
