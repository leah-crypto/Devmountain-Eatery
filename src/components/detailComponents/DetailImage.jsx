import React from 'react';
import styles from './Details.module.css'
import moreStyles from '../homeComponents/Home.module.css'

const DetailImage = ({ image, title }) => {
    const backgroundString = ``
    return(
        <div>
            className={styles.banner}
            style= {{
                backgroundSize: "cover",
                background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgbargba(0, 0, 0, 0.8))`
            }}
            <div className={styles.ad_text}>
                <h1>
                    {title}
                </h1>
            </div>
        </div>
        
    )
}

export default DetailImage;