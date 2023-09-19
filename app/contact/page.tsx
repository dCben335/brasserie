import styles from "./page.module.scss"
import Form from "@/components/molecules/Form/Form"

const formDatas = [
    {
        label: "nom",
        placeholder: "john Doe",
        type: "text",
        name: "identity" 
    },
    {
        label: "email",
        placeholder: "john.doe@gmail.com",
        type: "email",
        name: "mail" 
    },
    {
        label: "message",
        placeholder: "bonjour, je vous contacte pour...",
        type: "textarea",
        name: "message" 
    },

]
export default function Page({}) {
    return (
        <main className={styles.main}>
            <div className={styles.form}>
                <Form 
                    title="Contactez-Nous"
                    groupForms={formDatas}
                    successMessage="Votre Mail à bien été envoyé"
                    failedMessage="Une erreur s'est produite. Veuillez réessayer plus tard"
                />
            </div>
        </main>
    )
}