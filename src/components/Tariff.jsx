import './Tariff.scss';
import './Colors.scss';
import React from "react";

// function Tariff({ price, speed }) {

// return (
//     <div className="tariff">
//         <div className={`name-bl name-bl-${price}`}>
//             <p>Безлимитный {price}</p>
//         </div>
//         <div className="price-bl">
//             <p>руб</p><p><span>{price}</span>/мес</p>
//         </div>
//         <div className="speed-bl">
//             <p>до {speed} Мбит/сек</p>
//         </div>
//         <div className="info-bl">
//             <p>Объем включенного трафика не ограничен</p>
//         </div>
//     </div >
// );
// }

// export default Tariff;

export default class Tariff extends React.Component {
render() {
    return (
    <div className="tariff">
        <div className={`name name_${this.props.color} ${this.props.color==='red'? 'name__dedicated':''}`}>
            <p>Безлимитный {this.props.price}</p>
        </div>
        <div className={`price price_${this.props.color} ${this.props.color==='red'? 'price__dedicated':''}`}>
            <div>
                <p className="price_currency">руб</p>
                <p className="price_month"><span className="price_size">{this.props.price}</span>/мес</p>
            </div>
        </div>
        <div className={`speed ${this.props.color==='red'? 'speed__dedicated':''}`}>
            <p>до {this.props.speed} Мбит/сек</p>
        </div>
        <div className={`info ${this.props.color==='red'? 'info__dedicated':''}`}>
            <p>Объем включенного трафика <br/>
            не ограничен</p>
        </div>
    </div >
)
}}