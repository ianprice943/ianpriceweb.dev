declare module 'ResumeTypes' {
    //TODO: Update this for Sveltekit
    //seems hacky, but getStaticProps is assigning the json from resumeData a key called 'data'
    export interface ResumeData {
        data: {
            experience: JobData[],
            education: EducationData[],
            skills: string[]
        }
    }
    
    export interface JobData {
        companyName: string,
        companyTitle: string,
        experienceTime: string,
        responsibilities: string[]
    }
    
    export interface EducationData {
        schoolName: string,
        graduateLevel: string,
        degreeEarned: string,
        educationTime: string
    }
}
