/* Attaching a Shadow DOM */
let myElement = document.querySelector('.my-element');
let shadow = myElement.attachShadow({
  mode: 'open' //shadow variable can be accessed from the parent DOM element. If closed, it can't be accessed
});
shadow.innerHTML = `
    ${myElement.innerHTML}

    <style>
        @import "components/p.css";
    </style>
`;
myElement.innerHTML = null;//not to duplicate the content placed into shadow-root

/*
shadow.getElementById('p-elem');
shadow.querySelector('.green-p');
*/ //this is how you can access elements within a shadow-root
