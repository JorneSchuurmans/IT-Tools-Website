function save()
{
	localStorage.setItem('myProgram',editor.getValue());
}

function load()
{
	var myProgram = localStorage.getItem('myProgram');
	editor.setValue(myProgram) ;
}

