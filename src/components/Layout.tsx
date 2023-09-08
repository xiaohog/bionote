import Head from "next/head"

import { t, Trans } from "@lingui/macro"

import { useLingui } from "@lingui/react"
import { useRouter } from "next/router"

export function Layout(payload:any) {
  let { title='', children=null } = payload;
  /**
   * This hook is needed to subscribe your
   * component for changes if you use t`` macro
   */
  useLingui()
  const router = useRouter()
  const { pathname, asPath, query } = router

  // Default props can't be translated at module level because active locale
  // isn't known when module is imported, but rather when component
  // is rendered.
  if (title == '') {
    title = t`my vercel web`
  }
  const buttonClassName = "text-white hover:outline hover:outline-offset-2 p-0.5 rounded-md";
  const containerClassName = `min-h-screen flex items-center relative ${pathname==='/'?'padding__animation--main ':''}page__background--main`;
  
  return (
    <div className={containerClassName}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-screen">{children}</main>

      <footer className="absolute right-4 top-4">
        <button
          className={buttonClassName}
          onClick={() =>
            router.push({ pathname, query }, asPath, { locale: "en" })
          }
        >
          English
        </button>
        {" | "}
        <button
        className={buttonClassName}
          onClick={() =>
            router.push({ pathname, query }, asPath, { locale: "zh" })
          }
        >
          中文
        </button>
      </footer>
    </div>
  )
}
