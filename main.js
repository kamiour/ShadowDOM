/*
  1. Using a normal HTML element, but attaching a Shadow DOM
*/
let myElement = document.querySelector('.my-element');
let shadow = myElement.attachShadow({
  mode: 'closed'
});
shadow.innerHTML = `
  <style>
    @import "components/p.css";
  </style>

  <p id="p-elem" class="green-p">Element with Shadow DOM</p>
  <script>
    alert('Hello from Shadow');
  </script>
`;

/*
shadow.getElementById('p-elem');
shadow.querySelector('.green-p');
*/ //this is how you can access elements within a shadow-root