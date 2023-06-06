export interface ISubItem {
    src: string,
    title: string,
    img: string
}

export interface IItem extends ISubItem {
    items?: IItem[] | undefined
}

export interface IRoute {
    src: string,
    exact: string,
    element: () => JSX.Element
}
export type IAddress = {
    value: string,
    unrestricted_value: string
}

export type IData = {
    data: IAddress[]
}
