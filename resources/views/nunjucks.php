<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Nunjucks</title>
	<script defer src="js/appNunjucks.js"></script>
  	<link rel="stylesheet" type="text/css" href="css/app.css">
</head>

<body>
	<h1>Nunjucks Templating Engine</h1>
	<div id="section">
	</div>
	<div id="section2">
	</div>
	<script type="text/html" id="template">
		<h3>Using Array of Objects</h3>
		{% for person in persons %}
		<p>Name: <b>{{ person.name }}</b></p>
		{% endfor %}
	</script>
	<script type="text/html" id="template2">
		<h3>Using Object of Objects</h3>
		{% for objName, person in persons %}
		<p>Name: <b>{{ person.name }}</b></p>
		{% endfor %}
	</script>
</body>

</html>