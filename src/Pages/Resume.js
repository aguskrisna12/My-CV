function Resume () {
    let skills = [
            {
                title: 'Javascript',
                certificate: 'Sololearn Javascript Fundamental',
                url: 'https://sololearn.com'
            },
             {
                title: 'HTML',
                certificate: 'Sololearn HTML Fundamental',
                url: 'https://sololearn.com'
            },
            {
                title: 'ReactJs'
            },
            {
                title: 'CSS',
                certificate: 'Sololearn CSS Fundamental',
                url: 'https://sololearn.com'
            },
        ],
        works = [
            {
                timeline: '2018 - 2019',
                title: 'Accounting 1',
                jobdesc: 'I\'am an accounting and tax officer in PT. Chandra Consulting'
            },
            {
                timeline: '2018 - 2019',
                title: 'Accounting 2',
                jobdesc: 'I\'am an accounting and tax officer in PT. Chandra Consulting'
            },
            {
                timeline: '2018 - 2019 3',
                title: 'Accounting',
                jobdesc: 'I\'am an accounting and tax officer in PT. Chandra Consulting'
            }
        ],
        educations = [];
    return (
        <div className="container">
            <h2>Resume</h2>

            <div className="d-flex justify-content-end">
                <div className="w-50">
                    <h3 className="text-center">Skill & Expertise</h3>
                </div>
                <table className="w-50">
                    <ul>
                    {skills.map(skill => {
                        return (
                            <li>
                                <div>{skill.title}</div>
                                {skill.url && (<div><a href={skill.url}>{skill.certificate}</a></div>)}
                            </li>
                        )
                    })}
                    </ul>
                </table>
            </div>

            <hr />

            <div className="d-flex justify-content-end">
                <div className="w-50">
                    <h3 className="text-center">Work Experience</h3>
                </div>
                <table className="w-50">
                    {works.map(work => {
                        return (
                        <tr>
                            <td>
                                <span>{work.timeline}</span>
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
    )
}

export default Resume;