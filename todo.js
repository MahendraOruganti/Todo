var todo=document.querySelector('#todo');
 
todo.addEventListener('submit',function(e){

	e.preventDefault();

var task=document.querySelector('#task');

var item =document.createElement('li');

item.innerText=task.value;

var list=document.querySelector('#list');

list.append(item);

task.value="";

})

var list=document.querySelector('#list');

list.addEventListener('click',function(e){

	if(e.target.tagName=="LI"){
		e.target.remove();
}});