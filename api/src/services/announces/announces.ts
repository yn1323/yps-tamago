import type {
  QueryResolvers,
  MutationResolvers,
  AnnounceResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const announces: QueryResolvers['announces'] = () => {
  return db.announce.findMany()
}

export const announce: QueryResolvers['announce'] = ({ id }) => {
  return db.announce.findUnique({
    where: { id },
  })
}

export const createAnnounce: MutationResolvers['createAnnounce'] = ({
  input,
}) => {
  return db.announce.create({
    data: input,
  })
}

export const updateAnnounce: MutationResolvers['updateAnnounce'] = ({
  id,
  input,
}) => {
  return db.announce.update({
    data: input,
    where: { id },
  })
}

export const deleteAnnounce: MutationResolvers['deleteAnnounce'] = ({ id }) => {
  return db.announce.delete({
    where: { id },
  })
}

export const Announce: AnnounceResolvers = {
  organization: (_obj, { root }) =>
    db.announce.findUnique({ where: { id: root.id } }).organization(),
  shop: (_obj, { root }) =>
    db.announce.findUnique({ where: { id: root.id } }).shop(),
}
