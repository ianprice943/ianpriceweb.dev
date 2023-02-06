export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName: string
          query: string
          variables: Json
          extensions: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          content: string | null
          created_at: string | null
          id: number
          published_at: string | null
          title: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          id?: number
          published_at?: string | null
          title?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          id?: number
          published_at?: string | null
          title?: string | null
        }
      }
      education: {
        Row: {
          created_at: string | null
          degree_earned: string | null
          education_time: string | null
          graduate_level: string | null
          id: number
          school_name: string | null
        }
        Insert: {
          created_at?: string | null
          degree_earned?: string | null
          education_time?: string | null
          graduate_level?: string | null
          id?: number
          school_name?: string | null
        }
        Update: {
          created_at?: string | null
          degree_earned?: string | null
          education_time?: string | null
          graduate_level?: string | null
          id?: number
          school_name?: string | null
        }
      }
      job_descriptions: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          sub_description_id: number | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          sub_description_id?: number | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          sub_description_id?: number | null
        }
      }
      jobs: {
        Row: {
          company_name: string | null
          created_at: string | null
          description: string | null
          id: number
          job_title: string | null
          sub_description_id: number | null
        }
        Insert: {
          company_name?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          job_title?: string | null
          sub_description_id?: number | null
        }
        Update: {
          company_name?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          job_title?: string | null
          sub_description_id?: number | null
        }
      }
      skills: {
        Row: {
          created_at: string | null
          id: number
          priority: number
          skill_level: string | null
          skill_name: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          priority?: number
          skill_level?: string | null
          skill_name?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          priority?: number
          skill_level?: string | null
          skill_name?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          created_at: string | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      extension: {
        Args: { name: string }
        Returns: string
      }
      filename: {
        Args: { name: string }
        Returns: string
      }
      foldername: {
        Args: { name: string }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: { size: number; bucket_id: string }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits: number
          levels: number
          offsets: number
          search: string
          sortcolumn: string
          sortorder: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}
