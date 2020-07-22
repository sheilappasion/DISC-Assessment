const boxElements = document.querySelectorAll(".box");

boxElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart);
  elem.addEventListener("dragend", dragEnd);
  elem.addEventListener("dragenter", dragEnter);
  elem.addEventListener("dragover", dragOver);
  elem.addEventListener("dragleave", dragLeave);
  elem.addEventListener("drop", drop);
});
function dragStart(event) {
  event.target.classList.add("drag-start");
  event.dataTransfer.setData("text", event.target.id);  }

function dragEnd(event) {
  event.target.classList.remove("drag-start");  }

  function dragEnter(event) {
  if(!event.target.classList.contains("drag-start")) 
    {    event.target.classList.add("drag-enter");   }  }

function dragOver(event) {  event.preventDefault();   }

function dragLeave(event) {  event.target.classList.remove("drag-enter");  }

function drop(event) {
  event.preventDefault();
  event.target.classList.remove("drag-enter");
  const draggableElementId = event.dataTransfer.getData("text");
  const droppableElementId = event.target.id;
  const draggableElement = document.getElementById(draggableElementId);
  const droppableElementTextContent = event.target.querySelector("span").textContent;
  const droppableElementBgColor = event.target.style.backgroundColor;
  //event.target.style.backgroundColor = draggableElement.style.backgroundColor;
  if(droppableElementBgColor == draggableElement.style.backgroundColor){
    if(draggableElementId !== droppableElementId) 
    {
    event.target.querySelector("span").textContent = draggableElement.querySelector("span").textContent;
    event.target.id = draggableElementId;
    draggableElement.style.backgroundColor = droppableElementBgColor;
    draggableElement.querySelector("span").textContent = droppableElementTextContent;
    draggableElement.id = droppableElementId;
    }
  }
  

}