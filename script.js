// 地図の中心位置
var centerLatLng = new google.maps.LatLng(35.3742641, 139.4720413); // 藤沢市亀井野３７６−２１ 湘南ハイツ 101号室の座標
var Options = {
 zoom: 12,      //地図の縮尺値
 center: centerLatLng,    //地図の中心座標
 mapTypeId: 'roadmap'   //地図の種類
};
var map = new google.maps.Map(document.getElementById('map'), Options);

// ピンを立てる場所の緯度・経度
var locations = [
 {lat: 35.39053290085975, lng: 139.47151485272857, title: 'ママダカラ株式会社'}, 
 {lat: 35.395598681609286, lng: 139.46299153923735, title: 'シードハウス'},
];

// 各場所にピンを立てる
for (var i = 0; i < locations.length; i++) {
 var marker = new google.maps.Marker({
   position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
   map: map,
   title: locations[i].title
 });
}