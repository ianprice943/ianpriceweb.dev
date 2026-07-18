import { createSupabaseClient } from "$lib/utils/supabaseClient";
import type { SupabaseClient } from "@supabase/supabase-js";

export const load = ( async () => {
    const supabaseClient = createSupabaseClient(event)
    const educationData = await getAllEducationData(supabaseClient);
    const skillsData = await getAllSkillsData(supabaseClient);
    const jobData = await getAllJobData(supabaseClient);
    return { jobData, educationData, skillsData }
});

const getAllEducationData = async (supabaseClient: SupabaseClient) => {
    const { data, error } = await supabaseClient
        .from('education')
        .select(`
            id,
            school_name,
            graduate_level,
            degree_earned,
            education_time
        `);
    if(!error) {
        return data;
    } else {
        console.log('error:', error);
        return { error: error };
    }
}

const getAllSkillsData = async (supabaseClient: SupabaseClient) => {
    const { data, error } = await supabaseClient
        .from('skills')
        .select(`
            id,
            skill_name,
            skill_level`
        )
        .order('priority', {ascending: true})
        .order('skill_name', {ascending: true});

    if(!error) {
        return data;
    } else {
        console.log('error:', error);
        return { error: error }
    }
}

const getAllJobData = async (supabaseClient: SupabaseClient) => {
    const { data, error } = await supabaseClient
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

    if(!error) {
        return data;
    } else {
        console.log('error:', error);
        return {error: error};
    }
}