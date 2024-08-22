import React from 'react';
import ItemImg from './ItemImg';
import TextBig from './TextBig';


export default function Galery(){
    return(
        <div className="one-column content">
            <TextBig label="Galeria" />
            <div className="inner-container">
                <ItemImg src="https://pegadanatural.com.br/wp-content/uploads/3-maneiras-de-cuidar-do-seu-filhote-de-cachorro-com-qualidade.jpg" label="Bob"/>
                <ItemImg src="https://www.rbsdirect.com.br/filestore/8/6/7/2/8/7/4_606e6d7e56dc7ba/4782768_1cdc28f74bff261.jpg?version=1575255600" label="Mia"/>
                <ItemImg src="https://cdn.awsli.com.br/31/31979/produto/32363745/774da1dfb9.jpg" label="Tobi"/>
                <ItemImg src="https://www.rbsdirect.com.br/filestore/8/6/7/2/8/7/4_606e6d7e56dc7ba/4782768_1cdc28f74bff261.jpg?version=1575255600" label="Zoe"/>
                </div>
                <div className='inner-container'>
                <ItemImg src="https://uploads.metropoles.com/wp-content/uploads/2023/10/05120529/cachorro-salsicha-Pluto.jpg" label="Roberta"/>
                <ItemImg src="https://www.rbsdirect.com.br/filestore/8/6/7/2/8/7/4_606e6d7e56dc7ba/4782768_1cdc28f74bff261.jpg?version=1575255600" label="Yummi"/>
                <ItemImg src="https://img.nsctotal.com.br/wp-content/uploads/2022/01/gato-siames-944x531.jpg" label="Teo"/>
                <ItemImg src="https://www.petz.com.br/blog//wp-content/uploads/2018/09/tamanho-de-cachorro-pet-1.jpg" label="Bili"/>
            </div>
        </div>
    )
}