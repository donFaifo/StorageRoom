<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Location;
use Illuminate\Support\Facades\DB;

class LocationsController extends Controller
{
    public function index() {
        $locations = Db::select('select id, name, description from locations order by created_at');
        return Inertia::render('Locations', [
            'locations' => $locations
        ]);
    }
}
