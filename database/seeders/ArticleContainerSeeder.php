<?php

namespace Database\Seeders;

use App\Models\ArticleContainer;
use Illuminate\Database\Seeder;

class ArticleContainerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ArticleContainer::factory(50)->create();
    }
}
