# react-learning-user-adding
This is a part of my Udemy React Learning course. Goals here are to fill out a form for username and age, on submit check it for improper values. If improper values are found, open a modal with messaging. If values are correct, add it to a list component.

For this lesson we were encouraged to try it out on our own and then compare to the teacher's solution. I was successful at getting it to work and match what the teacher had.

## Techniques used: ##

1. Seperating out components for common elements (e.g. using Card for Divs)
2. Using state to track
   1. input from the form
   2. Setting the error message for the modal
   3. Updating the users object with the new user
3. Lifting the state up from AddUser to App.js to you can re-render Users with new data
4. Making form validation and dynamically setting error message.