window.addEventListener('load', 
  function() { 
    
  var myjson =  [ {"inputlg": ["chandigarh","gurgaon","delhi","bangalore","mumbai","kolkata","london","sydney","melbourne","rio","noida","lucknow","jaipur","amritsar","chennai","hyderabad","pune","cochin","indore"]}, {"aman": ["Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla", "Antartica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Ashmore and Cartier Island", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Clipperton Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czeck Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Antarctic Lands", "Gabon", "Gambia, The", "Gaza Strip", "Georgia", "Germany", "Ghana", "Gibraltar", "Glorioso Islands", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island", "Holy See (Vatican City)", "Honduras", "Hong Kong", "Howland Island", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Ireland, Northern", "Israel", "Italy", "Jamaica", "Jan Mayen", "Japan", "Jarvis Island", "Jersey", "Johnston Atoll", "Jordan", "Juan de Nova Island", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Man, Isle of", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Midway Islands", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcaim Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romainia", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Scotland", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia", "Spain", "Spratly Islands", "Sri Lanka", "Sudan", "Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tobago", "Toga", "Tokelau", "Tonga", "Trinidad", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "USA", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wales", "Wallis and Futuna", "West Bank", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"]}, {"omg": ["english","hindi","punjabi","italic","spanish","german","french","kannada","tamil","telugu","nepali","bihari","marathi","malaylam","bengali","telugu","african","assame","marwari","kashmiri"]}];
    
  for (var k in myjson){
  var obj = myjson[k];
      console.log(obj)
      
      
  for (var key in obj){
      var value = obj[key];
      //console.log(key+'--'+value);

      var ulToFetch = key+'-ul';
      var ul = document.getElementsByClassName(ulToFetch)[0];
      console.log(ul);
      for(i=0;i<value.length;i++){
          var newItem = document.createElement("LI");       // Create a <li> node
          var textnode = document.createTextNode(value[i]);  // Create a text node
          newItem.appendChild(textnode); 
          if(document.getElementsByClassName(ulToFetch)[0]){
          document.getElementsByClassName(ulToFetch)[0].appendChild(newItem);          
          }
      }
      
  }
}
    
    var scan_input = document.getElementsByClassName('scan_input');
    [].forEach.call(scan_input, function (key, value) {
        key.oninput = function(e){
            var itsId = key.getAttribute('id')+'-ul';
            var elem = document.getElementsByClassName(itsId);
            var list = elem[0].getElementsByTagName('li');
         var inputVal = e.target.value.toLowerCase();
            if(inputVal.length > 1){
            elem[0].style.display = 'block';
            [].forEach.call(list, function (key, value) {
                var keyLower = key.innerHTML.toLowerCase();
                 if(keyLower.indexOf(inputVal) !== -1){
                    key.style.display = "block";
                 }
                else{
                    key.style.display = "none";
                }
            });
        }else{
            elem[0].style.display = 'none';
        }           
        }
    });
    
//    var searchSuggestion = document.getElementsByClassName('search-suggestion');
//    var list = searchSuggestion[0].getElementsByTagName('li');
//    targetInput.oninput = function(e){
//
//    }
  }, false);