import { neon } from "@neondatabase/serverless";

const sql = neon(`${process.env.DATABASE_URL}`); //creates a tagged template function (sql) that we can use to query our database.

export default sql;
