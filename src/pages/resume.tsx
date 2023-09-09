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
                            <Trans>Work Experience</Trans>
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
                                    <Trans>Research and exploration of JavaScript obfuscation systems, machine learning to distinguish malicious sliding trajectories, such as automata malicious logins, etc.</Trans>
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
                                        <Trans>2021.10—NOW</Trans>
                                    </span>
                                    <span className="ml-4">
                                        <Trans>Kyushu Securities Co., Ltd</Trans>
                                    </span>
                                </div>
                                <div className="resume__exper--content text-sm font-medium font-sans">
                                    <Trans>Responsible for the company&rsquo;s PC project (reactjs) template, backend project (nestjs) framework construction, Mars scaffolding project construction (similar to create react app),
                                    Uniapp mini program development, etc. The job responsibilities include: 1. Interface with user needs and provide feasible solutions, including mobile, PC, and mini program businesses
                                    Functional implementation; 2、 Developing and implementing skeleton screen adaptation using webpack plugins; 3、 Code optimization, such as refactoring the original Mars project framework and upgrading versions;
                                    4、 Having full stack experience.
                                    </Trans>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div className="resume__title">
                            <Trans>Professional Skills</Trans>
                        </div>
                        <div className="resume__content">
                            <div className="text-sm font-semibold font-serif">
                                <Trans>Proficient in React, Vue, JavaScript, and ES6 syntax, with basic data structure and algorithm practice and application abilities.</Trans>
                            </div>
                            <div className="text-sm font-semibold font-serif mt-2">
                                <Trans>Proficient in mastering the basic operating commands of Linux, proficient in building server environments and fixing server issues.</Trans>
                            </div>
                            <div className="text-sm font-semibold font-serif mt-2">
                                <Trans>Master Node.js, NPM, webpack, vite packaging tools, etc.</Trans>
                            </div>
                            <div className="text-sm font-semibold font-serif mt-2">
                                <Trans>Proficient in using version control tools such as git, tapd, and release tools for project progress control.</Trans>
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
                                    <Trans>PROJECT 1: Anxin Sign</Trans>
                                </div>
                                <div className="resume__pro--content">
                                    <Trans>The Anxin Sign project is a web PC+app embedded H5 project, implemented through webpack+react+antd ui+antd mobile ui. major function
                                    It is to achieve that users need to sign contracts with the company. There are many contracts that need to be signed online, and text messages are sent through the company&rsquo;s backend system operation. Users can access the messages upon seeing them
                                    Sign contracts with relevant links, compatible with PC end.
                                    </Trans>
                                </div>
                            </div>
                            <div className="resume__pro--item">
                                <div className="resume__pro--title">
                                    <Trans>PROJECT 2: Investment Master Background Management System</Trans>
                                </div>
                                <div className="resume__pro--content">
                                    <Trans>The implementation method of this project is umi+react+antd+ts+dva, mainly used to manage master articles pushed by the company&rsquo;s app, edit articles, and master information,
                                    Dynamic permission allocation, user setting permissions, robust financial management, dynamic configuration of banner charts, landing pages, etc., visualization of company backend data display data dashboards, etc
                                    Heart function implementation.
                                    </Trans>
                                </div>
                            </div>
                            <div className="resume__pro--item">
                                <div className="resume__pro--title">
                                    <Trans>PROJECT 3: Hybrid APP embedded in H5 project</Trans>
                                </div>
                                <div className="resume__pro--content">
                                    <Trans>The implementation method of this project is webpack+vue2+vant+ts+echart. Mainly used to display the trend charts of company funds and stocks, as well as master article push, etc,
                                    The technologies involved include client-side interaction js bridge, mobile adaptation rem, multi page skeleton screen, etc., to complete the business development of various modules and improve user vision
                                    Experience and fluency.
                                    </Trans>
                                </div>
                            </div>
                            <div className="resume__pro--item">
                                <div className="resume__pro--title">
                                    <Trans>PROJECT 4: Opening an account with Tonghuashun</Trans>
                                </div>
                                <div className="resume__pro--content">
                                    <Trans>The implementation method for the Tonghuashun account opening project is webpack+vue2+vant. The main function is to achieve account opening and login, input identity information, account association settings, and tripartite
                                    Storage, video authentication, involving calling flush SDK, encapsulating SDK tool library, SDK tool library implementation including but not limited to ID information recognition, OCR recognition,
                                    Face recognition, single video intelligent recognition, bidirectional video authentication, etc.
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
                </main>
                <footer className="bg-resume-blue mt-2.5 h-[100px]"></footer>
            </div>
        </Layout>
       
    )
}