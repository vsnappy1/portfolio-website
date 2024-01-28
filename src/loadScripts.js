const scripts = [
  "/assets/js/main.js",
  "/assets/js/ajax-form.js",
  "/assets/js/color.js"
]

function loadScript( url ) {

  return new Promise((resolve, reject) => {
    var script = document.createElement( "script" )
    script.type = "text/javascript";
    if(script.readyState) {
      script.onreadystatechange = function() {
        if ( script.readyState === "loaded" || script.readyState === "complete" ) {
          script.onreadystatechange = null;
          resolve();
        }
      };
    } else {
      script.onload = function() {
        resolve();
      };
    }
  
    script.src = url;
    document.getElementsByTagName( "head" )[0].appendChild( script );
  })


}


const loadScripts = () => {
  Promise
    .all(scripts.map(script => loadScript(script)))
}

export default loadScripts;
