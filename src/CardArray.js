import React from 'react';
import Card from './Card';

const CardArray = ({robots}) => {
    const cardComponent = robots.map((user, i) => {
        return (<Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
            />
        );
    });
    return (
        <div>
           {cardComponent} 
        </div>
    );
}

//A cleaner way to do it
//const CardArray = ({robots}) => {
  //  return(
    //    <div>
      //      {
        //        robots.map((user, i) => {
          //          return (
            //        <Card 
              //          key={i} 
                //        id={robots[i].id} 
                  //      name={robots[i].name} 
                    //    email={robots[i].email}
                    //  />
                 //    );
              //  })
           // }
        //  </div>
   // );
//}

export default CardArray;