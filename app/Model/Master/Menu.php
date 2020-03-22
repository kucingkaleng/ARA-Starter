<?php

namespace App\Model\Master;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
  protected $table = 'menus';
  protected $guarded = ['id'];
  public $timestamps = false;

  public function children () {
    return $this->hasMany(Menu::class, 'parent_id', 'id');
  }
}
