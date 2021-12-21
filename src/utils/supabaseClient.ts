import { createClient } from "@supabase/supabase-js";
import Constants from "expo-constants";

const { url, anonKey } = Constants.manifest.extra.supabase;

export const supabase = createClient(url, anonKey);
