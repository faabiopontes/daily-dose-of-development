<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostsController extends Controller
{
    /**
     * Remove the specified resource from storage
     *
     * @param int id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function contact()
    {
        $peoples = ['Albert','Bernard','Catherine','David','Elvis','Fabio'];

        return view('contact',compact('peoples'));
    }

    public function show_post($id, $name, $password)
    {
        // return view('post')->with('id',$id);
        return view('udemy.post', compact('id', 'name', 'password'));
    }
}
