import { GetStaticProps } from "next"
import { loadCatalog } from "../i18n"
import { Trans } from "@lingui/macro";
import { Layout } from "../components/Layout";
import Image from "next/image";
import { imageSrc } from "../utils/image";


export const getStaticProps: GetStaticProps = async (ctx) => {
    const translation = await loadCatalog(ctx.locale!)
    return {
        props: {
            translation,
        },
    }
}

export default function Resume() {
    return (
        <Layout>
            <div className="bg-white/[.99] h-screen w-[868px] overflow-y-scroll resume__center--main">
                <header className="bg-resume-blue h-[100px] flex items-end pl-5 pb-3">
                    <div className="text-2xl font-semibold text-white">
                        <Trans>
                            MY RESUME
                        </Trans>
                    </div>
                </header>
                <header className="pl-5 pr-5 flex items-center h-[80px]">
                    <h2 className="text-4xl font-normal pr-5">
                        <Trans>
                            XIN HONG WANG 
                        </Trans>
                    </h2>
                    <span className="text-2xl font-normal">
                        <Trans>
                            Job Intention: Front-end Development Engineer
                        </Trans>
                    </span>
                </header>
                
                <nav className="pl-5 pr-5 grid grid-cols-3 text-base font-light">
                    <section className="flex items-center pb-3">
                        <Image className="resume__img--navnormal" src={imageSrc('birthdayImage')} alt="birth"/>
                        <span className="ml-3">
                            <Trans>Birthday:</Trans>
                        </span>
                        <span className="ml-3">1994.10.24</span>
                    </section>
                    <section className="flex items-center pb-3">
                        <Image className="resume__img--navnormal" src={imageSrc('addressImage')} alt="birth"/>
                        <span className="ml-3">
                            <Trans>Current Residence:</Trans>
                        </span>
                        <span className="ml-3">
                            <Trans>Beijing</Trans>
                        </span>
                    </section>
                    <section className="flex items-center pb-3">
                        <Image className="resume__img--navnormal" src={imageSrc('phoneImage')} alt="birth"/>
                        <span className="ml-3">
                            <Trans>Phone:</Trans>
                        </span>
                        <span className="ml-3">
                            <Trans>0086-17612200673</Trans>
                        </span>
                    </section>
                    <section className="flex items-center pb-3">
                        <Image className="resume__img--navnormal" src={imageSrc('emailImage')} alt="birth"/>
                        <span className="ml-3">
                            <Trans>Email:</Trans>
                        </span>
                        <span className="ml-3">
                            <Trans>2522202958@qq.com</Trans>
                        </span>
                    </section>
                    <section className="flex items-center pb-3 col-span-2">
                        <Image className="resume__img--navnormal" src={imageSrc('salaryImage')} alt="birth"/>
                        <span className="ml-3">
                            <Trans>Expected Salary:</Trans>
                        </span>
                        <span className="ml-3">
                            <Trans>discuss personally</Trans>
                        </span>
                    </section>
                </nav>
                {/* <aside className="resume__img--outside">
                    <Image src={myImage} alt="my pic" className="resume__img--my"/>
                </aside> */}
                <main className="pl-5 pr-5">
                    <article>
                        <div className="resume__title">
                            <Trans>Educational Background</Trans>
                        </div>
                        <div className="resume__content">
                            <div className="flex text-base font-medium font-sans">
                                <div className="col-span-1.5 mr-10"><Trans>2017.09-2019.06</Trans></div>
                                <div className="col-span-1.5 mr-10"><Trans>Nankai University</Trans></div>
                                <div className="col-span-2 mr-10"><Trans>Major: Computer Technology</Trans></div>
                                <div><Trans>Education:Postgraduate</Trans></div>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div className="resume__title">
                            <Trans>Professional Skills</Trans>
                        </div>
                        <div className="resume__content">
                            <div className="text-sm font-semibold font-serif">
                                <Trans>Proficient in front-end frameworks and syntax such as Vue, React, JavaScript, and ES6 syntax.</Trans>
                            </div>
                            <div className="text-sm font-semibold font-serif mt-2">
                                <Trans>Proficient in using Linux system environment and setting up front-end related server environment and fixing front-end server issues.</Trans>
                            </div>
                            <div className="text-sm font-semibold font-serif mt-2">
                                <Trans>Proficient in webpack, vite, NextJS and other packaging tools.</Trans>
                            </div>
                            <div className="text-sm font-semibold font-serif mt-2">
                                <Trans>Proficient in using version control tools and release tools such as Git, Tapd, Jenkins, etc. for project progress control.</Trans>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div className="resume__title">
                            <Trans>Project Experience</Trans>
                        </div>
                        <div className="resume__content">
                            <div className="resume__pro--item">
                                <div className="resume__pro--title">
                                    <Trans>Recent open source projects</Trans>
                                </div>
                                <div className="resume__pro--content">
                                    <Trans>The interface for the large model process orchestration is a PC project, implemented using vite+vue3+ts+sass+vue flow+mit+element plus UI. The main function is to restore several commonly used nodes in the process arrangement of the official website of Coze (button), such as large model nodes, knowledge base nodes, text nodes, etc., which are completely different from the Coze technology stack (Coze uses technologies such as react+semi design+react flow). The open source address of this project is https://github.com/wxh4321/coze-flow-test
                                    The final effect restores most of the interface details. By writing this project, it can be seen that the Coze team has an ultimate pursuit of details, with various complex and detailed interface interactions. The overall architecture of this project and the encapsulation of components are sufficient to meet the expansion of other process orchestration nodes.
                                    </Trans>
                                </div>
                            </div>
                            <div className="resume__pro--item">
                                <div className="resume__pro--title">
                                    <Trans>Anxin Sign System</Trans>
                                </div>
                                <div className="resume__pro--content">
                                    <Trans>The Anxin Sign project is a web PC+app embedded H5 project, implemented through webpack+react+antd ui+antd mobile ui. The main function is to enable users to sign contracts with the company. A large number of contracts need to be signed online, and SMS can be sent through the company&apos;s backend system. Users can access the relevant links to sign contracts when they see the SMS, and it is compatible with the PC end.
                                    The final result was successfully launched and received recognition from the product manager and leadership, helping the company solve the tedious work of signing contracts with customers.
                                    </Trans>
                                </div>
                            </div>
                            <div className="resume__pro--item">
                                <div className="resume__pro--title">
                                    <Trans>Investment Master Backend Management System</Trans>
                                </div>
                                <div className="resume__pro--content">
                                    <Trans>The Investment Master backend is the backend management system of Kyushu Securities, implemented through umi+react+antd+ts+dva. It is used to push articles to the company&apos;s Investment Master app, edit Master articles and related information, dynamically allocate permissions, set user permissions, dynamically configure banner images, landing pages, etc. and achieve functions such as visualizing company backend data and viewing company large screen data dashboards.
                                    The final effect is achieved by linking the functions of the Investment Master app, pushing data, and improving the maintainability and user stickiness of the app.
                                    </Trans>
                                </div>
                            </div>
                            <div className="resume__pro--item">
                                <div className="resume__pro--title">
                                    <Trans>Hybrid APP development</Trans>
                                </div>
                                <div className="resume__pro--content">
                                    <Trans>1) The H5 interface implementation method of the Investment Master app is webpack+vue2+vant+ts+echart. Used for displaying master articles and company&apos;s funds and stocks, mixed with the native display of the app, such as a single page, has a native tabs, and detailed information of H5 below. The frequently changing content is developed using H5, while other parts are developed using native development.
The final effect is to complete the daily maintenance and business iteration of the Investment Master app, improve the app&apos;s click through rate and user traffic, and assist in app updates and upgrades.
                                    </Trans>
                                </div>
                                <div className="resume__pro--content">
                                    <Trans>2) The development of the YLB app and H5 page is achieved through the Hang Seng Light packaging tool for multi platform publishing, similar to Uniapp. The main development techniques are vue2+less+atomized CSS+light (webpack). A component package for H5 communication with the app has been developed, making the interface and user experience of the app more user-friendly.
