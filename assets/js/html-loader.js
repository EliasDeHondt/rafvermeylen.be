/**
 * @author Elias De Hondt
 * @see https://eliasdh.com
 * @since 14/03/2024
 */

function loadHTML(myDivId, url) {
    let xmlhttp;
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if(xmlhttp.status == 200) {
               document.getElementById(myDivId).innerHTML = xmlhttp.responseText;
               let scripts = document.getElementById(myDivId).getElementsByTagName('script');
               for (let i = 0; i < scripts.length; i++) {
                   let script = document.createElement('script');
                   script.text = scripts[i].text;
                   document.body.appendChild(script);
               }
           } else {
               alert('Error');
           }
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}