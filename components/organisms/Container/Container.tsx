import styles from './Container.module.scss'

type ContainerProps = {
    children : React.ReactNode
}

export default function Container ({children} : ContainerProps) {

    return (
        <div className={styles.container}>
            {children}
        </div>
    )

}