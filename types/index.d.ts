declare interface InputParams  {
    id:string,
    type: string,
    name: string,
    placeholder: string,
    value:string,
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void,
}

declare interface LabelParams{
    title: string,
    htmlFor: string,
}
declare interface ButtonParams{
    title: string,
    type?: "button" | "submit" | "reset" | undefined,
}