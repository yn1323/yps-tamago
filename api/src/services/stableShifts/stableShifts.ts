import type {
  QueryResolvers,
  MutationResolvers,
  StableShiftResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const stableShifts: QueryResolvers['stableShifts'] = () => {
  return db.stableShift.findMany()
}

export const stableShift: QueryResolvers['stableShift'] = ({ id }) => {
  return db.stableShift.findUnique({
    where: { id },
  })
}

export const createStableShift: MutationResolvers['createStableShift'] = ({
  input,
}) => {
  return db.stableShift.create({
    data: input,
  })
}

export const updateStableShift: MutationResolvers['updateStableShift'] = ({
  id,
  input,
}) => {
  return db.stableShift.update({
    data: input,
    where: { id },
  })
}

export const deleteStableShift: MutationResolvers['deleteStableShift'] = ({
  id,
}) => {
  return db.stableShift.delete({
    where: { id },
  })
}

export const StableShift: StableShiftResolvers = {
  shop: (_obj, { root }) =>
    db.stableShift.findUnique({ where: { id: root.id } }).shop(),
  user: (_obj, { root }) =>
    db.stableShift.findUnique({ where: { id: root.id } }).user(),
}
