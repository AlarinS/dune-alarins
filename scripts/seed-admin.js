const { PrismaClient } = require("@prisma/client")
const { scryptSync, randomBytes } = require("crypto")
const prisma = new PrismaClient()

function hashPassword(pw) {
  const salt = randomBytes(16).toString("hex")
  const hash = scryptSync(String(pw), salt, 64).toString("hex")
  return `scrypt$1$${salt}$${hash}`
}

async function main() {
  const username = process.env.ADMIN_USERNAME || "alarins"
  const pass = process.env.ADMIN_PASSWORD || "F8lwgprjf7"
  const passwordHash = hashPassword(pass)

  const user = await prisma.user.upsert({
    where: { username },
    update: { passwordHash, role: "ADMIN", name: username },
    create: { username, name: username, role: "ADMIN", passwordHash }
  })
  console.log("OK user:", user.username)
}
main().then(()=>process.exit(0)).catch(e=>{console.error(e);process.exit(1)})
