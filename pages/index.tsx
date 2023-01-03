

import { useTranslations } from "next-intl"
import { useRouter } from "next/router"
export async function getStaticProps({ locale }:any) {
  return {
    props: {
      messages: (await import(`/public/locales/${locale}/translations.json`))
        .default,
    },
  }
}
const Home = () => {
  const t = useTranslations()
  const router = useRouter()
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-4xl capitalize font-bold leading-9 text-gray-900">{t("title")}</h1>
      <h1 className="text-lg capitalize font-medium leading-9 text-gray-800">{t("description")}</h1>
      <button onClick={() => {
        router.push(
      {
        pathname: router.pathname,
      },
      router.asPath,
      { locale:"en" }
    )
      }} className={`mr-4 mt-4 border rounded border-blue-700 py-1 text-blue-700 px-4 hover:bg-blue-100 ${router.locale === "en" && "bg-blue-700 hover:text-blue-800 text-white"}`}>English</button>
      <button onClick={() => {
        router.push(
      {
        pathname: router.pathname,
      },
      router.asPath,
      { locale:"id" }
    )
      }} className={`mr-4 border rounded border-blue-700 py-1 text-blue-700 px-4 hover:bg-blue-100 ${router.locale === "id" && "bg-blue-700 hover:text-blue-800 text-white"}`}>Indonesia</button>
      <button onClick={() => {
        router.push(
      {
        pathname: router.pathname,
      },
      router.asPath,
      { locale:"gm" }
    )
      }} className={`mr-4 border rounded border-blue-700 py-1 text-blue-700 px-4 hover:bg-blue-100 ${router.locale === "gm" && "bg-blue-700 hover:text-blue-800 text-white"}`}>Germany</button>
      <button
  type="button"
  onClick={() => {
    throw new Error("Sentry Frontend Error");
  }}
>
  Throw error
</button>
    </div>

  )
}

export default Home;