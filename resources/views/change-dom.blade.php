<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Learning the DOM</title>
	<script defer src="/js/appChangeDom.js"></script>
	<link rel="stylesheet" type="text/css" href="css/app.css">
</head>

<body>
	<h1>Document Object Model</h1>
	<h3>Creating New Nodes</h3>
	<table class="table table-condensed">
		<tr>
			<th>Property/Method</th>
			<th>Description</th>
		</tr>
		<tr>
			<td>createElement()</td>
			<td>Create a new element node</td>
		</tr>
		<tr>
			<td>createTextNode()</td>
			<td>Create a new text node</td>
		</tr>
		<tr>
			<td>node.textContent</td>
			<td>Get or set the text content of an element node</td>
		</tr>
		<tr>
			<td>node.innerHTML</td>
			<td>Get or set the HTML content of an element</td>
		</tr>
	</table>
	<h3>Inserting Nodes into the DOM</h3>
	<table class="table table-condensed">
		<tr>
			<th>Property/Method</th>
			<th>Description</th>
		</tr>
		<tr>
			<td>node.appendChild()</td>
			<td>Add a note as the last child of a parent element</td>
		</tr>
		<tr>
			<td>node.insertBefore</td>
			<td>Insert a node into the parent element before a specified sibling node</td>
		</tr>
		<tr>
			<td>node.replaceChild()</td>
			<td>Replace an existing node with a new node</td>
		</tr>
	</table>
	<h3>Removing Nodes from the DOM</h3>
	<table class="table table-condensed">
		<tr>
			<th>Method</th>
			<th>Description</th>
		</tr>
		<tr>
			<td>node.removeChild()</td>
			<td>Remove child node</td>
		</tr>
		<tr>
			<td>node.remove()</td>
			<td>Remove node</td>
		</tr>
	</table>
	<h3>To-do list</h3>
	<ul>
		<li>Buy groceries</li>
		<li>Feed the cat</li>
		<li>Do laundry</li>
	</ul>
</body>

</html>