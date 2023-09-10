import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');


 
 import React from 'react';

 var csrftoken = getCookie('csrftoken');

 const CSRFToken = () => {
     return ( <
         input type = "hidden"
         name = "csrfmiddlewaretoken"
         value = {
             csrftoken
         }
         />
     );
 };
 export default CSRFToken;