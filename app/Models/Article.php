<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'lm', 'ean', 'description'
    ];

    public function container(): BelongsToMany
    {
        return $this->belongsToMany(Container::class);
    }
}
