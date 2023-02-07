//TODO: Update this for Sveltekit
//seems hacky, but getStaticProps is assigning the json from resumeData a key called 'data'

export interface JobData {
    id: number,
    company_name: string,
    job_title: string,
    start_time: string,
    end_time: string,
    description: string,
    job_descriptions: JobDescription[]
}

interface JobDescription {
    id: number,
    description: string
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
    id: number,
    school_name: string,
    graduate_level: string,
    degree_earned: string,
    education_time: string
}

export interface CombinedResumePageData {
    jobData: JobData[],
    educationData: EducationData[],
    skillsData: SkillsData[]
}