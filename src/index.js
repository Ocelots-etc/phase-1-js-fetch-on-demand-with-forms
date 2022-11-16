const init = () => {
  // add an event listener to the form element
  const inputForm = document.querySelector('form');
  // when the event listener is triggered, the callback function 
  // we've provided will execute and an object representing the 
  // event will be passed in as an argument 
  inputForm.addEventListener('submit', (event) => {
    // this method prevents our form's default behavior
    event.preventDefault();
    // we access the input element directly here
    const input = document.querySelector('input#searchByID');

    // console.log(input.value)
    // another way to do the two lines above -v is below 
    // console.log(event.target.children[1].value);

    // this is our fetch request with string interpolation with `` backticks
    fetch(`http://localhost:8000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {
      // we capture user input and use it to customize a fetch request to our json server
      // section element with an id of movieDetails with an h4 and a p tags
      const title = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');
      // change the innerText of the title and summary to match the data's title and summary
      title.innerText = data.title;
      summary.innerText = data.summary;


    });
  });
}

document.addEventListener('DOMContentLoaded', init);