"use client"
import styles from "./Video.module.scss"
import { useEffect, useState } from "react"

type VideoProps = {
    src : string
    controls: boolean,
    autoPlay: boolean,
    muted: boolean,
}

export default function Video({src, controls, autoPlay, muted}: VideoProps) {
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])


    return (
        <>
        {isClient ? 
            <video controls={controls} autoPlay={autoPlay} muted={muted} className={styles.video}>
                <source src={src} type="video/mp4"  />
            </video>
            : ""
        }    
        </>
    )
}