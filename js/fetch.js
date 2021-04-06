function fetchPage(name){
    fetch(name).then(function(response){
        response.text().then(function(text){
            document.querySelector('#article').innerHTML = text;
        })
    })
}

fetch('list').then(function(response){
    response.text().then(function(text){
        // text = About me, Education, Awards, Projects
        // items ["About me", "Education", "Awards", "Projects\n"]
        var items = text.split(',');

        var i = 0;
        var tags = '';
        while(i<items.length){
            var item = items[i];
            item = item.trim();

            var tag = '<li><a href="#!'+item+'" onclick="fetchPage(\''+item+'\')">'+item+'</a></li>';
            tags = tags + tag;
            i++;
        }

        document.querySelector('#list').innerHTML = tags;

    })
})