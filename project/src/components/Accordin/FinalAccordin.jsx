import React, { useState } from 'react';
import {questions} from './Question';
import Myaccordin from './Freequntly_Asked_ques';



export const FinalAccordin=()=>{
 const[data,setdata]=useState(questions);
 return(
     <>
        <h2 className='frequently_heading'>Frequently asked questions.</h2>
      <section className='main-div'>
    

     {data.map((curElem)=>{
    
         return(
           <Myaccordin text={curElem} />
          
         )

     })   }
     </section>
     </>
     

 )
 

}

