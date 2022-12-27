const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if (e.key === 'Enter') {  // if enter key is hit
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());
  // filter is saying it cant be an empty white space and map is saying any white space will be trimmed, so array item can't be '', and 'name' turns into 'ex'

  tagsEl.innerHTML = ''; // clearing elements so it doesn't pile up

  tags.forEach((tag) => {
    const tagEl = document.createElement('span') // for each tag creating span
    tagEl.classList.add('tag') //  adding a class to element
    tagEl.innerText = tag //  setting text to what ever the tag is
    tagsEl.appendChild(tagEl)  //  this is the div with the id of "tags", make sure has s, adding each of the tag elements in
  })
}

function randomSelect() {
  const times = 30; // how many times choices will be highlighted

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}

