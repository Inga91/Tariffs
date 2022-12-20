import './Tariff.scss';
import './Colors.scss';
import React from "react";

export default class Tariff extends React.Component {
    constructor(props) {
	    super(props);
	    this.state = {
	      isActive: false,
	    };
	  };
render() {
    const {...props} = this.props;
    
    return (
    <div className="tariff">
        <div className={`name name_${props.color} ${props.isActive ? 'name__dedicated':''}`}>
            <p>Безлимитный {props.price}</p>
        </div>
        <div className={`price price_${props.color} ${props.isActive ? 'price__dedicated':''}`}>
            <div>
                <p className="price_currency">руб</p>
                <p className="price_month"><span className="price_size">{props.price}</span>/мес</p>
            </div>
        </div>
        <div className={`speed ${props.isActive ? 'speed__dedicated':''}`}>
            <p>до {props.speed} Мбит/сек</p>
        </div>
        <div className={`info ${props.isActive ? 'info__dedicated':''}`}>
            <p>Объем включенного трафика <br/>
            не ограничен</p>
        </div>
    </div >
)
}}