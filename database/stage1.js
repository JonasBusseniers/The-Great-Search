var locationsNew = [
    {
      "id": "1-1",
      "found": false,
      "image":"images/stage1/1.jpg",
      "coords": {
         "lat": 51.05398,
         "long": 3.73381
      }
    },
    {
      "id": "1-2",
      "found": false,
      "image":"images/stage1/2.jpg",
      "coords": {
        "lat": 51.05449,
        "long": 3.73696
      }
    },    {
      "id": "1-3",
      "found": false,
      "image":"images/stage1/3.jpg",
      "coords": {
        "lat":  51.056017 ,
        "long": 3.740148
      }
    },    {
      "id": "1-4",
      "found": false,
      "image":"images/stage1/4.jpg",
      "coords": {
        "lat": 51.05512,
        "long": 3.73373
      }
    },    {
      "id": "1-5",
      "found": false,
      "image":"images/stage1/5.jpg",
      "coords": {
        "lat": 51.05414,
        "long": 3.7312
      }
    },    {
      "id": "1-6",
      "found": false,
      "image":"images/stage1/6.jpg",
      "coords": {
        "lat": 51.05582,
        "long": 3.7387
      }
    },    {
      "id": "1-7",
      "found": false,
      "image":"images/stage1/7.jpg",
      "coords": {
        "lat": 51.05336,
        "long": 3.73653
      }
    },    {
      "id": "1-8",
      "found": false,
      "image":"images/stage1/8.jpg",
      "coords": {
        "lat": 51.05535,
        "long": 3.73779
      }
    },    {
      "id": "1-9",
      "found": false,
      "image":"images/stage1/9.jpg",
      "coords": {
        "lat": 51.05297,
        "long": 3.73619
      }
    }
  ];

var stageId = "locations1";
var locations = JSON.parse(window.localStorage.getItem(stageId));

if(!locations){
    locations = locationsNew;
}

