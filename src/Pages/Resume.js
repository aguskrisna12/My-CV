function Resume() {
  let dataResume = [
    {
      title: "JavaScript Algorithms and Data Structures",
      certificate: "FreeCodeCamp JavaScript Algorithms and Data Structures",
      url: "https://www.freecodecamp.org/certification/fcc34b9a7e2-b5ee-4f94-81ca-3e65c4a220b2/javascript-algorithms-and-data-structures",
    },
    {
      title: "Responsive Web Design",
      certificate: "FreeCodeCamp Responsive Web Design Certification",
      url: "https://www.freecodecamp.org/certification/fcc34b9a7e2-b5ee-4f94-81ca-3e65c4a220b2/responsive-web-design",
    },
    {
      title: "ReactJS",
      certificate: "SoloLearn ReactJS Course",
      url: "https://www.sololearn.com/Certificate/1097-21627687/jpg/",
    },
    {
      title: "JavaScript",
      certificate: "SoloLearn Javascript Course",
      url: "https://www.sololearn.com/certificates/course/en/21627687/1024/landscape/png",
    },
    {
      title: "CSS",
      certificate: "SoloLearn CSS Course",
      url: "https://www.sololearn.com/Certificate/1023-21627687/jpg/",
    },
    {
      title: "HTML",
      certificate: "SoloLearn HTML Course",
      url: "https://www.sololearn.com/Certificate/1014-21627687/jpg/",
    },
    {
      title: "Web Development Fundamentals",
      certificate: "SoloLearn Web Development Fundamentals Course",
      url: "https://api2.sololearn.com/v2/certificates/CT-IKY2LQ3G/image/png",
    },
    {
      title: "SQL",
      certificate: "SoloLearn SQL Course",
      url: "https://api2.sololearn.com/v2/certificates/CT-TYYUMOQE/image/png",
    },
    {
      title: "PHP",
      certificate: "SoloLearn PHP Course",
      url: "https://www.sololearn.com/Certificate/1059-21627687/jpg",
    },
    {
      title: "JQuery",
      certificate: "SoloLearn JQuery Course",
      url: "https://www.sololearn.com/Certificate/1082-21627687/jpg/",
    },
  ];

  let dataWorks = [
    {
      since: "2021-2021",
      title: "Web Developer(Intern)",
      jobdesc: [
        "Created a small website layout responsive and creating the HTML, CSS, and JavaScript code to bring the design to life.",
        "Experiences using JavaScript Libraries and Bootstrap, aiding smooth UI.",
        "Communicated clearly with web development teams, ascertaining daily tasks and completing to exact direction.",
        "Implemented create, read, update, delete (CRUD) functionality for a database-driven web application.",
        "Experiences integrate an API into a PHP Laravel application. The API was provided service and allowed our application to access data that needed to display and processed by Frontend developer.",
      ],
    },
    {
      since: "2020-2020",
      title: "Financial Consultant",
      jobdesc: [
        "Determined prospect needs and crafted appropriate responses to provide information on suitable products and services.",
        "Shared comprehensive brand and product knowledge to maximise sales.",
        "Prepared quotes with accurate and competitive pricing to drive conversion.",
        "Attended industry networking events, trade shows and connected in social media sites to incur prospective clients.",
        "Processed analysis forex market by technical and fundamental strategy.",
      ],
    },
    {
      since: "2018-2019",
      title: "Accounting",
      jobdesc: [
        "Managed all payroll processing and input into banks accounts to send our salary for 30 employees.",
        " Prepared reports and processed annual tax by companies and personal to paying tax on DJP online.",
        "Documented account information being neatly and arranged by date.",
        "Prepared, processed input journal income and expense using MYOB Accounting.",
        "Promptly and periodically followed up on unpaid pph23 into client/staff.",
      ],
    },
  ];

  let dataEducation = [
    {
      school: "Udayana University - Bachelor Degree, Economic of Accounting",
      since: "2014-2018",
    },
    { school: "SMA N 1 Gianyar", since: "2011-2014" },
    { school: "SMP N 1 Gianyar", since: "2008-2011" },
    { school: "SD N 1 Gianyar", since: "2002-2008" },
  ];

  return (
    <div className="container">
      <div className="back">
        <a className="btn btn-primary" href="/home">
          <i className="bi bi-backspace-fill"></i> Back
        </a>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-sm-12">
            <div className="d-flex justify-content-center my-2 mb-3">
              <h3>Skill & Expertise</h3>
            </div>
            <div className="col-sm-12">
              <div className="d-flex">
                <div className="text-justify">
                  {dataResume.map((resume, index) => {
                    return (
                      <ul key={index} className="list-style-none">
                        <li>{resume.title}</li>
                        <a href={resume.url} target="_blank" rel="noreferrer">
                          {resume.certificate}
                        </a>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-sm-12 col-lg-12">
            <div className="d-flex justify-content-center my-2 mb-3">
              <h3>Work Experience</h3>
            </div>
          </div>
          <div className="col-sm-12 col-lg-12">
            <div className="d-flex">
              <table className="table table-borderless">
                {dataWorks.map((work, index) => {
                  return (
                    <tbody>
                      <tr key={index}>
                        <td>
                          <div>
                            <div className="d-flex justify-content-center resume-title">
                              <h3 className="me-2">{work.title}</h3>
                              <span>{work.since}</span>
                            </div>

                            <ul>
                              {work["jobdesc"].map((item, index) => {
                                return (
                                  <li className="my-2 resume-p" key={index}>
                                    <p className="text-justify d-flex justify-content-start">
                                      {item}
                                    </p>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-sm-12">
            <div className="d-flex justify-content-center my-2 mb-3">
              <h3>Education</h3>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="d-flex justify-content-center">
              <table className="table table-borderless">
                {dataEducation.map((education) => {
                  return (
                    <tbody>
                      <tr key={education.id}>
                        <td
                          className="pt-3 align-top"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          <span>{education.since}</span>
                        </td>
                        <td className="ps-3">
                          <h4>{education.school}</h4>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
