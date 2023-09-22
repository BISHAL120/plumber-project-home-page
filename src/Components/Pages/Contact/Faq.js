import React, { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowDown } from "react-icons/ai"

const Faq = (props) => {

    const [showp2, Setshowp2] = useState(false);

    return (
        <div>
            <div style={{ height: !showp2 ? '140px' : 'auto' }} className='faq-card'>
                <div className=' d-flex align-items-start justify-content-between '>
                    <h2 style={{ color: showp2 ? 'rgb(48, 131, 255)' : '#182944' }}>{props.title}</h2>
                    {showp2 ?
                        <AiOutlineArrowDown onClick={() => Setshowp2(!showp2)} style={{ width: '30px', height: '30px' }} />
                        :
                        <AiOutlineArrowRight onClick={() => Setshowp2(!showp2)} style={{ width: '30px', height: '30px' }} />
                    }
                </div>
                {showp2 ?
                    <p>
                        {props.content}
                    </p>
                    :
                    null
                }
            </div>
        </div>
    );
};

export default Faq;