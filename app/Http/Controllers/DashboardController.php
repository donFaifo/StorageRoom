<?php

namespace App\Http\Controllers;

use App\Models\Container;
use App\Models\Location;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index() {
        
        $containers = Container::all();
        $locations = Location::all();

        $locationsList = array();

        foreach($locations as $location) {
            
            $locationContainers = Container::query()
                ->where('location_id', '=', $location->id)
                ->get(['id', 'number', 'description', 'fill']);

            array_push($locationsList, [
                'id' => $location->id,
                'name' => $location->name,
                'description' => $location->description,
                'containers' => $locationContainers
            ]);
        }
        
        return Inertia::render('Dashboard', [
            'locationsList' => $locationsList
        ]);
    }

    public function showLocations() {

        return Inertia::render('Locations');
    }
}
