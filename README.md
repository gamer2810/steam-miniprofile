# A little hack to get your Steam's miniprofile
This is a tool that loads your miniprofile as a HTML entity so that you can feature it on your website.  
Preview:  
![Image](https://imgur.com/rhv9efc)

## Guide

1. Get your Steam's **AccountID**, you can use [SteamDB](https://steamdb.info/calculator/) or google how to find it yourself.
2. Access `https://1653032.github.io/steam-miniprofile/?accountId={_accountId_}`


#### Note:
- Your profile will need to be public for this to work.
- It will track your _public_ status (Online, Offline),  
    but It *wont* track your _friend-only_ status (Away,...).  
- If your AccountID is invalid, it will instead load *MY* (as in the one writing this) miniprofile :).

#### Guide to add this to an existing site
-   You can load it into any div with JQuery or Javascript. [Jquery's Load() guide](https://www.tutorialspoint.com/How-to-load-external-HTML-into-a-div-using-jQuery).
-   A working example can be found at [My site](gamer2810.github.io/prologue/) or [It's Github](github.com/gamer2810/prologue/)

*_Have a good day_*  and
<sub>~~Please feed me a star if you are feeling generous. I'm _humgry_~~</sub>
