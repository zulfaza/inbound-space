import React from 'react'
import Styled from '@emotion/styled'
import Link from 'next/link'
    
const Timeline = () => {
    return (
        <Wrapper>
            <p>INBOUND adalah program bagi anggota baru yang bertujuan untuk memberikan pengalaman mengerjakan projek sebagai team</p>
            <Link href="/"><button className="btn-regular"><p>KEMBALI</p></button></Link>
            
        </Wrapper>
    );
}
    
const Wrapper = Styled.div`
width: 100%;
height: 100%;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
overflow-y: scroll; 

background-image: url('/img/mission/bg-crewmate.svg');
background-position: center;
background-repeat: no-repeat;
background-size: cover;

p{
    max-width: 785px;
    width: 80%;
    min-width: 320px;
    font-family: 'Exo2-reg';
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 34px;
    text-align: center;

    color: #FFFFFF;

}

.btn-regular{
    margin-top: 32px;
    padding: 4px 4px;
    
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #FFF;
    padding-left: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;
    
    p{
        margin: 0 12px 2px 0;
        font-family: 'Exo2-med';
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 34px;
        color: #180F4A;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        display: inline;
    }
}

.bodoamat-img{
    max-width: 485px;
    width: 80%;
    min-width: 320px;
    height: 309px;
    background-image: url('/img/tml.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
`
    
export default Timeline