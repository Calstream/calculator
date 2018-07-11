function init()
{
  let digits = document.getElementsByClassName("digit");
  console.log(digits);
  Object.keys(digits).forEach(function(key)
  {
    digits[key].onclick = function()
    {
    let result = document.querySelector("#result");
    result.innerHTML += digits[key].innerHTML;
    console.log(digits[key].innerHTML);
    }
  });
}

init();
/*function getSymbol(div)
{
  return div.textcontext
}*/
