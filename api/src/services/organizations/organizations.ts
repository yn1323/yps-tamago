import type {
  QueryResolvers,
  MutationResolvers,
  OrganizationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const organizations: QueryResolvers['organizations'] = () => {
  return db.organization.findMany()
}

export const organization: QueryResolvers['organization'] = ({ id }) => {
  return db.organization.findUnique({
    where: { id },
  })
}

export const createOrganization: MutationResolvers['createOrganization'] = ({
  input,
}) => {
  return db.organization.create({
    data: input,
  })
}

export const updateOrganization: MutationResolvers['updateOrganization'] = ({
  id,
  input,
}) => {
  return db.organization.update({
    data: input,
    where: { id },
  })
}

export const deleteOrganization: MutationResolvers['deleteOrganization'] = ({
  id,
}) => {
  return db.organization.delete({
    where: { id },
  })
}

export const Organization: OrganizationResolvers = {
  shop: (_obj, { root }) =>
    db.organization.findUnique({ where: { id: root.id } }).shop(),
  temporaryClosed: (_obj, { root }) =>
    db.organization.findUnique({ where: { id: root.id } }).temporaryClosed(),
  announce: (_obj, { root }) =>
    db.organization.findUnique({ where: { id: root.id } }).announce(),
}
