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

export interface ResumeCard {
    job: JobData
}

export interface SkillsData {
    id: number,
    skill_name: string,
    skill_level: SkillLevel
    // index: number
}

export enum SkillLevel {
    None = "None",
    Novice = "Novice",
    Intermediate = "Intermediate",
    Advanced = "Advanced",
    Expert = "Expert"
}

export interface EducationData {
    school_name: string,
    graduate_level: string,
    degree_earned: string,
    education_time: string
}

export interface EducationCard {
    school: EducationData
}

export interface CombinedResumePageData {
    resumeData: ResumeData[],
    educationData: EducationData[],
    skillsData: SkillsData[]
}