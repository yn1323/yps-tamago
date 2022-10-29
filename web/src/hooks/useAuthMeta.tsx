import { useAuth } from '@redwoodjs/auth'

// NOTE: 追加すること
const USER_METADATA = {
  email: '',
  id: '',
  phone: '',
  user_metadata: {
    avatar_url: '',
    email: '',
    name: '',
  },
}
type UserMetaData = typeof USER_METADATA

export const useAuthMeta = () => {
  const { userMetadata } = useAuth()
  const metaData: UserMetaData = userMetadata ?? USER_METADATA
  return metaData
}
