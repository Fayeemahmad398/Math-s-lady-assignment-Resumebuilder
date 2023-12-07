import "../styles/rightPortion.css"
import { useSelector } from 'react-redux';
import PersonalInformation from "./PersonalInformation";
import ProfessionalSummarry from "./ProfessionalSummarry";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import Skills from "./Skills";


function RightPortion() {
    const store = useSelector((store) => {
        return store.reducer;
    });

    const {
        skills,
        summary,
        experience,
        education,
        PersonalData,
        sidebarData1
    } = store;

    return (
        <div className='rightProtion' >
            <div style={{ borderRight: "1px solid grey", borderLeft: "1px solid grey" }}>
                {
                    sidebarData1[0].ispen && <PersonalInformation />
                }
                {
                    sidebarData1[1].ispen && <ProfessionalSummarry />
                }
                {
                    sidebarData1[2].ispen && <ExperienceForm />
                }
                {
                    sidebarData1[3].ispen && < EducationForm />
                }
                {
                    sidebarData1[4].ispen && <Skills />
                }
            </div>

            <div className="right-box-grey">
                <div className='box-right' >
                    <div className="strip">
                        <div>
                            <strong>
                                dribbble.com
                            </strong>
                            <img src="data:image/png;base64,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" alt="" />
                        </div>
                        <div>
                            <strong>
                                instagram.com
                            </strong>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0ulLgVwqMHN6xO5p2ESXnTprip0UA2XemzyI-5XJy4jnS_QshpcF7LK9DDgyj0H7dp0&usqp=CAU" alt="" />
                        </div>
                        <div>
                            <strong>
                                linkedin.com
                            </strong>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUMZMX///8AYcQAWcFDf8nL3PIAWrzQ3vMAYcI0eclZjtAucslAgsz6/v3x9/sgbclOhM8AX8QAYsAAX70AV70AWMLm7vgAXb4sdsw5fsoRbsVmltK6z+iUt+AMZcGDrN3c6fNvnddiltWqwuPA0+r0+vyOrt+lweR9pduuyueUst9Lh81pldd1mtYdbcunxOXO4u7Z4fGRyVlRAAAEKUlEQVR4nO3ce1faMBzG8SblEpSCiUUuQrkMhsCc+v7f3Ko4KjW/yLY0WXOez9mf4Ml3vSW1NYoAAAAAAAAAAAAAAAAAAAAAAAAAAADgYiriIsqU72FURcapGnXHk5aMue+xVCCT6n56x960Z2OpMt8jsozz+Xve0Xqc+h6SXbKzYOeSfex7UBap+J591lThHI3awPxw5KGcVFUj0RayaRrI6UaUj8GTpfA9NivknApkvTC2YdwjC9lc+h6dBWpFB7JFCIXx1FDIRr6HZ0Fq2EkZewjgXNMnLhVH34a+x/fPeMdYOK3/gchvTIFsXf/ZKR+bC+u/DcW1cS/d1f84jFobU+H3ANYXadNU2PU9PAvkd0Ngz/forMgMhU/1P5Xm4h0ZmHQCOAzz68WEPNdsg9iE+ZH4QATeBTApPYqf9PvoKIh99E2qOxQ3jVvf47JHDT5fMl5GAQW+3tNvnF/4N3shwrhJc8Ljw/Q0Q13MJ4GcRc8IORjP99vZfpWlQe2gH3EZx7Gs/4IJAADqQ3DJX/+FM38vqHyKlA5Hhx+Pj49X43468P34CheEiz9Z+pTMlrvFaQ6YbNrblRpKf6vNbHRNKX2yT/kwSVd5XluzGGs//Ew9NfIGS/RYs3X2yUGzp7dpnMYu+zPql1mbp46f+XxeSCkVxrpt8+bmWJgJOTPeYP7m5QkWi4Wye0d94t3m3sNmtFao5OyLvle7zPnRaKlQCb6+IDBfXvddJ1oq5BH5WE7JXd/xwWilUKnJpYGM9a7dPk5mpfCWP18cmO+okdOtaKVwYHxm5ZP1wOWNPBuFneUfBTK2dHkzyEbhwfirco3NxOF+aqPw8rPMbzuHV34bhX+h4e6q6KnQ4ZM6ngrZyNlG9FXo7hfMvgp7zt7o8FXIDq52U2+FznbTKgovmgAsalq4mB0mQqjJYfvler98o6sWhevuYPh2C5jz4WD1ReMPR4soi4W91dmtXy7MK469o7mpvcLn8nRaSWPi9PzH/++FCXvW3LuXpoXxi6MllK1tqHtGLBMd0zccLYNtFR60W8T0wkqv7yTQVuGTfpfLuvRXkms3sxo7hQlx/yy7NayOO3Uq3MXExY148PFY6OZyYafwihqsXNJfGteoMCGXQoYfzxo1KmxSO2kkJvTLcXUq3BreraFnp3UqNLwT3aJPpnUqPNBjTV+CKDScFVv0t+pUaLiytegXq1BoCQoLKNRDYfVQWEChHgqrh8ICCvVQWD0UFlCoh8LqobCAQj0UVg+FBRTqobB6KCygUA+F1UNhAYV6KKweCgso1ENh9VBYQKEeCquHwkKAhe1SIf2UoaFwSP+/dB29FtTvUsbnH+Q3VxTDmxOq+zffskqJiOtFpZda+OV/M6uQKepLof0NWAAAAAAAAAAAAAAAAAAAAAAAAAAAgAr8Aj5RWY0PDbn2AAAAAElFTkSuQmCC" alt="" />
                        </div>
                    </div>
                    <div className="box-below-strip">

                        <div className='add-email-phone'>
                            <div className="e-p-a-box">
                                <div className="e-p-a">Email</div>
                                <strong>  {PersonalData.email ?? "charistiana9992@gmail.com"}</strong>
                            </div>
                            <div className="e-p-a-box">
                                <div className="e-p-a">Phone</div>
                                <strong>  {PersonalData.mobileNo ?? "009934523489"}</strong>
                            </div>
                            <div className="e-p-a-box">
                                <div className="e-p-a">Address</div>
                                <strong> {PersonalData.address ?? "123 main street, city New York, US"}</strong>
                            </div>
                        </div>
                        <div className='prof-name-img'>
                            <div><img src={PersonalData.profileImg ?? "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"} alt="" /></div>
                            <h3 className="" > {PersonalData.fullname ?? "Christina Sebastian"}</h3>
                            <div className="e-p-a"> {PersonalData.jobTitle ?? "UX Developer"}</div>

                            <div>
                                <div className="summarry-details">{summary}</div>
                            </div>
                        </div>
                        <hr />

                        <div className='experience'>
                            <div className="name-exp-skills" >Experience</div>
                            <div className="edu-expe-skill">
                                <div className="title-copName">
                                    <strong className="name-exp-skills"> {experience.jobTitle ?? "UX Designer"}</strong>
                                    <span className="e-p-a">{experience.companyName ?? "XYZ Company"} </span>
                                </div>

                                <div className="date"><strong className="date-period">{experience.from ?? "01-01-2022"} To {experience.to ?? "01-01-2022"}</strong></div>
                            </div>
                        </div>


                        <hr />

                        <div className='education'>
                            <div className="name-exp-skills" >Education</div>
                            <div className="edu-expe-skill">
                                <div className="title-copName">
                                    <strong className="name-exp-skills">  {education.degree ?? "Bechelor of Design"}</strong>
                                    <span className="e-p-a"> {education.college ?? "XYZ University"} </span>
                                </div>
                                <div className="cgpa">CGPA - <strong>{education.cgpa ?? "....."}</strong></div>
                            </div>
                        </div>
                        <hr />

                        <div className='skills'>
                            <div className="name-exp-skills" >Skills</div>
                            {
                                skills.length > 0 && <div className="skillsSets">
                                    {
                                        skills.map((skill) => {
                                            return <span>{skill}</span>

                                        })

                                    }
                                </div>
                            }
                            {
                                skills.length == 0 &&
                                <div className="skillsSets">

                                    <span>Figma</span>
                                    <span>Adobe XD</span>
                                    <span>Switch</span>
                                    <span>Adobe Photoshoph</span>
                                    <span>Adobe Illustrator</span>
                                    <span>Adobe Premier Pro</span>
                                    <span>Adobe Alter Effect</span>
                                </div>
                            }


                        </div>



                    </div>

                </div>
            </div>
        </div>
    )
}

export default RightPortion