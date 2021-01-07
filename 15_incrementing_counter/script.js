const counters = document.querySelectorAll('.counter'); //divs with counter class

counters.forEach((counter) => {
  //for each counter
  counter.innerText = '0'; //setting each counter inner text as 0

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target'); //the '+' makes it into a number instead of a string of "1200" and other two data target numbers
    const c = +counter.innerText; //what ever is in the inner text, which right now is set to 0

    const increment = target / 200; //how fast the counter goes up

    if (c < target) {
      //making sure that c is less then the target number
      counter.innerText = `${Math.ceil(c + increment)}`; //Math.ceil() rounds number up
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
