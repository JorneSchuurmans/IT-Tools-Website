function maarOnzichtbaar(item, index)
{
	if(item == null) return;
	item.classList.add('invisible');
	item.classList.remove('visible');
}

function maakZichtbaar(id)
{
	var zichtbare = document.getElementsByClassName('visible');
	if(zichtbare != null) maarOnzichtbaar(zichtbare[0],0);
	document.getElementById(id).classList.remove('invisible');
	document.getElementById(id).classList.add('visible');
}