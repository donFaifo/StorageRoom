<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class ArticlesController extends Controller
{
    public function index(){

        $articles = DB::query()->select()->from('articles')->orderBy('created_at', 'desc')->get();

        return Inertia::render('Articles', ['articles' => $articles]);
    }

    public function searchResult($searchText) {

        $data=[];

        $articles = DB::table('articles')
            ->select(['id', 'lm', 'ean', 'description'])
            ->where('articles.lm', '=', $searchText)
            ->orWhere('articles.ean', '=', $searchText)
            ->orWhere('articles.description', 'like', '%'.$searchText.'%')
            ->get();
        
        foreach($articles as $article) {
            array_push($data, [
                'id' => $article->id,
                'lm' => $article->lm,
                'ean' => $article->ean,
                'description' => $article->description,
                'containers' => DB::table('articles_containers')
                    ->select(
                        'articles_containers.id as id',
                        'containers.number as container_number',
                        'locations.name as location_name',
                        'articles_containers.qt as qt'
                    )
                    ->join('containers', 'containers.id', '=', 'articles_containers.container_id')
                    ->join('locations', 'containers.location_id', '=', 'locations.id')
                    ->where('article_id','=', $article->id)
                    ->get()->toArray()
            ]);       
        }
    
        return Inertia::render('SearchResult', [
            'data' => $data
        ]);
    }

    public function articlesApi() {
        return DB::select('select * from articles');
    }

    public function newArticle() {
        return Inertia::render('ArticleEdit', []);
    }

    public function store(Request $request) {

        $data = $request->all();
        $lm = $data['lm'];
        $ean = $data['ean'];
        $description = $data['description'];

        $record = new Article();
        $record->lm = $lm;
        $record->ean = $ean;
        $record->description = $description;
        $record->save();
        
        return redirect(route('articles'));
    }
}
