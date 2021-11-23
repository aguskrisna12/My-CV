function Resume () {

    let dataResume = [
        {   title: "JavaScript",
            certificate: "SoloLearn Javascript Course",
            url: "https://www.sololearn.com/certificates/course/en/21627687/1024/landscape/png"
        },
        {   title: "ReactJS",
            certificate: "SoloLearn ReactJS Course",
            url: "https://www.sololearn.com/Certificate/1097-21627687/jpg/"
        },
        {   title: "HTML",
            certificate: "SoloLearn HTML Course",
            url: "https://www.sololearn.com/Certificate/1014-21627687/jpg/"
        },
        {   title: "CSS",
            certificate: "SoloLearn CSS Course",
            url: "https://www.sololearn.com/Certificate/1023-21627687/jpg/"
        },
        {   title: "JQuery",
            certificate: "SoloLearn JQuery Course",
            url: "https://www.sololearn.com/Certificate/1082-21627687/jpg/"
        },
    ]

    let dataWorks = [
        {   since: "2018-2019",
            title: "Accounting",
            jobdesc: "I'am an accounting and tax officer in PT.Chandra Consulting"
        },
        {   since: "2018-2019",
            title: "Accounting",
            jobdesc: "I'am an accounting and tax officer in PT.Chandra Consulting"
        },
        {   since: "2018-2019",
            title: "Accounting",
            jobdesc: "I'am an accounting and tax officer in PT.Chandra Consulting"
        },
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
            since: "2005-2008"
        },
        
    ]

    return (
        <div className="container">
            <h2>Resume</h2>
            <div className="d-flex ps-5 justify-content-center">
                <div className="w-50 d-flex justify-content-center">
                    <h3>Skill & Expertise</h3>
                </div>
                <div className="w-50 d-flex justify-content-center">
                    <div>
                        {dataResume.map((resume) => {
                            return (
                                <ul>
                                    <li>{resume.title}</li>
                                    <a href={resume.url}>{resume.certificate}</a>
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </div>

            <hr />
            
            <div className="d-flex ps-5 justify-content-center">
                <div className="w-50 d-flex justify-content-center">
                    <h3>Work Experience</h3>
                </div>
                <div className="w-50 d-flex justify-content-center">
                    <table>
                        {dataWorks.map((work) => {
                            return (
                                <tr>
                                    <td>
                                        <span>{work.since}</span>
                                    </td>
                                    <td>
                                        <h3>{work.title}</h3>
                                        <p>{work.jobdesc}</p>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>

            <hr />

            <div className="d-flex ps-5 justify-content-center">
                <div className="w-50 d-flex justify-content-center">
                    <h3>Education</h3>
                </div>
                <div className="w-50 d-flex justify-content-center">
                    <table>
                        {dataEducation.map((education) => {
                            return (
                                <tr>
                                    <td>
                                        <span>{education.since}</span>
                                    </td>
                                    <td>
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