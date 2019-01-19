var locationsNew = [
    {
      "id": "2-1",
      "found": false,
      "image":"images/stage2/1.jpg",
      "coords": {
        "lat": 51.053766,
        "long": 3.730581
      }
    },
    {
      "id": "2-2",
      "found": false,
      "image":"images/stage2/2.jpg",
      "coords": {
        "lat": 51.054621,
        "long": 3.729363
      }
    },    {
      "id": "2-3",
      "found": false,
      "image":"images/stage2/3.jpg",
      "coords": {
        "lat": 51.054350,
        "long": 3.727927
      }
    },    {
      "id": "2-4",
      "found": false,
      "image":"images/stage2/4.jpg",
      "coords": {
        "lat": 51.053891,
        "long": 3.730786
      }
    },    {
      "id": "2-5",
      "found": false,
      "image":"images/stage2/5.jpg",
      "coords": {
        "lat": 51.053422,
        "long": 3.725658
      }
    },    {
      "id": "2-6",
      "found": false,
      "image":"images/stage2/6.jpg",
      "coords": {
        "lat": 51.054906,
        "long": 3.728958
      }
    },    {
      "id": "2-7",
      "found": false,
      "image":"images/stage2/7.jpg",
      "coords": {
        "lat": 51.053915,
        "long": 3.728245
      }
    },    {
      "id": "2-8",
      "found": false,
      "image":"images/stage2/8.jpg",
      "coords": {
        "lat": 51.054546,
        "long": 3.729280
      }
    },    {
      "id": "2-9",
      "found": false,
      "image":"images/stage2/9.jpg",
      "coords": {
        "lat": 51.053710,
        "long": 3.727923
      }
    }
  ];

   var stageId = "locations2";
   var locations = JSON.parse(window.localStorage.getItem(stageId));

   if(!locations){
       locations = locationsNew;
   }
