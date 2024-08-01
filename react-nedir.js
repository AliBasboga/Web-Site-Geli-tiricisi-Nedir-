import React, { useState } from 'react'; // React ve useState hook'unu import ediyoruz.
import ReactDOM from 'react-dom'; // React uygulamasını render etmek için ReactDOM'u import ediyoruz.

function Counter() {
  // useState hook'unu kullanarak bir 'count' adında bir durum (state) tanımlıyoruz.
  const [count, setCount] = useState(0);

  // Butona tıklandığında çağrılan fonksiyon
  const handleClick = () => {
    setCount(count + 1); // count değerini bir artırıyoruz.
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Sayacı: {count}</h1> {/* Sayacın mevcut değerini gösteriyoruz. */}
      <button onClick={handleClick}>Arttır</button> {/* Tıklama etkinliği için handleClick fonksiyonunu tanımlıyoruz. */}
    </div>
  );
}

// Counter bileşenini root elementine render ediyoruz.
ReactDOM.render(<Counter />, document.getElementById('root'));
Açıklamalar:
import React, { useState } from 'react';:

React kütüphanesi ve useState hook'unu import eder. useState, fonksiyon bileşenlerinde durum (state) yönetmek için kullanılır.
import ReactDOM from 'react-dom';:

React bileşenlerini gerçek DOM'a yerleştirmek için kullanılır.
function Counter() { ... }:

React fonksiyon bileşeni. Bileşenlerin isimleri genellikle büyük harfle başlar.
const [count, setCount] = useState(0);:

useState hook'u, count adında bir durum değişkeni oluşturur ve başlangıç değerini 0 olarak ayarlar. setCount, count değerini güncellemek için kullanılan fonksiyondur.
const handleClick = () => { ... }:

Butona tıklanıldığında çağrılan fonksiyondur. Bu fonksiyon, count değerini bir artırır.
<div style={{ textAlign: 'center', marginTop: '50px' }}>...</div>:

Bileşenin HTML içeriği. Sayfa ortasına hizalanmış bir metin ve buton içerir.
<h1>Sayacı: {count}</h1>:

count değerini ekranda gösterir. Süslü parantez {} içinde değişken kullanılarak dinamik içerik eklenir.
<button onClick={handleClick}>Arttır</button>:

Buton, onClick etkinliği ile handleClick fonksiyonunu çağırır.
ReactDOM.render(<Counter />, document.getElementById('root'));:

Counter bileşenini, HTML sayfasında id değeri root olan elemana render eder.
