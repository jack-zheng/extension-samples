const userUrl = "https://xxx/api/v3/users/";
function getName(userId){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', userUrl + userId, false);
    xhr.send();
    return JSON.parse(xhr.response)['name'];
}

var creatorLinks = document.querySelectorAll('.opened-by a');
// get id set that need to be translated
var idSet = new Set()
for(let sub of creatorLinks){
    console.log('i num: ' + sub.text)
    idSet.add(sub.text)
}

// store user id-name pairs into map
var userMap = new Map();
for(let id of idSet){
    userMap.set(id, getName(id));
}

// replace all the ids by names
for(let sub of creatorLinks){
    sub.innerHTML = userMap.get(sub.text);
}


