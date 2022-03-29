import React, { useState } from "react";
import './downMenu.scss'



const DownMenu = () => {
    const [activeTriger1, setActiveTriger1] = useState()
    const [activeTriger2, setActiveTriger2] = useState()
    const [activeTriger3, setActiveTriger3] = useState()
    const trigger1 = () => {
        setActiveTriger1(!activeTriger1)
    }
    const trigger2 = () => {
        setActiveTriger2(!activeTriger2)
    }
    const trigger3 = () => {
        setActiveTriger3(!activeTriger3)
    }
    return (
        <div className="optionDownMenuContainer">
            <div className="optionDownMenuContainerLeftChild">
                <div onClick={trigger1} className="guaranateeContainet">
                    <p>Triple Guarantee</p>
                    <p>{activeTriger1 ? 'x' : '+'}</p>
                </div>
                <div className={activeTriger1 ? 'activeTrigger trigger' : 'trigger'}>
                    <p style={{ margin: '20px 0' }} className="bolder">1. Free & easy returns</p>
                    <p>If you are not 100% satisfied with your purchase for any reason,
                        you can return it within 30 days and the return shipping is <span className="bolder">FREE.</span>
                        Excludes International Orders and items marked Final Sale.</p>
                    <p style={{ margin: '20px 0' }} className="bolder">2. Safe with us</p>
                    <p>Our website is 100% verified and all transaction and customer info is securely encrypted with the latest technology.</p>
                    <p style={{ margin: '20px 0' }} className="bolder">3. Have a question?</p>
                    <p>We have an awesome customer service team who lives and breathes this stuff. Email: shop@morningtheme.com or Call:
                        888-628-9020</p>
                </div>
                <div onClick={trigger2} className="guaranateeContainet">
                    <p>Frequently asked</p>
                    <p>{activeTriger2 ? 'x' : '+'}</p>
                </div>
                <div className={activeTriger2 ? 'activeTrigger2 trigger' : 'trigger'}>
                    <p style={{ margin: '20px 0' }} className="bolder">Free returns</p>
                    <p>You can return merchandise from your original order 30 days after the
                        purchase date for FREE. *Excludes International Orders and items marked
                        Final Sale.</p>
                    <p style={{ margin: '20px 0' }} className="bolder">Exchanges</p>
                    <p>We sell out of styles quickly, so if you are looking to exchange an item and
                        don't want to miss out, we recommend returning your items for a refund (for FREE)
                        and then purchasing what you are looking for right away. We will process your
                        refund within 3-5 days from the arrival of your return at our warehouse.</p>
                    <p style={{ margin: '20px 0' }} className="bolder">When will my order ship?</p>
                    <p>We ship everything from our Ventura Headquarters within 1-2 business days (except \
                        weekends, holidays and when the surf is good).</p>
                    <p style={{ margin: '20px 0' }} className="bolder">Do you ship internationally?</p>
                    <p>We sure do. Please note that international orders take significantly longer for delivery
                        and may be subject to import/value-added taxes that are beyond our control. </p>
                    <p style={{ margin: '20px 0' }} className="bolder">How do I contact someone?</p>
                    <p>Customer service hours are Monday - Friday: 9am - 5pm PST. Please allow up to 1-2 days for
                        someone to get back to you. We can be reached by phone at 888-628-9020
                        and by email here Customer Service</p>
                    <p style={{ margin: '20px 0' }} className="bolder">What sizes do you do?</p>
                    <p>Our items fits true to size and consistent with most other clothing brands. Please see our size chart.</p>
                </div>
                <div onClick={trigger3} className="guaranateeContainet">
                    <p>Size guide</p>
                    <p>{activeTriger3 ? 'x' : '+'}</p>
                </div>
                <div className={activeTriger3 ? "activeTrigger3 sizeGiudeContainer  zagalovka" : 'sizeGiudeContainer '} >
                    <p className="bolder">SIZE</p>
                    <p className="bolder">CHEST(INCHES)</p>
                    <p className="bolder">CHEST(CM)</p>
                </div>

                <div className={activeTriger3 ? "activeTrigger3 sizeGiudeContainer " : 'sizeGiudeContainer'}>
                    <div className="guideContChild">
                        <p className="bolder">XS</p>
                        <p className="bolder">S</p>
                        <p className="bolder">M</p>
                        <p className="bolder">L</p>
                        <p className="bolder">XL</p>
                        <p className="bolder">XXL</p>
                    </div>
                    <div className="guideContChild">
                        <p>34-36</p>
                        <p>36-38</p>
                        <p>38-40</p>
                        <p>40-42</p>
                        <p>42-44</p>
                        <p>44-46</p>
                    </div>
                    <div className="guideContChild">
                        <p>86-91</p>
                        <p>91-96</p>
                        <p>96-101</p>
                        <p>101-106</p>
                        <p>106-111</p>
                        <p>111-116</p>
                    </div>
                </div>
                <div className={activeTriger3 ? "activeTrigger3 trigger3" : 'trigger3'}>
                    <p className="bolder">How to measure</p>
                    <p>To choose the correct size for you, measure your body as follows:</p>
                    <p>1. Chest - measure around the fullest part, place the tape close under the arms and make sure the tape is flat
                        across the back</p>
                    <p>2. Waist - measure around natural waistline</p>
                </div>
            </div>
            <div className="optionDownMenuContainerRightChild">
                <ul>
                    <li>INR custom, hand printed, pre-washed tee</li>
                    <li>Water based ink</li>
                    <li>INR interior and hem labels</li>
                    <li>Rib collar</li>
                    <li>Tailored fit</li>
                    <li>Made in the U.S.A</li>
                </ul>
            </div>
        </div>
    )
}



export default DownMenu