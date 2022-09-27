import React from 'react'
import { ButtonWithIcon } from '../../../Shared/buttonfield/ButtonWithIcon'
import { SearchInput } from '../../../Shared/inputfield/SearchInput'
import {  BsFillCursorFill} from 'react-icons/bs';

    


const Footernav = ({Footerdata=[]}) => {
    return (
        <div>
            <div className='footer-main -container'>
                {Footerdata.map((each, index) => (

                    <div className='footer-left-container' key={index}>
                        <div className='footer-left-title-container'>
                            <h2>
                                {each?.title}
                            </h2>
                        </div>
                        <div className='footer -left-description-container'>
                            <p>{each?.description}</p>
                        </div>
                    </div>
                ))

                }
                <div className='footer-right-search-container'>
                    <div className='footer-search-box-container'>
                        <SearchInput />
                    </div>
                    <div className='footer-botton-box-container'>
                        <ButtonWithIcon icon={<BsFillCursorFill color="blue"/>} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footernav