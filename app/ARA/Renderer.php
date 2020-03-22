<?php

namespace App\ARA;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Model\Master\Menu;

class Renderer extends Controller
{
  protected $defaultData = [];
  protected $activePage = '';

  /**
   * Menu
   */
  protected $menuParent = [];
  protected $menuRight = [];

  protected function setPageName ($page) {
    $this->activePage = $page;
    return $this;
  }

  protected function makeSharedData ($data = []) {
    $this->getMenu();

    $this->defaultData = [
      'menuParent' => $this->menuParent,
      'meta' => [
        'activePage' => $this->activePage
      ]
    ];

    if (count($data) > 0) {
      $this->defaultData = array_merge($this->defaultData, $data);
    }

    return $this;
  }

  /**
   * Get menu and sub menu
   * @param string $position
   */
  protected function getMenu () {

    // Get all menu
    $this->menuParent = Menu::where('level', 1)->get();
    $this->menuParent->load('children');

    return $this;
  }

  protected function render () {
    return Inertia::render($this->activePage, $this->defaultData);
  }
}
