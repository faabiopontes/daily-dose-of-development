<!DOCTYPE html>
<html>
<head>
    <title>TinyMCE</title>
    <script src='plugins/tinymce/tinymce.min.js'></script>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" type="text/css" href="css/app.css">
</head>

<body>
  <div class="container">
    <h1>TinyMCE Quick Start Guide</h1>
    <form method="post">
      {{ csrf_field() }}
      <textarea name="mytextarea" id="mytextarea">Hello, World!</textarea>
      <button class="btn btn-default" type="submit">Enviar</button>
    </form>

    <script src='js/appTinyMCE.js'></script>
  </div>
</body>
</html>