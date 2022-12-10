import Link from 'next/link'
import { DarkLayout } from '../../components/layouts/DarkLayout'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function PricingPage() {
  return (
    <>
      <h1>Pricing page</h1>

      <h1 className={"title"}>
        Ir a <Link href="/about">Home</Link>
      </h1>

      <p className={"description"}>
        get started by editing {' '}
        <code className={"code"}>page/pricing.jsx</code>
      </p>
    </>
  )
}

PricingPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )

}
