<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TaskResource;
use App\Task;

class TasksController extends Controller
{
    public function index()
    {
        return TaskResource::collection(Task::paginate(10));
    }

    public function show(Task $Task)
    {
        return new TaskResource($Task);
    }
}
