<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BrowsersyncController extends Controller
{
    public function home() {
        return View('scroll');
    }
}
