import { Decimal } from "@prisma/client/runtime/library";
import { db } from "../_lib/prisma";

async function createAdditionalData(formData: FormData) {
    "use server";

    const date = formData.get("age") as unknown as number;
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    const gender = formData.get("gender") as string;
    const height = formData.get("height") as unknown as Decimal;
    const weight = formData.get("weight") as unknown as Decimal;

    await db.user.create({
        data: {
            age,
            gender,
            height,
            weight,
        }
    })
}

const createData = {
    createAdditionalData
}

export default createData;