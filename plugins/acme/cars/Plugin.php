<?php namespace Acme\Cars;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
        return [
            'Acme\Cars\Components\CarWidget' => 'carwidget',
        ];
    }

    public function registerSettings()
    {
    }
}
