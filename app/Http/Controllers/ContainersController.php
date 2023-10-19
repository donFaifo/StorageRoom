<?php

namespace App\Http\Controllers;

use App\Models\Container;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class ContainersController extends Controller
{
    public function index() {

        //$containers = Container::all()->sortBy('created_at', SORT_DESC, true);
        $containers = DB::table('containers')
            ->join('locations', 'locations.id', '=', 'containers.location_id')
            ->get([
                'containers.id as id',
                'containers.number as number',
                'containers.description as description',
                'containers.fill as fill',
                'locations.id as location_id',
                'locations.name as location_name',
            ]);
        return Inertia::render('Containers', [
            'containers' => $containers
        ]);
    }
}
