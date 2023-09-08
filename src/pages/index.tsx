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
  const cardClassName = 'w-40 h-40 mr-10 bg-bio-white text-xl text-black font-black font-serif rounded-lg flex items-center justify-center \
  \hover:bg-bio-yellow hover:shadow-lg hover:shadow-bio-white hover:text-bio-white\
  \duration-300';
  return (
    <Layout>
      <Link href={'/resume'}>
        <div className={cardClassName}>
            <Trans>
              My Resume
            </Trans>
        </div>
      </Link>
      <Link href={'https://lsee.top'}>
        <div className={cardClassName}>
            <Trans>
              My Website
            </Trans>
        </div>
      </Link>
    </Layout>
  )
}
