import { revalidatePath } from 'next/cache'
import prisma from '../../../../prisma/prismaClient'
import { TypologieRole } from '@/domain/Role'
import { getSessionSub } from '@/gateways/NextAuthAuthentificationGateway'
import { PrismaUtilisateurRepository } from '@/gateways/PrismaUtilisateurRepository'
import { ChangerMonRole } from '@/use-cases/commands/ChangerMonRole'
import { redirect } from 'next/navigation'

export async function POST(request: Request): Promise<Response> {
  const body = await request.json()
  const result = await new ChangerMonRole(new PrismaUtilisateurRepository(prisma.utilisateurRecord))
    .handle({
      nouveauRole: body['role'] as TypologieRole,
      uidUtilisateurCourant: await getSessionSub(),
    })

  // revalidatePath(new URL(request.headers.get('referer')!).pathname)
  revalidatePath('/accessibilite', 'layout')
  // redirect(request.headers.get('referer')!)

  return Response.json({revalidated: true, message: result})
}
