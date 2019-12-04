    

$( document ).ready(function() {
    console.log( "ready!" );

    var input = document.getElementById('search-bar');
    console.log(document.getElementById("search-bar"));
    document.getElementById("search-bar").addEventListener("keyup", function(event) {
     if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("bttn").click();
      }
    });
        
      

});


function myFunction() {
        var myArray = [
        "<p>Are you okay, honey?</p>",
        "<p>Oh no, what's wrong?</p>",
        "<p>It's okay, you'll get better soon.</p>",
        "<p>You're so great, even germs like you!</p>",
        "<p>I know it is no fun to be sick.</p>",
        "<p>Take care, my little angel.</p>",
        "<p>Please lose all your worries, you'll be okay.</p>",
        "<p>I know things are tough right now, but I know you’re tougher!</p>",
        "<p>For now, let somebody else do all the doing.</p>",
        "<p>You need it, I got it! Whatever it is.</p>",
        "<p>Even superheroes need a time to rest!</p>",
        "<p>You are loved.</p>",
        "<p>Take good care of yourself!</p>",
        "<p>Don't forget your breakfast!</p>",
        "<p>Nothing is more important than getting 8 hours of sleep!</p>",
        "<p>Are you okay, honey?</p>",
        "<p>Oh no, what's wrong?</p>",
        "<p>It's okay, you'll get better soon.</p>",
        "<p>You're so great, even germs like you!</p>",
        "<p>I know it is no fun to be sick.</p>",
        "<p>Take care, my little angel.</p>",
        "<p>Please lose all your worries, you'll be okay.</p>",
        "<p>I know things are tough right now, but I know you are tougher!</p>",
        "<p>For now, let somebody else do all the doing.</p>",
        "<p>You need it, I got it! Whatever it is.</p>",
        "<p>Even superheroes need a time to rest!</p>",
        "<p>You are loved.</p>",
        "<p>Take good care of yourself!</p>",
        "<p>Don't forget your breakfast!</p>",
        "<p>Nothing is more important than getting 8 hours of sleep!</p>",
        '<img class="gifs" src="gif/1.gif">',
        '<img class="gifs" src="gif/2.gif">',
        '<img class="gifs" src="gif/3.gif">',
        '<img class="gifs" src="gif/4.gif">',
        '<img class="gifs" src="gif/5.gif">',
        '<img class="gifs" src="gif/6.gif">',
        '<img class="gifs" src="gif/7.gif">',
        '<img class="gifs" src="gif/8.gif">',
        '<img class="gifs" src="gif/9.gif">',
        '<img class="gifs" src="gif/10.gif">',
        '<img class="gifs" src="gif/11.gif">',
        '<img class="gifs" src="gif/12.gif">',
        '<img class="gifs" src="gif/13.gif">',
        '<img class="gifs" src="gif/14.gif">',
        '<img class="gifs" src="gif/15.gif">',
        // '<img class="gifs" src="gif/16.gif">',
        '<img class="gifs" src="gif/17.gif">',
        '<img class="gifs" src="gif/18.gif">',
        '<img class="gifs" src="gif/19.gif">',
        '<img class="gifs" src="gif/20.gif">',
        '<img class="gifs" src="gif/21.gif">',
        '<img class="gifs" src="gif/22.gif">',
        '<img class="gifs" src="gif/23.gif">',
        '<img class="gifs" src="gif/24.gif">',
        '<img class="gifs" src="gif/25.gif">',
        '<img class="gifs" src="gif/26.gif">',
        '<img class="gifs" src="gif/27.gif">',
        '<img class="gifs" src="gif/28.gif">',
        '<img class="gifs" src="gif/29.gif">',
        '<img class="gifs" src="gif/30.gif">',
        '<img class="gifs" src="gif/31.gif">',
        '<img class="gifs" src="gif/32.gif">',
        '<img class="gifs" src="gif/33.gif">',
        '<img class="gifs" src="gif/34.gif">',
        '<img class="gifs" src="gif/35.gif">',
        '<img class="gifs" src="gif/36.gif">',
        '<img class="gifs" src="gif/37.gif">',
        '<img class="gifs" src="gif/38.gif">',
        '<img class="gifs" src="gif/39.gif">',
        '<img class="gifs" src="gif/40.gif">'
      ];
        console.log("h") ;
        var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
          document.getElementById("result").innerHTML = randomItem;
      }
