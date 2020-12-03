<?php namespace Acme\Cars\Components;

use Cms\Classes\ComponentBase;
use Acme\Cars\Models\Car;

class CarWidget extends ComponentBase
{
    public $cars;

    public function componentDetails()
    {
        return [
            'name'          => 'Блок авто',
            'description'   => 'Добавить тип авто'
        ];
    }

    public function defineProperties()
    {
        return [
            'carName' => [
                'title'             => 'Выберите раздел',
                'type'              => 'dropdown',
                'default'           => 'maz'
            ],
        ];
    }

    public function getCarNameOptions()
    {
        return Car::orderBy('type', 'asc')->lists('type', 'type');
    }

    public function onRun()
    {
        $cars = new Car;
        $this->cars = $cars::active()->where( 'type', '=', $this->property('carName'))->orderBy('created_at', 'asc')->get();
    }
}
