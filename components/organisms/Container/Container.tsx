import styles from './Container.module.scss'

type ContainerProps = {
    children : React.ReactNode,
    largerRight?: boolean,
    threeCol?: boolean,
}

export default function Container ({children, largerRight, threeCol} : ContainerProps) {

    return (
        <div className={`${largerRight ? styles.larger : ""} ${styles.container} ${threeCol ? styles.threeCol : ""}`}>
            {children}
        </div>
    )

}