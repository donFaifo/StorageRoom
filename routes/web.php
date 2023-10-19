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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('articles', [ArticlesController::class, 'index'])->middleware(['auth', 'verified'])->name('articles');
Route::get('locations', [LocationsController::class, 'index'])->middleware(['auth', 'verified'])->name('locations');
Route::get('containers', [ContainersController::class, 'index'])->middleware(['auth', 'verified'])->name('containers');
Route::get('articles/{searchText}', [ArticlesController::class, 'searchResult'])->middleware(['auth', 'verified'])->name('articles.searchText');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/article', [ArticlesController::class, 'newArticle'])->name('article.new');
    
});

require __DIR__.'/auth.php';
