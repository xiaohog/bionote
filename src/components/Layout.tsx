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
    title = t`Example project using LinguiJS`
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Trans>
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo"/>
          </Trans>
        </a>
        &nbsp;{" | "}
        <button
          onClick={() =>
            router.push({ pathname, query }, asPath, { locale: "en" })
          }
        >
          English
        </button>
        {" | "}
        <button
          onClick={() =>
            router.push({ pathname, query }, asPath, { locale: "cs" })
          }
        >
          Česky
        </button>
      </footer>
    </div>
  )
}
