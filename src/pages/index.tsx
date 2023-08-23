import Link from "next/link"

import { Trans } from "@lingui/macro"

import { Layout } from "../components/Layout"
import { GetStaticProps } from "next"
import { loadCatalog } from "../i18n"

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadCatalog(ctx.locale!)
  return {
    props: {
      translation,
    },
  }
}

export default function Home() {
  return (
    <Layout>
      <h1>
        <Trans>
          Welcome to <a href="https://lingui.dev">LinguiJS!</a>
        </Trans>
      </h1>
      <p>
        <Trans>
          Get started by editing{" "}
          <code>locales/en.po</code>
        </Trans>
      </p>
      <div>
        <a href="https://lingui.dev">
          <h3>
            <Trans>Documentation →</Trans>
          </h3>
          <p>
            <Trans>
              Find in-depth information about LinguiJS features and API.
            </Trans>
          </p>
        </a>

        <Link href="/examples">
          <h3>
            <Trans>Examples →</Trans>
          </h3>
          <p>
            <Trans>Checkout LinguiJS examples and usecases.</Trans>
          </p>
        </Link>
      </div>
    </Layout>
  )
}
