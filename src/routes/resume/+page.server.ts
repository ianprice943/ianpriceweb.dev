import { supabase } from "$lib/utils/supabaseClient";

export const load = ( async () => {
    const educationData = await getAllEducationData();

    const skillsData = await getAllSkillsData();

    return {educationData, skillsData}
});

const getAllEducationData = async () => {
    const { data, error } = await supabase
        .from('education')
        .select(`
            school_name,
            graduate_level,
            degree_earned,
            education_time
        `);
    
    // console.log('education data', data);
    // console.log('error', error);

    return data;
}

const getAllSkillsData = async () => {
    const { data, error } = await supabase
        .from('skills')
        .select(`
            id,
            skill_name,
            skill_level`
        )
        .order('priority', {ascending: true})
        .order('skill_name', {ascending: true});
    
    // console.log('skills data', data);
    // console.log('error', error);

    return data;
}

const getAllResumeData = async () => {
    const { data, error } = await supabase
        .from('jobs')
        .select(`
            company_name,
            job_title,
            description,
            job_descriptions (
                description
            )
        `);
    
    console.log('resume data', data);
    console.log('error', error);

    return {...data};
}