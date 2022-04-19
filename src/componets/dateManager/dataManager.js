import { useEffect } from 'react';
import connect from 'react-redux';

import { ReactComponent as BinIcon } from '../../icons/bin.svg'

import './dataManager.css'

function DateManager() {
    
    

    useEffect(() => {

        const animItems = document.querySelectorAll('._anim-items');
        console.log(animItems);

        if(animItems.length > 0){
            window.addEventListener('scroll', animOnScroll);
            function animOnScroll(params){
                for (let i = 0; i < animItems.length; i++) {
                                    const animItem = animItems[i];
                                    const animItemHeight = animItem.offsetHeight;
                                    const animItemOffset = offset(animItem).top;
                                    const animStart = 4;
        
        
                                    let animItemPoint = window.innerHeight - animItemHeight / animStart;
        
                                    if(animItemHeight > window.innerHeight){
                                        animItemPoint = window.innerHeight - window.innerHeight / animStart;
                                    }
        
                                    if((window.pageYOffset > animItemOffset - animItemPoint && window.pageYOffset < (animItemOffset + animItemHeight))){
                                        animItem.classList.add('_active');
                                    } /*else{
                                        animItem.classList.remove('_active');
                                    }*/
                            }
            }
            function offset(el){
                const rect = el.getBoundingClientRect(),
                    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
            }
            setTimeout(() =>animOnScroll(), 300)
            
        }
        

    }, [])

    return (
        <div className='wrapper'>
            <ul className='list _anim-items' >
                <li className='item'>Today</li>
                <li className='item'>Tomorrow</li>
                <li className='item'>Next week</li>
            </ul>
            <div className='bin'>
                <BinIcon className='bin__icon'/>
                <p>Recicle Bin</p>
            </div>
        </div>
    )
}

export default DateManager;