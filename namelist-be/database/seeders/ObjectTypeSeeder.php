<?php

namespace Database\Seeders;

use App\Models\Enum\PropertyDefinitionType;
use App\Models\ObjectType;
use Illuminate\Database\Seeder;

class ObjectTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $contactObjectType = ObjectType::create([
            'name' => 'Contact',
        ]);

        $contactProperties = [
            [
                'name' => 'first_name',
                'type' => PropertyDefinitionType::text,
                'validations' => 'required_without:email_address|nullable|string|max:120',
            ],
            [
                'name' => 'last_name',
                'type' => PropertyDefinitionType::text,
                'validations' => 'nullable|string|max:120',
            ],
            [
                'name' => 'email_address',
                'type' => PropertyDefinitionType::email,
                'validations' => 'required_without:first_name|nullable|email|namelist:unique_property:email_address',
            ],
            [
                'name' => 'phone_number',
                'type' => PropertyDefinitionType::phoneNumber,
                'validations' => 'nullable|string|max:30',
            ],
        ];

        foreach ($contactProperties as $property) {
            $contactObjectType->properties()->create([
                'name' => $property['name'],
                'type' => $property['type'],
                'validations' => $property['validations'],
            ]);
        }
    }
}
