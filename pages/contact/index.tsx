import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact page</h1>

      <h1 className={"title"}>
        Ir a <Link href="/contact">Home</Link>
      </h1>

      <p className={"description"}>
        get started by editing {' '}
        <code className={"code"}></code>
      </p>
    </MainLayout>
  )
}
