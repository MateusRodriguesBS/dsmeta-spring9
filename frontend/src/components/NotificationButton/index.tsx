import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import { Sale } from "../../models/sale";
import './style.css'

type Props ={
    saleId: number;
    saleName: string;
    saleDate: string;

}

function handleClick(id: number, name:string, date:string){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response =>{
        var txtid = id.toString();
        var data = new Date(date).toLocaleDateString()
        alert("Sms enviado com sucesso do ID: "+txtid+", nome: "+name+ ", data da venda: "+data);
    })
}

function NotificationButton({saleId,saleName,saleDate}: Props) {
    return (

        <div className="dsmeta-red-btn" onClick={() => {handleClick(saleId,saleName,saleDate)}}>
            <img src={icon} alt="Notificar" />
        </div>
    )

}

export default NotificationButton;