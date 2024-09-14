import React, { useEffect } from 'react';

const YandexMapConstructor = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A950114fb2626ff913d2561b0f84ef03ebbcba6a9f68b1b373aa10ec284ed931e&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true";
    script.async = true;
    document.getElementById('yandex-map').appendChild(script);
  }, []);

  return (
      <div id="yandex-map" style={{ width: '500px', height: '400px' }}></div>
  );
};

export default YandexMapConstructor;