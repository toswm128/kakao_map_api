import React, { useState, useEffect } from "react";

const { kakao } = window;

const Map = () => {
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options);

    const markers = [];

    function addMarker(position) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: position,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);

      // 생성된 마커를 배열에 추가합니다
      markers.push(marker);
      // 마커에 마우스오버 이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
        console.log(markers);
      });
    }
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      var latlng = mouseEvent.latLng;

      var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
      message += "경도는 " + latlng.getLng() + " 입니다";
      addMarker(latlng);
      console.log(latlng, message);
    });
  }, []);
  return (
    <div>
      <div
        id="map"
        style={{
          width: "1000px",
          height: "1000px",
        }}
      ></div>
    </div>
  );
};

export default Map;
