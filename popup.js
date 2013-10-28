window.onload=function(){

    document.getElementById('steve').onclick=function() {
      console.log('running steve');
      chrome.tabs.executeScript(null,{file: "steve.js"});
    };
    document.getElementById('reset').onclick=function() {
      console.log('running reset');
      chrome.tabs.executeScript(null,{code: "window.location.reload();"});
    };
};
