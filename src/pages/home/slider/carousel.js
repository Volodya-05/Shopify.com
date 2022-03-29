import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState,  cloneElement, Children } from 'react'
import './carousel.scss'


export  const Carousel = ({children}) => {
    const PAGE_WIDTH = 1400
    const [pages,setPages] = useState([])
    const [offset,setOffset] = useState(0)

    const handleRightClick = () => {
        setOffset((currentOffset)=>{
            const newOffset = currentOffset - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
            return Math.max(newOffset,maxOffset) 
        })
    }
    const handleLeftClick = () => {
        setOffset((currentOffset => {
            const newOffset = currentOffset + PAGE_WIDTH
            return Math.min(newOffset,0) 
        }))
    }
    useEffect(()=> {
        setPages(
            Children.map(children,(child) => {
                return cloneElement(child,{
                    style:{
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    },
                })
            })
        )
    }, [])

    return(
        <div className="mainContainer">
            <button className='arrow' onClick={handleLeftClick}><FontAwesomeIcon icon={faAngleLeft}/></button>
            <div className="window">
                <div className="allPagesContainer" style={{transform: `translateX(${offset}px)`,}}>
                    {pages}
                </div>    
            </div>
            <button className='arrow' onClick={handleRightClick}><FontAwesomeIcon icon={faAngleRight}/></button>
        </div>
    )
}