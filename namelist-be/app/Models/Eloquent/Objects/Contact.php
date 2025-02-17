<?php

namespace App\Models\Eloquent\Objects;

use App\Models\Eloquent\CrmObject;
use App\Models\Eloquent\CrmObjectAssociation;
use App\Models\Enum\ObjectTypeId;
use Database\Factories\ContactFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Contact extends CrmObject
{
    use HasFactory;

    protected static function booted(): void
    {
        static::addGlobalScope('object_type', function (Builder $builder) {
            $builder->where('crm_object_type_id', ObjectTypeId::Contact);
        });

        static::creating(function ($contact) {
            $contact->crm_object_type_id = ObjectTypeId::Contact;
        });
    }

    protected static function newFactory()
    {
        return ContactFactory::new();
    }

    public function engagements(): HasManyThrough
    {
        return $this->hasManyThrough(CrmObject::class, CrmObjectAssociation::class, 'crm_object_id', 'associated_crm_object_id')
            ->where('crm_object_type_id', ObjectTypeId::Engagement);
    }

    public function formSubmissions(): HasManyThrough
    {
        return $this->hasManyThrough(CrmObject::class, CrmObjectAssociation::class, 'crm_object_id', 'associated_crm_object_id')
            ->where('crm_object_type_id', ObjectTypeId::FormSubmission);
    }
}
