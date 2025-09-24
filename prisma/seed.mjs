import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main(){
  if(await prisma.item.count()===0){
    await prisma.item.createMany({ data:[
      { name:"Crysknife", level:12 },{ name:"Stillsuit", level:3 }
    ]});
  }
  if(await prisma.npc.count()===0){
    await prisma.npc.createMany({ data:[
      { name:"Fremen Scout", faction:"Fremen" },{ name:"Smuggler", faction:"Neutral" }
    ]});
  }
  if(await prisma.skill.count()===0){
    await prisma.skill.createMany({ data:[
      { name:"Sandwalk", power:5 },{ name:"Weirding Way", power:9 }
    ]});
  }
}
main().catch(e=>{ console.error(e); process.exit(1); })
 .finally(async()=>{ await prisma.$disconnect(); });
