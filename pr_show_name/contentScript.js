const userUrl = "https://github.wdf.sap.corp/api/v3/users/";
function replaceId(idLinkEntry){
    var xhr = new XMLHttpRequest();
    // after request ready, replace id
    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            name = JSON.parse(xhr.response)['name'];
            for(let link of idLinkEntry[1]){
                link.innerHTML = name;
            }
        }
    };
    xhr.open('GET', userUrl + idLinkEntry[0], true);
    xhr.send();
}

var creatorLinks = document.querySelectorAll('.opened-by a');
// get id set that need to be translated
var idSet = new Set()
var idLinkMap = new Map();

// group id-link map
for(let sub of creatorLinks){
    var userId = sub.text;
    if(!idSet.has(userId)){
        var arr = new Array();
        arr.push(sub);
        idLinkMap.set(userId, arr);
        idSet.add(userId);
    }else{
        idLinkMap.get(sub.text).push(sub);
    }
    console.log('get links');
}

for(let entry of idLinkMap){
    replaceId(entry);
}


