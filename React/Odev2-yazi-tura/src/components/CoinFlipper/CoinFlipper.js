import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      //Paranın atılma sayısını belirlemek için count değişkeni eklendi.
      count: 0,
      countYazi: 0,
      countTura: 0
    };
  }

  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
    // "At!" butonuna tıklandığında count değerini 1 arttırarak kaç defa atıldığı bilgisi tutuldu.
    this.setState({ count: this.state.count+1 });
    //0 ile 1 arasında random bir sayı değeri alan değişken tanımlandı.
    var randomNumber = Math.floor(Math.random()*2)+0;
    //Random 0 ya da 1 durumuna göre side state bilgisi ve side ifadelerinin count bilgileri güncellendi.
    if(randomNumber === 0){
      this.setState({side: "tura", countTura: this.state.countTura+1});      
    }else{
      this.setState({side: "yazi", countYazi: this.state.countYazi+1});
    }
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.count} </strong>
          atıştan
          <strong> {this.state.countTura} </strong>tanesi tura
          <strong> {this.state.countYazi} </strong>
          tanesi yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
