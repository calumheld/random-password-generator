# random-password-generator
set up a bunch of variables as promtps and confirms to get the parameters for the password. I made a function for each parameter with a list of characters meeting that parameter. The function pulls a random element from the list and adds it the the string that will be returned as the password. In the password generator function i had it check each step if the parameter for the character it was about to add was true, as well as if the of the password was less than the length specified by the user. When the length of the string was long enough it returned its value as the password. 