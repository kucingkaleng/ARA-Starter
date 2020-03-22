<?php

namespace App\Http\Controllers\Gate;

use App\ARA\Renderer;
use Illuminate\Http\Request;
use App\Model\Master\Menu;

class GateController extends Renderer
{
  public function __construct()
  {
    
  }

  public function index() {
    return $this->setPageName('Home')->makeSharedData()->render();
  }

  public function pager() {
    $menus = Menu::where('parent_id', null)->with('children')->get()->toArray();
    return $this->setPageName('Pager')->makeSharedData([
      'menus' => $menus
    ])->render();
  }

}
