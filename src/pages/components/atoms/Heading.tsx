interface Props {
    children: React.ReactNode
}

export const Heading: React.FC<Props> = ({ children }) => {
    return <h1 className="text-2xl font-bold leading-normal">{children}</h1>
};