import { IconPhone } from '../../Icons/IconPhone'
import { IconInstagram } from '../../Icons/IconInstagram'
import { IconFacebook } from '../../Icons/IconFacebook'
import { IconTelegram } from '../../Icons/IconTelegram'
import Image from 'next/image'

export function TopHeader(){
    return(
        <div className="header_top">

            <div className="header_top__logo">
                <Image 
                    src="/logo.png"
                    alt="Logo" 
                    width={320} 
                    height={70} 
                />
            </div>

            <div className="header_top__schedule">
                <div className="phone">
                    <span><IconPhone /></span> 
                    <p> Номер телефона: &nbsp;</p> 
                    <a href="#">+380-95-133-27-54</a>
                </div>
                <div className="work_schedule">
                    График работы: 10:00 - 20:00 Без выходных
                </div>
            </div>
    
            <div className="header_top__social">
                <div><a href="#"><IconInstagram /></a></div>
                <div><a href="#"><IconFacebook /></a></div>
                <div><a href="#"><IconTelegram /></a></div>
            </div>

        </div>
    )
}