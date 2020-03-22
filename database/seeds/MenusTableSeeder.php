<?php

use Illuminate\Database\Seeder;

class MenusTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $items = [
      [
        'id' => 1,
        'name' => 'Home',
        'fa_icon' => 'home',
        'url' => 'home',
        'pos' => 1,
        'level' => 1,
      ],
      [
        'id' => 2,
        'name' => 'Config',
        'fa_icon' => 'cog',
        'url' => 'pager',
        'pos' => 2,
        'level' => 1,
      ],
    ];

    $children = [
      [
        'parent_id' => 1,
        'name' => 'Dashboard',
        'fa_icon' => 'line-chart',
        'url' => 'pager',
        'pos' => 1,
        'level' => 2,
      ],
    ];

    DB::table('menus')->insert($items);
    DB::table('menus')->insert($children);
  }
}
