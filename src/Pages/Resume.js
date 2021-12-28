function Resume () {

    let dataResume = [
        {   title: "ReactJS",
            certificate: "SoloLearn ReactJS Course",
            url: "https://www.sololearn.com/Certificate/1097-21627687/jpg/"
        },
        {   title: "JavaScript",
            certificate: "SoloLearn Javascript Course",
            url: "https://www.sololearn.com/certificates/course/en/21627687/1024/landscape/png"
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
        {   since: "2018-2020",
            title: "Accounting & Tax Officer",
            jobdesc: "I'am an accounting and tax officer in PT.Chandra Consulting"
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
            since: "2005-2008"
        },
        
    ]

    return (
        <div className="container">
            <h3>Resume</h3>
            <div className="d-flex ps-5 justify-content-center">
                <div className="w-50 d-flex justify-content-center">
                    <h3>Skill & Expertise</h3>
                </div>
                <div className="w-50 d-flex">
                    <div>
                        <ul className="list-style-none">
                        {dataResume.map((resume) => {
                            return (
                                    <><li className="ps-3">{resume.title}</li>
                                    <a className="ps-3" href={resume.url} target="_blank" rel="noreferrer">{resume.certificate}</a>
                                    </>)
                                })}
                        </ul>
                    </div>
                </div>
            </div>

            <hr />
            
            <div className="d-flex ps-5 justify-content-center">
                <div className="w-50 d-flex justify-content-center">
                    <h3>Work Experience</h3>
                </div>
                <div className="w-50 d-flex">
                    <table className="table table-borderless">
                        {dataWorks.map((work) => {
                            return (
                                <tr>
                                    <td className="pt-3 align-top">
                                        <span>{work.since}</span>
                                    </td>
                                    <td>
                                        <div className="ps-3">
                                            <h3 className="m-0">{work.title}</h3>
                                            <ul>
                                                <li>
                                                    <p className="my-4">{work.jobdesc}</p>    
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

            <div className="d-flex ps-5 justify-content-center">
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