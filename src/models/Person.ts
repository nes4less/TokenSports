import { generateDateString, generateUUID } from '../utils'
import { Image } from './Image'
import { Tag } from './Tag'

export class Person {
  static collection: string = 'persons'
  blurhash: string | null
  cashBalance: number
  claimToken: string | null
  claimedAt: string | null
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  dateOfBirth: string | null
  displayName: string | null
  email: string | null
  firstName: string | null
  id: string
  image: string | null
  images: Image[]
  lastActiveContext: string | null
  lastActiveRole: string | null
  lastName: string | null
  manualEntry: boolean
  metadata: { [key: string]: string }
  middleName: string | null
  notificationPrefs: { [key: string]: string }
  password: string | null
  phone: string | null
  platformBalance: number
  profileVisibility: { [key: string]: string }
  publicProfile: boolean
  stripeAccountId: string | null
  tags: Tag[]
  themeColor: string
  themeMode: 'dark' | 'light'
  updatedAt: string
  verified: boolean
  constructor(data?: Partial<Person>) {
    this.blurhash = data?.blurhash || null
    this.cashBalance = data?.cashBalance || 0
    this.claimToken = data?.claimToken || null
    this.claimedAt = data?.claimedAt || null
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.dateOfBirth = data?.dateOfBirth || null
    this.displayName = data?.displayName || null
    this.email = data?.email || null
    this.firstName = data?.firstName || null
    this.id = data?.id || generateUUID()
    this.image = data?.image || null
    this.images = data?.images || []
    this.lastActiveContext = data?.lastActiveContext || null
    this.lastActiveRole = data?.lastActiveRole || null
    this.lastName = data?.lastName || null
    this.manualEntry = !!data?.manualEntry
    this.metadata = data?.metadata || {}
    this.middleName = data?.middleName || null
    this.notificationPrefs = data?.notificationPrefs || {}
    this.password = data?.password || null
    this.phone = data?.phone || null
    this.platformBalance = data?.platformBalance || 0
    this.profileVisibility = data?.profileVisibility || {}
    this.publicProfile = !!data?.publicProfile
    this.stripeAccountId = data?.stripeAccountId || null
    this.tags = data?.tags || []
    this.themeColor = data?.themeColor || 'green'
    this.themeMode = data?.themeMode || 'dark'
    this.updatedAt = data?.updatedAt || generateDateString()
    this.verified = !!data?.verified
  }
}
