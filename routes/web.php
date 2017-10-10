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

Route::get('/', 'BrowsersyncController@home');

Route::get('/routeParameters/{id}/{name}', function ($param1, $param2) {
    echo '<p>Yes, you can can use different parameters than the ones defined on the route';
    echo "<p>Param1: $param1</p>";
    echo "<p>Param2: $param2</p>";
});

Route::get('/routes', function () {
    $routeCollection = Route::getRoutes();
    dd($routeCollection);
});

Route::get('/tinymce', function () {
    return View('tinymce');
});

Route::post('/tinymce', function (\Illuminate\Http\Request $request) {
    dd($request->input('mytextarea'));
});
