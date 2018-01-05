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

Route::view('/', 'modular-js');
Route::get('/browserSync', 'BrowsersyncController@home');
Route::get('/routeParameters/{id}/{name}', function ($param1, $param2) {
    echo '<p>Yes, you can can use different parameters than the ones defined on the route';
    echo "<p>Param1: $param1</p>";
    echo "<p>Param2: $param2</p>";
});
Route::get('/routes', function () {
    $routeCollection = Route::getRoutes();
    dd($routeCollection);
});
Route::get('/posts', 'VoyagerController@allPosts');
Route::view('/tinymce', 'tinymce');

Route::post('/tinymce', function (\Illuminate\Http\Request $request) {
    dd($request->input('mytextarea'));
});
Route::view('/modular-js', 'modular-js');
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::view('select2', 'select2');

Route::view('changeDom', 'change-dom');

/* Pusher */
Route::view('pusher-front', 'pusher');
Route::get('pusher-back', function () {
    $options = [
        'cluster'   => env('PUSHER_APP_CLUSTER'),
        'encrypted' => true,
    ];
    $pusher = new Pusher\Pusher(
        env('PUSHER_APP_ID'),
        env('PUSHER_APP_KEY'),
        env('PUSHER_APP_SECRET'),
        $options
    );

    $data['message'] = 'hello world';
    $pusher->trigger('my-channel', 'my-event', $data);
    echo 'Pusher Back End';
    dd($pusher);
});
