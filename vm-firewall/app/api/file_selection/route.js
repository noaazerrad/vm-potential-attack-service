import fs from "fs";
import path from 'path';
import { NextResponse } from "next/server";
import {getFileData, getMachinesIds} from "@/app/api/attack_handler";


export async function GET(request) {
    const {searchParams} = new URL(request.url)
    const fileName =  searchParams.get('fileName')
    const file = getFileData(fileName)
    const vms = file['vms']
    const rules = file['fw_rules']
    const ids =  getMachinesIds(vms)
    const data = {ids: ids, rules: rules, vms: vms}

    return NextResponse.json({data: data, status: 200});
}

