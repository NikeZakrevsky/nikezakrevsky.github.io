class ResouceManager {

    #images;

    #loadAllResourcesFromDisk() {
        var loaded = 0;
        var imagesPath = [];
        var uniqueMap = uniqueArray(map.flat());
        for(var i = 0; i < uniqueMap.length; i++) {
            var name = uniqueMap[i] + "";
            imagesPath.push({name: name, path: "assets/PNG/Default size/towerDefense_tile" + uniqueMap[i] + ".png"});
        }
        imagesPath.push({name: "180", path: "assets/PNG/Default size/towerDefense_tile180.png"});
        imagesPath.push({name: "249", path: "assets/PNG/Default size/towerDefense_tile249.png"});
        imagesPath.push({name: "245", path: "assets/PNG/Default size/towerDefense_tile245.png"});
        imagesPath.push({name: "275", path: "assets/PNG/Default size/towerDefense_tile275.png"});
        imagesPath.push({name: "204", path: "assets/PNG/Default size/towerDefense_tile204.png"});
        imagesPath.push({name: "206", path: "assets/PNG/Default size/towerDefense_tile206.png"});
    
        for(var i = 0; i < imagesPath.length; i++) {
            var img = new Image()
            img.src = imagesPath[i].path;
    
            images.push({name: imagesPath[i].name, image: img});
            img.onload = function() {
                loaded += 1;
                while(loaded != 16);

                return;
            }
        }
    }
}