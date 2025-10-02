export interface InputFormProps {
    valid: boolean,
    label: string,
    value: string,
    onChange: (e: any) => void,
    invalidMsg: string
}

export interface Extra {
    ip: string,
    nameG: string,
    emailG: string
}

export interface Hook {
    res: any,
    setRes: React.Dispatch<React.SetStateAction<any>>
}

export interface CommentItemProps {
    obj: any,
    mainIsReply?: boolean,
    mainId?: string,
    extra: Extra,
    // hook: Hook;
}