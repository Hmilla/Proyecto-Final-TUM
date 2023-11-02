import { read } from "../services";
export async function findAdmin(field, value){
    const admins = await read("admins");
    return admins.find(
        (u) => u[field].toLowerCase() === value.toLowerCase()
    );
}

export async function findTeacher(field, value){
    const teachers = await read("teachers");
    return teachers.find(
        (u) => u[field].toLowerCase() === value.toLowerCase()
    );
}

export async function findStudent(field, value){
    const students = await read("students");
    return students.find(
        (u) => u[field].toLowerCase() === value.toLowerCase()
    );
}