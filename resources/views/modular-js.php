<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/modularJS.css">
    <title>JS Tutorials</title>
</head>
<body>
    
    <div class="container">
        <h3>Some ground rules for Module development</h3>
        <ul>
            <li>Self-contained module
                <ul>
                    <li>Everything to do with my module is in my module</li>
                    <li>No global variables</li>
                    <li>If a module manages more than one thing it should be split up</li>
                </ul>
            </li>
            <li>Separation of concerns</li>
            <li>DRY code: Don't Repeat Yourself</li>
            <li>Efficient DOM usage
                <ul>
                    <li>Very few $(selections)</li>
                </ul>
            </li>
            <li>No memory leaks
            <ul>
                <li>All events can be unbound</li>
            </ul>
            </li>
        </ul>
    </div>

    <div class="hero-unit">
        <h1>JS Tutorials</h1>
    </div>

    <div id="peopleModule">
        <h1>People</h1>
        <input type="text" placeholder="name"><button id="addPerson">Add Person</button>
        <ul id="people">
            <script id="people-template" type="text/template">
            {{#people}}
                <li>
                    <span>{{.}}</span>
                    <i class="del">X</i>
                </li>
            {{/people}}
            </script>
        </ul>
    </div>
    <script src="js/modularJS.js"></script>
</body>
</html>