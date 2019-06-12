;(function() {
  ymaps.ready(init);

  let markers = [{
      latitude: 55.749971,
      longitude: 37.608280,
      hintContent: 'Click Me!!!',
      balloonContent: 'Why you click Me?'
    },
    {
      latitude: 55.744771,
      longitude: 37.580956,
      hintContent: 'Click Me!!!',
      balloonContent: 'Why you click Me?'
    },
    {
      latitude: 55.758226,
      longitude: 37.575001,
      hintContent: 'Click Me!!!',
      balloonContent: 'Why you click Me?'
    },
    {
      latitude: 55.757772,
      longitude: 37.629526,
      hintContent: 'Click Me!!!',
      balloonContent: 'Why you click Me?'
    }
  ];

  let geoObjects = [];

  function init() {

    let map = new ymaps.Map('map', {
      center: [55.750565, 37.609083],
      zoom: 14,
      controls: ['zoomControl', 'searchControl', 'rulerControl'],
      behaviors: ['drag', 'dblClickZoom', 'multiTouch']
    });

    for (let i = 0; i < markers.length; ++i) {
      geoObjects[i] = new ymaps.Placemark([markers[i].latitude, markers[i].longitude], {
        hintContent: markers[i].hintContent,
        balloonContent: markers[i].balloonContent
      }, {
        iconLayout: 'default#image', //Тип макета
        iconImageHref: '../img/png/map-marker.png', //Путь до картинки, которая меняет метку
      });
    };

    //First try//

    // function markerConfig() {
    //   let geoLocation = [];

    //   for(let i = 0; i < arguments.length; ++i) {
    //     geoLocation[i] = arguments[i];
    //   }

    //   return new ymaps.Placemark(geoLocation, {
    //     hintContent: 'Click Me!!!',
    //     balloonContent: 'Why you click Me?'
    //   },
    //   {
    //     iconLayout: 'default#image',
    //     iconImageHref: '../img/map/marker.png'
    //   });
    // };

    // function createMarker(latitude, longitude) {
    //   return map.geoObjects.add(markerConfig(latitude, longitude))
    // };

    // createMarker(55.750565, 37.609083);

    let clusterers = new ymaps.Clusterer({
      // clusterIcons: [
      //   {
      //     href: '../img/map/marker.png'
      //   }
      // ],
      // clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterers);
    clusterers.add(geoObjects);
  };
})()