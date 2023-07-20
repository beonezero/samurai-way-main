import s from "./FormsControls.module.css"

export const FormControl = ({input, meta,children,...props}: { input: any, meta: any, children: any }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError && s.error)}>
            <div>
                {children}
            </div>
            {hasError && <span className={s.error}>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}