import type { CollectionAfterChangeHook } from 'payload'

import { revalidatePath } from 'next/cache'

export const revalidateContactUs: CollectionAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info('Revalidating contact page')

  revalidatePath('/contact-us', 'page')

  return doc
}
