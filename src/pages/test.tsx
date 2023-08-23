import { GetStaticProps } from "next"
import { loadCatalog } from "../i18n"
import { Trans } from "@lingui/macro";

export const getStaticProps: GetStaticProps = async (ctx) => {
    const translation = await loadCatalog(ctx.locale!)
    return {
        props: {
            translation,
        },
    }
}

export default function Test() {
    return (
        <div className="text-red-700">
            <Trans>
                test page
            </Trans>
        </div>
    )
}