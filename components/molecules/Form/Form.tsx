"use client"
import { ChangeEvent, useState } from "react";
import { GroupForm } from "@/libs/types";
import FormGroup from "@/components/atoms/FormGroup/FormGroup";
import Button from "@/components/atoms/Button/Button";
import styles from "./Form.module.scss"


export default function Form({
    title,
    groupForms,
    successMessage,
    failedMessage,
} : {
    title?: string,
    groupForms: GroupForm[],
    successMessage: string,
    failedMessage: string,

}) {
    const [formDatas, setFormDatas] = useState<{[key: string] : string | Date}>({})
    const [submited, setSubmited] = useState<number>(-1)

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (event.target.value === '') return 
        setFormDatas((prev) => {
            const newDatas = {...prev}
            newDatas[event.target.name] = event.target.value
            return newDatas;
        })
    }

    const handleSubmit = async (event : SubmitEvent) => {
        event.preventDefault()
        if (submited === 1) return
        if (formDatas && Object.keys(formDatas).length === groupForms.length) {
            formDatas["date"] = new Date()
            try {
                setSubmited(1)
            } catch(err) {
                setSubmited(0)
            }
        }         
    }

    return (
        <form onSubmit={(e: any) => handleSubmit(e)} className={styles.form}>
            {title && <h3>{title}</h3>}
            {groupForms && groupForms.map((groupForm, idx) => 
                <FormGroup 
                    key={idx}
                    groupForm={groupForm}
                    changed={(e : ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChange(e)}
                />
            )}
            {submited === -1 ?
                <Button href={""} button={true} type="submit">Envoyer</Button>
                :
                submited === 1 ?
                <>
                    <div className={styles.succeeded}></div>
                    <small>{successMessage}</small>
                </> :
                <>
                    <div className={styles.failed}></div>
                    <small>{failedMessage}</small>
                </> 
            }
        </form>
    )
}