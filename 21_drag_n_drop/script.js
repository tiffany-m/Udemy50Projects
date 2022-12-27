// lots of changing of class names for this one!

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
  // for each empty of empties array
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function dragStart() {
  console.log('drag start');

  this.className += ' hold'; // appending a class of hold
  setTimeout(() => (this.className = 'invisible'), 0); // after picking up/holding it goes invisible
}

function dragEnd() {
  console.log('drag end');
  this.className = 'fill';
}

function dragOver(e) {
  console.log('drag over');

  e.preventDefault();
}

function dragEnter(e) {
  console.log('drag enter');

  e.preventDefault();
  this.className += ' hovered'
}

function dragLeave() {
  console.log('drag leave');

  this.className = 'empty'
}

function dragDrop() {
  console.log('drag drop');

  this.className = 'empty';
  this.append(fill);
}
