export const yandexMap = () => {

  var map;

  ymaps.ready(() => {

    map = new ymaps.Map('map', {
      center: [34.052235, -118.243683],
      zoom: 10
    }, {
      searchControlProvider: 'yandex#search'
    });

  });

}