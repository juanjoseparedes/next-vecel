import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>

       <h1 className={"title"}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={"description"}>
          get started by editing {' '}jj 
          <code className={"code"}></code>
        </p>
    </MainLayout>
  )
}
