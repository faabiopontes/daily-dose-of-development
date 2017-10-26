<?php

namespace App\Http\Controllers;

use TCG\Voyager\Models\Post;

class VoyagerController extends Controller
{
    public function allPosts()
    {
        $posts = Post::all();
        echo '<h1>Voyager</h1>';
        echo '<p>Just showing how to get all Posts in our Controller</p>';
        dd($posts);
    }
}
