<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/getFolderAndFileCountFromPath', function () {

});

Route::get('/getFolderAndFileCountFromPath', function ($folder) {
    echo \App\Fsp\Util::getFolderAndFileCountFromPath( public_path($folder));
});
Route::get('/test', function () {
    echo "test";
    // echo getcwd();
    // var_dump(scandir('data'));
    // echo \App\Fsp\Util::getFolderAndFileCountFromPath('public/data');
});
