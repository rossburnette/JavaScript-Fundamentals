What is callback :- Let’s say we have a function F1 which calls F2. F2 is doing some async operation like AJAX. 
F1 would like to know the result of the ajax call. Now F1 will pass another function say C1 as an additional parameter to F2 which F2 will call after it process the ajax request completely.

Think of it as F1 is taking service from F2 by giving the service details along with C1.
 When F2 is done with service, it informs F1 by calling C1 with some additional data.

Why do we need callback :- We need callback because we don’t want to duplicate the ajax code every time we need.
 We want to create a generic ajax function which takes ajax details as input along with callback reference. 
 After completing the call, it calls the callback so that caller can resume with the result of the ajax call.