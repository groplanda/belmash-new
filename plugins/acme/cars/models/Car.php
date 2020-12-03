<?php namespace Acme\Cars\Models;

use Model;

/**
 * Model
 */
class Car extends Model
{
    use \October\Rain\Database\Traits\Validation;

    use \October\Rain\Database\Traits\SoftDelete;

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'acme_cars_car';

    /**
     * @var array Validation rules
     */
    public $rules = [
        'title' => 'required',
        'type' => 'required',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', 1);
    }
}
