// supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://nnporiyjnvacpxfkgbdc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ucG9yaXlqbnZhY3B4ZmtnYmRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE2MzI2ODAsImV4cCI6MTk4NzIwODY4MH0.Jq46ve80iAxlUz9oGeJsMjcMJweyUgKRKzdTvJBj5M4';

export const supabase = createClient(supabaseUrl, supabaseKey);