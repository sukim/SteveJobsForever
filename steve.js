// nametypes
var Tim=new namechange('Steve','Jobs','steve');
var nametypes=['Tim'];

// functions
function whattochange(Tim,Cook){
    this.Tim=Tim;
    this.Cook=Cook;
}

//namechange is the main class. these are objects
function namechange(Tim,Cook,path){
    this.changeable=new whattochange(Tim,Cook);
    this.path=path;
}
function findAndReplace(searchText, replacement, searchNode) {
    if (!searchText || typeof replacement === 'undefined') {
        // Throw error here if you want...
        return;
    }
    var regex = typeof searchText === 'string' ?
                new RegExp(searchText, 'g') : searchText,
        childNodes = (searchNode || document.body).childNodes,
        cnLength = childNodes.length,
        excludes = 'html,head,style,title,link,meta,script,object,iframe';
    while (cnLength--) {
        var currentNode = childNodes[cnLength];
        if (currentNode.nodeType === 1 &&
            (excludes + ',').indexOf(currentNode.nodeName.toLowerCase() + ',') === -1) {
            arguments.callee(searchText, replacement, currentNode);
        }
        if (currentNode.nodeType !== 3 || !regex.test(currentNode.data) ) {
            continue;
        }
        var parent = currentNode.parentNode,
            frag = (function(){
                var html = currentNode.data.replace(regex, replacement),
                    wrap = document.createElement('div'),
                    frag = document.createDocumentFragment();
                wrap.innerHTML = html;
                while (wrap.firstChild) {
                    frag.appendChild(wrap.firstChild);
                }
                return frag;
            })();
        parent.insertBefore(frag, currentNode);
        parent.removeChild(currentNode);
    }
}

function emo(text){
    if (text=='Tim') nametype=Tim;
    else alert('Unknown nametype in '+text+', please choose from ['+nametypes+']');
    console.log('Running '+text);
    for (var keys in nametype.changeable){
        emo1_text(keys,nametype);
    }
}

function emo1_png(text,nametype){
    if (nametype.changeable.hasOwnProperty(text)){
        var imgPath = nametype.path+'/'+nametype.changeable[text]+'.png';
        var i='<img src="' + chrome.extension.getURL(imgPath) + '"  alt="namechange" ></img>';
        return findAndReplace(text,i);
    }
}

function emo1_text(text,nametype){
    if (nametype.changeable.hasOwnProperty(text)){
        return findAndReplace(text,nametype.changeable[text]);
    }
}
emo('Tim');