function initMap() {
  const location = {lat: 6.605874, lng: 3.349149};
  const map = new google.maps.Map(document.querySelector('.map'), {zoom: 12, center: location});
  const marker = new google.maps.Marker({position: location, map: map});
}
