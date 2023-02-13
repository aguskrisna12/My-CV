

function Resume () {

    let dataResume = [
        {   title: "Web Development Fundamentals",
            certificate: "SoloLearn Web Development Fundamentals Course",
            url: "https://api2.sololearn.com/v2/certificates/CT-IKY2LQ3G/image/png"
        },
        {   title: "SQL",
            certificate: "SoloLearn SQL Course",
            url: "https://api2.sololearn.com/v2/certificates/CT-TYYUMOQE/image/png"
        },
        {   title: "PHP",
            certificate: "SoloLearn PHP Course",
            url: "https://www.sololearn.com/Certificate/1059-21627687/jpg"
        },
        {   title: "ReactJS",
            certificate: "SoloLearn ReactJS Course",
            url: "https://www.sololearn.com/Certificate/1097-21627687/jpg/"
        },
        {   title: "JQuery",
            certificate: "SoloLearn JQuery Course",
            url: "https://www.sololearn.com/Certificate/1082-21627687/jpg/"
        },
        {   title: "JavaScript",
            certificate: "SoloLearn Javascript Course",
            url: "https://www.sololearn.com/certificates/course/en/21627687/1024/landscape/png"
        },
        {   title: "CSS",
            certificate: "SoloLearn CSS Course",
            url: "https://www.sololearn.com/Certificate/1023-21627687/jpg/"
        },
        {   title: "HTML",
            certificate: "SoloLearn HTML Course",
            url: "https://www.sololearn.com/Certificate/1014-21627687/jpg/"
        }  
    ]
    
    let dataWorks = [
        {
            since: "2021-2021",
            title: "Web Developer",
            jobdesc: "Making responsive web project",
            jobdesc2: "Making CRUD, built API in the project",
            jobdesc3: "Complete some tasks assigned by project manager"
        },
        {   since: "2020-2020",
            title: "Financial Consultant",
            jobdesc: "Explaining forex investment and looking for client",
            jobdesc2: "Analyzing forex market",
            jobdesc3: "Maintance Client"
        },
        {   since: "2018-2019",
            title: "Accounting",
            jobdesc: "Recap spend money and receive money voucher",
            jobdesc2: "Check Inventories",
            jobdesc3: "Journal of expenses and income on MYOB",
            jobdesc4: "Recap and journal withholding tax slip ",
            jobdesc5: "Paying tax payable every month with id billing on bank account",
            jobdesc6: "Mark the taxable income tax (pph 23, pph 25, PPn)",
            jobdesc7: "Making Annual Tax (Company & Person)"
        }
        
    ]

    let dataEducation = [
        {   school: "Udayana University - Bachelor Degree, Economic of Accounting",
            since: "2014-2018"
        },
        {   school: "SMA N 1 Gianyar",
            since: "2011-2014"
        },
        {   school: "SMP N 1 Gianyar",
            since: "2008-2011"
        },
        {   school: "SD N 1 Gianyar",
            since: "2002-2008"
        }
        
    ]

    return (
        <div className="container">
            <h3>Resume</h3>
            <div className="d-flex justify-content-center">
                <div className="w-50 d-flex justify-content-center">
                    <h3>Skill & Expertise</h3>
                </div>
                <div className="w-50 d-flex">
                    <div>
                        <ul className="list-style-none">
                        {dataResume.map((resume) => {
                            return (
                                    <>
                                        <li className="ps-3">{resume.title}</li>
                                        <a className="ps-3" href={resume.url} target="_blank" rel="noreferrer">
                                            {resume.certificate}
                                        </a>
                                    </>
                                    )
                                })}
                        </ul>
                    </div>
                </div>
            </div>

            <hr />
            
            <div className="d-flex justify-content-center">
                <div className="w-50 d-flex justify-content-center">
                    <h3>Work Experience</h3>
                </div>
                <div className="w-50 d-flex">
                    <table className="table table-borderless">
                        {dataWorks.map((work) => {
                            return (
                                <tr>
                                    <td className="pt-3 align-top">
                                        <p style={{whiteSpace:"nowrap"}}>{work.since}</p>
                                    </td>
                                    <td>
                                        <div className="ps-3">
                                            <h3 className="m-0">{work.title}</h3>
                                            <ul>
                                                <li>
                                                    <p className="my-3">{work.jobdesc}</p>
                                                    <p className="my-3">{work.jobdesc2}</p>
                                                    <p className="my-3">{work.jobdesc3}</p>
                                                    <p className="my-3">{work.jobdesc4}</p>
                                                    <p className="my-3">{work.jobdesc5}</p>
                                                    <p className="my-3">{work.jobdesc6}</p>
                                                    <p className="my-3">{work.jobdesc7}</p>
                                                    <p className="my-3">{work.jobdesc8}</p>    
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>

            <hr />

            <div className="d-flex justify-content-center">
                <div className="w-50 d-flex justify-content-center">
                    <h3>Education</h3>
                </div>
                <div className="w-50 d-flex justify-content-center">
                    <table className="table table-borderless">
                        {dataEducation.map((education) => {
                            return (
                                <tr>
                                    <td className="pt-3 align-top" style={{whiteSpace:"nowrap"}}>
                                        <span>{education.since}</span>
                                    </td>
                                    <td className="ps-3">
                                        <h4>{education.school}</h4>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
            
           
        </div>
    )
}

export default Resume;