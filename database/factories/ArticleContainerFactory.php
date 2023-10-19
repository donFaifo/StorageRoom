<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ArticleContainerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $articles = \App\Models\Article::all('id')->flatten();
        $containers = \App\Models\Container::all('id')->flatten();

        return [
            'article_id' => fake()->randomElement($articles),
            'container_id' => fake()->randomElement($containers),
            'qt' => fake()->numberBetween(1, 50)
        ];
    }
}
