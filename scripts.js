/* Code adapted from w3schools tutorial on CSS portfolio gallery
 * You can find more information here: 
 * https://www.w3schools.com/howto/howto_js_portfolio_filter.asp
 */

filterSelection("all") // do this every time 

// Toggles the number of visible project cards
function viewMoreWork() 
{
  var moreProjects = document.getElementById("moreWork");
  var projectBtn = document.getElementById("myMoreWorkBtn");

  if (moreProjects.style.display === "inline") 
  {
    projectBtn.innerHTML = "View more";
    moreProjects.style.display = "none";
  } 
  else 
  {
    projectBtn.innerHTML = "View less";
    moreProjects.style.display = "inline";
  }
}

// Toggles the number of visible blog cards
function viewMoreBlog() 
{
  var moreBlogs = document.getElementById("moreBlogs");
  var blogBtn = document.getElementById("myMoreBlogBtn");

  if (moreBlogs.style.display === "inline") 
  {
    blogBtn.innerHTML = "View more";
    moreBlogs.style.display = "none";
  } 
  else 
  {
    blogBtn.innerHTML = "View less";
    moreBlogs.style.display = "inline";
  }
}

// Filters the selection of different project categories
function filterSelection(query) 
{
    var x = document.getElementsByClassName("myProject");
    
    if (query == "all")
    {
        query = "";
    }

    for (var i = 0; i < x.length; i++) 
    {
        removeClass(x[i], "show");

        // check if className is in query (returns -1 if not)
        if (x[i].className.indexOf(query) > -1)
        {
            addClass(x[i], "show");
        }
    }
}

// Adds class to element if not preexisting
function addClass(element, name) 
{
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  
  for (var i = 0; i < arr2.length; i++) 
  {
    // check if already in array
    if (arr1.indexOf(arr2[i]) == -1) 
    {
        element.className += " " + arr2[i];
    }
  }
}

// Removes class from element 
function removeClass(element, name) 
{
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");

  // remove the class from the element array
  for (var i = 0; i < arr2.length; i++) 
  {
    while (arr1.indexOf(arr2[i]) > -1) 
    {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("myBtn");
var lastBtn;

for (var i = 0; i < btns.length; i++) 
{
    btns[i].addEventListener("click", function()
    {
        // the last btn is now the current btn (default)
        lastBtn = this;
        
        // remove myActive class from whoever has it now
        var current = document.getElementsByClassName("myActive");
        current[0].className = current[0].className.replace(" myActive", "");
        
        // add myActive class to the clicked btn
        this.className += " myActive";
    });

    btns[i].addEventListener("mouseover", function()
    {
        // remove myActive class from whoever has it now
        var current = document.getElementsByClassName("myActive");
        lastBtn = current[0]; // remember which one was last
        current[0].className = current[0].className.replace(" myActive", "");

        // add myActive class to the hovered btn
        this.className += " myActive";
    });

    btns[i].addEventListener("mouseout", function()
    {
        // remove myActive class from "this" btn
        this.className = "btn myBtn";

        // give the last btn back the myActive class
        lastBtn.className += " myActive";
        
    });
}