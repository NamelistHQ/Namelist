<?php

namespace App\Models\Eloquent;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Portal extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function organization(): BelongsTo
    {
        return $this->belongsTo(Organization::class);
    }

    public function crmObjects(): HasMany
    {
        return $this->hasMany(CrmObject::class);
    }

    public function objectProperties(): HasMany
    {
        return $this->hasMany(CrmObjectProperty::class);
    }
}
