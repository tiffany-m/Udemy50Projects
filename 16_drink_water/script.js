const smallCups = document.querySelectorAll('.cup-small')  // creates NodeList, is not an Array but is possible to iterate over it with forEach()
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup()

smallCups.forEach((cup, idx) => { // looping through all the small cups in NodeList (each have an index number like in arrays)
  cup.addEventListener('click', () => highlightCups(idx)) // passing in idx so we know what one we are clicking on
}) 

function highlightCups(idx) { // index of cup clicked on
  if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) { // checking to see if cup clicked on and next after contains class full, lets you toggle between having a cup full or not
    idx--
  }

  smallCups.forEach((cup, idx2) => { // index2 is of each cup in the loop
    if(idx2 <= idx) {   
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })

  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length // getting all the full cups
  const totalCups = smallCups.length

  if(fullCups === 0) {
    percentage.style.visibility = 'hidden'  // hiding div with percentage id when cup is empty
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${fullCups / totalCups * 330}px` // how many cups are full / total cups times the height of the large cup
    percentage.innerText = `${fullCups / totalCups * 100}%`
  }

  if(fullCups === totalCups) { // if large cup is full get rid of div with id remained
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (250 * fullCups / 1000)}L` // how many liters are remaining
  }
}