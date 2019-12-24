import React, {Component} from "react";
import ImageTemp from '../images/ImageTemp.jpeg';

export default class Section3 extends Component {
state = {
    services:[
        {
            image:<img src={ImageTemp}/>,
            label:"title1",
            info:'some example text is here some example text is here some example text is here some example text is here',
        },
        {
            image:<img src={ImageTemp}/>,
            label:"title2",
            info:'some example text is here some example text is here some example text is here some example text is here',
        },
        {
            image:<img src={ImageTemp}/>,
            label:"title3",
            info:'some example text is here some example text is here some example text is here some example text is here',
        }
    ]
};
    render (){
    return(
        <div className='section2'>
        <section className="services">
       <div className="services-center">
       {this.state.services.map((item,index) => {
           return(
               <div className='services-shadow-bg'><article key ={index} className='services'>
               <span>{item.image}</span>
               <h6>{item.label}</h6>
               <p>{item.info}</p>
               </article></div>
       );
        })}
       </div>
       </section>
       </div>
    )
}
}