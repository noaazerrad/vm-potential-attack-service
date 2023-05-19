import * as fs from "fs";


function getFileData(fileName){
    const file = fs.readFileSync(`data/${fileName}`, 'utf8')
   return JSON.parse(file)
}

export function handleVmRequestDate(fileName, vmId){
    const dateSource = getFileData(fileName)


    const vms = dateSource['vms']
    const rules = dateSource['fw_rules']

    return vmAttackValidator(vmId, vms, rules)
}

function vmAttackValidator(vmId,vms, rules) {
    console.log(`checking vmId ${vmId}`)
    let vm_tags
    vms.filter(m => {
        if (m['vm_id'] === vmId) {
            vm_tags = m['tags']
        }
        return vm_tags
    })

    const rulesWithPotentialAttack = rules.find(
        r => vm_tags.includes(r['dest_tag'])
    )

    if (rulesWithPotentialAttack === undefined) {
        return 'no potential risk was found'
    }

        let vmIdsWithRisk = []
        if (typeof rulesWithPotentialAttack === 'object') {
            vmIdsWithRisk = findVmsWithAttackPotential(vms, rulesWithPotentialAttack['source_tag'])
        } else {
            rulesWithPotentialAttack.map((r) => {
                const sourceTag = r['source_tag']
                vmIdsWithRisk = findVmsWithAttackPotential(vms, sourceTag)
            })
        }

    return  vmIdsWithRisk.filter(Boolean)

}

function findVmsWithAttackPotential(vms, sourceTag) {
    return vms.map(m => {
        if (m['tags'].includes(sourceTag)) {
            console.log(`found machine with potential attack ${m['vm_id']}`)
            return m['vm_id']
        }
    })
}

// get the vm_id ---> check the the tags
// check if tags are present in fw_rules[dest_tag]
//    if empty --> return 'no potential attacks were found'
// else
// check for machines with fw_rules[source_tag] tag and return the ids