The final result, app7.0, was launched and received recognition from leaders and colleagues.
                                    </Trans>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div className="resume__title">
                            <Trans>Work and internship experience</Trans>
                        </div>
                        <div className="resume__content">
                            <div>
                                <div className="resume__exper--title text-base font-medium font-sans">
                                    <span>
                                        2018.07—2018.12
                                    </span>
                                    <span className="ml-4">
                                        <Trans>Tencent Computer Systems Co., Ltd</Trans>
                                    </span>
                                </div>
                                <div className="resume__exper--content text-sm font-medium font-sans">
                                    <Trans>Design and implement a JavaScript obfuscation system, machine learning to distinguish malicious sliding trajectories, such as automata malicious login, etc. Develop websites using the React JS framework, including H5 and PC functionality implementation.</Trans>
                                </div>
                            </div>
                            <div className="resume__exper--item">
                                <div className="resume__exper--title text-base font-medium font-sans">
                                    <span>
                                        2019.07—2020.09
                                    </span>
                                    <span className="ml-4">
                                        <Trans>Tianjin Shiqiao International Logistics Co., Ltd</Trans>
                                    </span>
                                </div>
                                <div className="resume__exper--content text-sm font-medium font-sans">
                                    <Trans>Using the Reactjs framework, connect with the React Native development of the company&rsquo;s fuel truck station Android and iOS, and develop website including H5 and PC business function implementation.</Trans>
                                </div>
                            </div>
                            <div className="resume__exper--item">
                                <div className="resume__exper--title text-base font-medium font-sans">
                                    <span>
                                        2020.10—2021.09
                                    </span>
                                    <span className="ml-4">
                                        <Trans>China Electronics Technology Group 15th Research Institute</Trans>
                                    </span>
                                </div>
                                <div className="resume__exper--content text-sm font-medium font-sans">
                                    <Trans>Mainly using the Reactjs and Vuejs frameworks, developing echart views, docking with company military projects, and developing PC and mobile web pages.</Trans>
                                </div>
                            </div>
                            <div className="resume__exper--item">
                                <div className="resume__exper--title text-base font-medium font-sans">
                                    <span>
                                        <Trans>2021.10—2023.11</Trans>
                                    </span>
                                    <span className="ml-4">
                                        <Trans>Kyushu Securities Co., Ltd</Trans>
                                    </span>
                                </div>
                                <div className="resume__exper--content text-sm font-medium font-sans">
                                    <Trans>Responsible for the development and maintenance of front-end projects related to the company&apos;s investment master, as well as the construction of PC project (reactjs) templates, back-end project (nestjs) frameworks, and development of uniapp mini programs.
                                    </Trans>
                                </div>
                            </div>
                            <div className="resume__exper--item">
                                <div className="resume__exper--title text-base font-medium font-sans">
                                    <span>
                                        <Trans>2023.12—NOW</Trans>
                                    </span>
                                    <span className="ml-4">
                                        <Trans>Shenzhen New Land Securities Investment Consulting Co., Ltd</Trans>
                                    </span>
                                </div>
                                <div className="resume__exper--content text-sm font-medium font-sans">
                                    <Trans>Responsible for the development and maintenance of the YLB app for the company&apos;s fund department, with the main technology stack being Vue, and collaborating with developers from the JRJ website department to jointly develop AI big model related businesses.
                                    </Trans>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div className="resume__title">
                            <Trans>Self Evaluation</Trans>
                        </div>
                        <div className="resume__content text-sm font-semibold font-serif">
                            <Trans>I have strong professional abilities, a spirit of exploration, a wide range of interests in daily life, strong ability to withstand pressure, and am good at teamwork.</Trans>
                        </div>
                    </article>
                    <article>
                        <div className="resume__title">
                            <Trans>Interest</Trans>
                        </div>
                        <div className="resume__content text-sm font-semibold font-serif">
                            <Trans>Climbing mountains, running, swimming, playing basketball, and playing WANG ZHE RONG YAO mobile games</Trans>
                        </div>
                    </article>
                </main>
                <footer className="bg-resume-blue mt-2.5 h-[100px]"></footer>
            </div>
        </Layout>
       
    )
}