const labels = document.querySelectorAll('.form-control label');
//gives un a node list of all the labels

labels.forEach((label) => {
  label.innerHTML = label.innerText //inner text = "Email"
    .split('') // splitting into an array
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    ) // mapping to create an array with a letter wrapped by a span
    .join(''); //returning it back into a string
});
