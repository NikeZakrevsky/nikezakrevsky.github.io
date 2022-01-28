import * as mapData from './map.js'

class ResourceManager {

    #images;

    getImageByName(name) {
        for(var i = 0; i < this.#images.length; i++) {
            if (this.#images[i].name == name) {
                return this.#images[i].image;
            }
        }
        return null;
    }

    loadAllResourcesFromDisk() {

        console.log('start');
        function uniqueArray(array) {
            var result = Array.from(new Set(array));
            return result    
        }

        this.#images = [];
        var loaded = 0;
        var imagesPath = [];
        var uniqueMap = uniqueArray(mapData.map.flat());
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
    
            this.#images.push({name: imagesPath[i].name, image: img});
            img.onload = function() {
                loaded += 1;
                console.log(loaded);
                if (loaded == 19) return;
            }
        }
    }
}

export var resourceManager = new ResourceManager()