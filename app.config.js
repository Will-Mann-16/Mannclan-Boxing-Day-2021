import "dotenv/config";

export default {
  name: "Mannclan Boxing Day 2021",
  version: "1.0.0",
  extra: {
    supabase: {
      url: process.env.SUPABASE_URL,
      anonKey: process.env.SUPABASE_ANON_KEY,
    },
  },
};
