1\. What is the difference between \*\*getElementById, getElementsByClassName, and querySelector / querySelectorAll\*\*?
Answer: "getElementById" = A specific id in html. When we need to access an element dynamically by javascript, we call it by its id. "getElementsByClassName" = It selects elements by a single class or multiple classes in HTML. When we need to change them dynamically, we call them by their class. "querySelector" = It uses a css selector and finds only the first element that matches. "querySelectorAll" = It selects multiple elements using a css selector and returns them as a nodelist in javascript.


2\. How do you \*\*create and insert a new element into the DOM\*\*?
Answer: First, create the element by using "createElement()" then insert it into the DOM using "appendChild()" or "prepend()".


3\. What is \*\*Event Bubbling\*\* and how does it work?
Answer: If any element triggers an event. It first works on that element. After that, the event goes up to its parent, then the parent’s parent, and so on. It works like a DOM tree bubbling upward.


4\. What is \*\*Event Delegation\*\* in JavaScript? Why is it useful?

Answer: \*Event Delegation\* means adding an event listener to a parent element so that it can handle events for its child elements as well. It is useful because, It reduces code and improves performance.


5\. What is the difference between \*\*preventDefault() and stopPropagation()\*\* methods?

Answer: "preventDefault()" stops the browsers default work and "stopPropagation()" stops the event from bubbling up to parent elements.



