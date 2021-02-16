function save(id)
{
	localStorage.setItem(id,editor.getValue());
}

function load(id)
{
	var myProgram = localStorage.getItem(id);
	editor.setValue(myProgram) ;
}

