import { supabase } from "$lib/utils/supabaseClient";

export const load = ( async () => {
    const educationData = await getAllEducationData();

    const skillsData = await getAllSkillsData();

    const jobData = await getAllJobData();

    return {jobData, educationData, skillsData}
});

const getAllEducationData = async () => {
    const { data, error } = await supabase
        .from('education')
        .select(`
            id,
            school_name,
            graduate_level,
            degree_earned,
            education_time
        `);

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

    return data;
}

const getAllJobData = async () => {
    const { data, error } = await supabase
        .from('jobs')
        .select(`
            id,
            company_name,
            job_title,
            description,
            job_descriptions (
                id,
                description
            ),
            start_time,
            end_time
        `)
        .order('id', {ascending: true});

    return data;
}