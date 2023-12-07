import {
    noteExperience, updateSideData, Notesummarry, addSkills, savePersonalData, noteEducationInfo
} from "./actiontype"

export const updateSideDatafunc = (payload) => {
    return {
        type: updateSideData,
        payload: payload
    }

}
export const actionforProfessionalSummary = (payload) => {
    return {

        type: Notesummarry,
        payload: payload

    }

}

export const actionForAddSkills = (payload) => {
    return {

        type: addSkills,
        payload: payload

    }

}
export const actionForSavePersonalData = (payload) => {
    return {

        type: savePersonalData,
        payload: payload

    }

}

export const actionForSaveExperienceInfo = (payload) => {
    return {
        type: noteExperience,
        payload: payload
    }
};

export const actionForSaveEducationInfo = (payload) => {
    return {
        type: noteEducationInfo,
        payload: payload
    }

};











// export default actionCreator;