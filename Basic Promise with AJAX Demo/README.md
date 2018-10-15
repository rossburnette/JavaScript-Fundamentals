Promise is used to overcome issues with multiple callbacks and provide better way to manage success and error conditions.
Promise looks little complex in the beginning but its very simple and effective to deal with. 
Promise is an object which is returned by the async function like ajax.
 
Promise object has three states:
pending :- means the async operation is going on.
resovled :- async operation is completed successfully.
rejected :- async operation is completed with error.

There are two parts using a promise object. 
Inside async function (Part1) and where its called (Part2).

Part1—Inside Async function,

Promise object is created.
Async function returns the promise object
If async is done successfully, promise object is resolved by calling its resolve method.
If async is done with error, promise object is rejected by calling its rejected method.

Part2—Outside Async function
Call the function and get the promise object
Attach success handler, error handler on the promise object using then method