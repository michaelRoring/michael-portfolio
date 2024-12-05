interface Props {
    children: React.ReactNode
}

export const Subheading: React.FC<Props> = ({ children }) => {
    return <h1 className="text-md text-slate-500"   >{children}</h1>
}