var locationsNew = [
    {
      "id": "3-1",
      "found": false,
      "image":"images/stage3/1.jpg",
      "coords": {
        "lat": 51.183,
        "long": 3.576
      }
    },
    {
      "id": "3-2",
      "found": false,
      "image":"images/stage3/2.jpg",
      "coords": {
        "lat": 51.183,
        "long": 3.576
      }
    },    {
      "id": "3-3",
      "found": false,
      "image":"images/stage3/3.jpg",
      "coords": {
        "lat": 51.183,
        "long": 3.576
      }
    },    {
      "id": "3-4",
      "found": false,
      "image":"images/stage3/4.jpg",
      "coords": {
        "lat": 51.183,
        "long": 3.576
      }
    },    {
      "id": "3-5",
      "found": false,
      "image":"images/stage3/5.jpg",
      "coords": {
        "lat": 51.183,
        "long": 3.576
      }
    },    {
      "id": "3-6",
      "found": false,
      "image":"images/stage3/6.jpg",
      "coords": {
        "lat": 51.183,
        "long": 3.576
      }
    },    {
      "id": "3-7",
      "found": false,
      "image":"images/stage3/7.jpg",
      "coords": {
        "lat": 51.183,
        "long": 3.576
      }
    },    {
      "id": "3-8",
      "found": false,
      "image":"images/stage3/8.jpg",
      "coords": {
        "lat": 51.183,
        "long": 3.576
      }
    },    {
      "id": "3-9",
      "found": false,
      "image":"images/stage3/9.jpg",
      "coords": {
        "lat": 51.183,
        "long": 3.576
      }
    }
  ];

      var stageId = "locations3";
      var locations = JSON.parse(window.localStorage.getItem(stageId));

      if(!locations){
          locations = locationsNew;
      }
