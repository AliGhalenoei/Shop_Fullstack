import React from 'react';



function CartCategorys({category}) {

    return (
        <>
            
                
                    <a href={`${category.slug}/`} style={{display:'inline-block' , width:'auto' , textDecoration:'none' }}>
                        <div className="col-sm-12 col-md-6" style={{display:'inline-block'}}>
                            <img src={`${category.image}`} alt="" className="img-fluid"/>
                        </div>
                        <p className='text-capitalize font-weight-bold text-dark'>{category.title}</p>
                    </a>
                
            
        </>
    )
}

export default CartCategorys