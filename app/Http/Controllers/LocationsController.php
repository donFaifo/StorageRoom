<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Location;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
use stdClass;

class LocationsController extends Controller
{
    public function index() {
        $locations = Db::select('select id, name, description from locations order by updated_at desc');
        return Inertia::render('Locations', [
            'locations' => $locations
        ]);
    }

    public function newLocation($id = null) {

        if(!empty($id)) {

            $location = DB::query()->select()->from('locations')->where('id','=',$id)->first();

            return Inertia::render('LocationEdit', ['id' => $id, 'location' => $location]);
        } else {
            return Inertia::render('LocationEdit', []);
        }
    }

    public function store(Request $request) {

        $data = $request->all();
        $name = $data['name'];
        $description = $data['description'];
        $id = $data['id'];

        if($id == '') {
            DB::table('locations')->insert([
                'name' => $name,
                'description' => $description,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);         
        } else {
            DB::table('locations')->where('id','=',$id)->update([
                'name' => $name,
                'description' => $description,
                'updated_at' => Carbon::now()
            ]);
        }
        
        return redirect(route('locations'));
    }

    public function deleteLocation(Request $request) {

        $id = $request->all()['id'];

        $containersId = DB::table('containers')->select('id')->where('location_id','=',$id)->get();

        Log::debug($containersId[0]->id);

        foreach($containersId as $i) {
            DB::table('articles_containers')->where('container_id','=',$i->id)->delete();
            DB::table('containers')->delete($i->id);
        }
        
        DB::table('locations')->delete($id);
    }
}
