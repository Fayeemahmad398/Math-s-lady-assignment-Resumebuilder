import { Notesummarry, addSkills, noteEducationInfo, noteExperience, savePersonalData } from "../actions/actiontype"
import { updateSideData } from "../actions/actiontype";

const initialState = {
    skills: [],
    summary: "Design digital interface and user experience. That are intuitive visually appealing and improve  user satisfaction and engagement. ",
    experience: {},
    education: {},
    sidebarData1: [
        { info: "Personal Information", ispen: false, id: "0" },
        { info: "Professional Summarry", id: "1", ispen: false },
        { info: "Experience", ispen: false, id: "2" },
        { info: "Education", ispen: false, id: "3" },
        { info: "Skills", ispen: false, id: "4" },

    ],
    PersonalData: {}
}





export default function reducer(state = initialState, action) {
    switch (action.type) {
        case updateSideData:
            return {
                ...state, sidebarData1: updateInfo(state.sidebarData1, action.payload)
            }
        case Notesummarry:
            return {
                ...state, summary: action.payload
            }
        case addSkills:
            // const SkillSets = state.skills;
            // SkillSets.push(action.payload);

            return {
                ...state,
                skills: [...state.skills, action.payload]
            }
        case savePersonalData:
            return {
                ...state, PersonalData: action.payload
            }
        case noteExperience:
            return {
                ...state,
                experience: action.payload

            }
        case noteEducationInfo:
            return {
                ...state,
                education: action.payload
            }
        default:
            return state
    }

}


function updateInfo(sidebarData, obj) {
    let updateData = sidebarData.map((obj1) => {

        if (obj.id == obj1.id) {
            return { ...obj1, ispen: obj1.ispen ? false : true }

        } else {
            return { ...obj1, ispen: false }

        }

    });
    return updateData

}
