window.addEventListener('load', 
  function() { 
    var targetInput = document.getElementById('inputlg');
    var searchSuggestion = document.getElementsByClassName('search-suggestion');
    var list = searchSuggestion[0].getElementsByTagName('li');
    targetInput.oninput = function(e){
        var inputVal = e.target.value.toLowerCase();
        if(inputVal.length > 2){
            searchSuggestion[0].style.display = 'block';
            [].forEach.call(list, function (key, value) {
                var keyLower = key.innerHTML.toLowerCase();
                 if(keyLower.indexOf(inputVal) !== -1){
                    key.style.display = "block";
                     console.log(keyLower+'--'+inputVal)
                 }
                else{
                    key.style.display = "none";
                }
            });
        }else{
            searchSuggestion[0].style.display = 'none';
        }
    }
  }, false);