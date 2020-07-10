# A little hack to get your Steam's miniprofile
This is a tool that loads your miniprofile(*with animated background and frame*) as a HTML entity so that you can feature it on your website.  
Preview:  
![Preview GIF](preview.gif)

## Guide

1. Get your Steam's **AccountID**, you can use [SteamDB](https://steamdb.info/calculator/) or google how to find it yourself.
2. Access `https://gamer2810.github.io/steam-miniprofile/?accountId={**YOUR_ACCOUNTID**}`

### To add this to your site
-   You can load it into any div with JQuery or Javascript. [Jquery's Load() guide](https://www.tutorialspoint.com/How-to-load-external-HTML-into-a-div-using-jQuery).
-   Once it's loaded, you can mod it however you like using CSS.
-   A working example can be found at [My site](https://gamer2810.github.io/prologue/) or [It's Github](https://github.com/gamer2810/prologue/)


#### Note:
- Your profile will need to be public for this to work.
- It will track your _public_ status (Online, Offline),  
    but It *wont* track your _friend-only_ status (Away,...).  
- If your AccountID is invalid, it will instead load *MY* (as in the one writing this) miniprofile :).
- This works by calling Steam's API and render the response with Steam's CSS. *This site is not affiliated with Steam or Valve*.

*_Have a good day_*  and
<sub>~~Please feed me a star if you are feeling generous. I'm _humgry_~~</sub>
