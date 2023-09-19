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
        label: "date",
        placeholder: "",
        type: "date",
        name: "date" 
    },
    {
        label: "nombre de personne",
        placeholder: "2",
        type: "number",
        name: "people",
    },
]
export default function Page({}) {

    return (
        <main className={styles.main}>
            <div className={styles.form}>
                <Form 
                    title="Réserver votre table"
                    groupForms={formDatas}
                    successMessage="votre réservation à bien été effectuer"
                    failedMessage="Une erreur s'est produite. Veuillez réessayer plus tard"
                />
            </div>
        </main>
    )
}