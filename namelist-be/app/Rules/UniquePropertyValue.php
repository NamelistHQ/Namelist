<?php

namespace App\Rules;

use App\Models\Eloquent\Portal;
use Closure;
use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Log;

class UniquePropertyValue implements DataAwareRule, ValidationRule
{
    protected $data = [];

    protected $portal;

    protected $objectTypeId;

    protected $propertyName;

    public function __construct(Portal $portal, string $objectTypeId, string $propertyName)
    {
        $this->portal = $portal;
        $this->objectTypeId = $objectTypeId;
        $this->propertyName = $propertyName;
    }

    public function setData(array $data): static
    {
        $this->data = $data;

        return $this;
    }

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        Log::debug('UniquePropertyValue', [
            'object_type_id' => $this->objectTypeId,
            'name' => $this->propertyName,
            'value' => $value,
        ]);

        $exists = $this->portal->crmObjects()
            ->where('crm_object_type_id', $this->objectTypeId)
            ->whereRaw('LOWER(properties->>?) = LOWER(?)', [$this->propertyName, $value])
            ->exists();

        if ($exists) {
            $fail('The :attribute must be unique');
        }
    }
}
