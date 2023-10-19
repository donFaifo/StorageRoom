<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory()->create([
            'name' => 'Miguel G.',
            'email' => 'guerrero.benitez.miguel@gmail.com',
            'password' => Hash::make('magb160280')
        ]);

        $this->call([
            ArticleSeeder::class,
            LocationSeeder::class,
            ContainerSeeder::class,
            ArticleContainerSeeder::class
        ]);
    }
}
