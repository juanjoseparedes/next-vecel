import { FunctionComponent, ReactNode } from "react"

interface BaseLayoutProps {
    children?: ReactNode;
  }

export const DarkLayout: FunctionComponent<BaseLayoutProps> = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: '5px',
            padding: '10px',
        }}>
            <h3>Dark-Layout</h3>
            {children}
        </div>
    )
}
