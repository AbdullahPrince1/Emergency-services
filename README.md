1.getElementById is used to select a tag by his id attribute,
  getElementsByClassName is used to select multiple elements by their class name. its retruns a html collection. we can loop through html collection,
  querySelector selects first element. we can use it on class, id, tag. we can select element like css selector. 
  querySelectorAll selects all elements, it retrun a node list, we can loop through the node list.
  
2.document.createElement() is used to create a element and append() is used to insert new element.

3.suppose we have a parent div and inside a  div named a and  his inside a div named b .if we add events all of this div and click the b div event will trigger and in console we can see all div is clicked.it's happends cause of bubbleing. first event will trigger then captureing phase is start when in captureing mode event will jump one by one element untill it find the target element . when it find his target event is do his job(click, mouseover, dblclick e.t.c) then it will go back to his parent. when goging back its call bubbleing and in bubbleing phase all event will trigger. for that we get output all element is clicked.

4.Event deligation helps us to get any element or attribute from a parent element, when there is lots of element inside a parent we can easyly do our job by using event deligation.

5.preventDefault()-prevents default action.
  stopPropagation()-prevents bubbleing. we can controll bubbleing by using stopPropagation.
