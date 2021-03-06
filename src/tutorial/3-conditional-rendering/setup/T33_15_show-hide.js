import React,{useState,useEffect}from'react';

const T33_15_ShowHide = () =>{
    const  [show,setShow] = useState(false);

    return <>
    <button  className="btn" onClick={ () =>setShow(!show)}>show/hide</button>
    {show && <Item/>}
    </>
};
const Item =()=>{
    const [size,setSize]= useState(Window.innerWidth);
    const checkSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(()=> {
        window.addEventListener('resize',checkSize);
    },[]);
    return(
        <div>
            <h1>Window</h1>
            <h2>size: {size} </h2>
        </div>
    )
}

export default T33_15_ShowHide;