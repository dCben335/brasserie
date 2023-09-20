import styles from "./page.module.scss"
import Form from "@/components/molecules/Form/Form"

const formDatas = [
    {
        label: "Nom",
        placeholder: "john Doe",
        type: "text",
        name: "identity" 
    },
    {
        label: "Email",
        placeholder: "john.doe@gmail.com",
        type: "email",
        name: "mail" 
    },
    {
        label: "Message",
        placeholder: "Bonjour, je contacte La Table des Nains pour...",
        type: "textarea",
        name: "message" 
    },

]
export default function Page({}) {
    return (
        <main className={styles.main}>
            <div className={styles.form}>
                <Form 
                    title="Contactez-nous"
                    groupForms={formDatas}
                    successMessage="Votre Mail à bien été envoyé"
                    failedMessage="Une erreur s'est produite. Veuillez réessayer plus tard"
                />
            </div>
        </main>
    )
}