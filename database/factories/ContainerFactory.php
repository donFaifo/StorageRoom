<?php

namespace Database\Factories;

use App\Models\Location;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Container>
 */
class ContainerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $locations = Location::all('id')->flatten();

        return [
            'number' => fake()->text(10),
            'description' => fake()->text(25),
            'fill' => fake()->randomFloat(1, 0, 1),
            'location_id' => fake()->randomElement($locations)
        ];
    }
}
