import {NextResponse} from "next/server";
import {vmAttackValidator} from "@/app/api/attack_handler";


export async function POST(request){
    const body = await request.json()
    const {searchParams} = new URL(request.url)
    const id =  searchParams.get('vm_id')

   const machinesWithRisk =  vmAttackValidator(id, body.vms, body.rules)

    return NextResponse.json({ message: "Hello World" , ids: machinesWithRisk});

}