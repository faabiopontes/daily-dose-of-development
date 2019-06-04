<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Vue SPA applications are stateless
// The API routes don't use session state
// Meaning our application is truly stateless
Route::get('/users', function () {
    if (rand(1, 10) < 3) {
        abort(500, 'We could not retrieve the users');
    }
    // Our factory creates Eloquent models
    // The make() method returns a collection
    return factory('App\User', 10)->make();
});
