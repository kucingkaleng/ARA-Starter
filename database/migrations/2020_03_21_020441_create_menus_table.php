<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMenusTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
  Schema::create('menus', function (Blueprint $table) {

    /**
     * Columns
     */
    $table->id();
    $table->string('name');
    $table->string('fa_icon')->nullable();
    $table->string('url')->nullable();
    $table->integer('parent_id')->nullable();
    $table->tinyInteger('pos');
    $table->tinyInteger('level');
    $table->timestamps();

    /**
     * Foreign keys
     */
    $table->foreign('parent_id')
    ->references('id')->on('menus')
    ->onDelete('restrict')->onUpdate('cascade');
  });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('menus');
  }
}
