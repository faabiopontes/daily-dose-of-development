<?php

namespace App\Http\Controllers;

class PagesController extends Controller
{
    public function home()
    {
        dd('Home');

        return View('scroll');
    }
}
