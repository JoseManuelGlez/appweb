function Card({titulo, input}) {
    return ( 
        <>  
        <p className="titulo">{titulo}<br />
        <input type={input} /></p>
        <br />
        </>
     );
}

export default Card;
