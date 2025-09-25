import { neon } from "@neondatabase/serveless";

const sql = neon(`${process.env.DATABASE_URL}`);

export default sql;
