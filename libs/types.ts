interface Image {
    src: string,
    alt: string
}

interface HyperLink {
    href: string, 
    children: string | React.ReactNode
}

interface GroupForm {
    label: string
    placeholder: string
    type: string
    name: string
}

export type {
    Image,
    HyperLink,
    GroupForm,
}