import { generateDateString, generateUUID } from '../utils'
import { Tag } from './Tag'

export class Style {
  static collection: string = 'styles'
  background: string | null
  bold: boolean
  boundary: { color: string | null; width: number; radius: number; style: string | null }
  cell: { width: number | null; height: number | null; colspan: number; rowspan: number }
  coordinate: { x: number; y: number }
  createdAt: string
  createdBy: string | null
  deletedAt: string | null
  filled: boolean
  highlight: string | null
  icon: string | null
  iconColor: string | null
  id: string
  key: string | null
  metadata: { [key: string]: string }
  scope: string | null
  tags: Tag[]
  updatedAt: string
  constructor(data?: Partial<Style>) {
    this.background = data?.background || null
    this.bold = data?.bold ?? false
    this.boundary = {
      color: data?.boundary?.color || null,
      width: data?.boundary?.width ?? 0,
      radius: data?.boundary?.radius ?? 0,
      style: data?.boundary?.style || null,
    }
    this.cell = {
      width: data?.cell?.width ?? null,
      height: data?.cell?.height ?? null,
      colspan: data?.cell?.colspan ?? 1,
      rowspan: data?.cell?.rowspan ?? 1,
    }
    this.coordinate = {
      x: data?.coordinate?.x ?? 0,
      y: data?.coordinate?.y ?? 0,
    }
    this.createdAt = data?.createdAt || generateDateString()
    this.createdBy = data?.createdBy || null
    this.deletedAt = data?.deletedAt || null
    this.filled = data?.filled ?? true
    this.highlight = data?.highlight || null
    this.icon = data?.icon || null
    this.iconColor = data?.iconColor || null
    this.id = data?.id || generateUUID()
    this.key = data?.key || null
    this.metadata = data?.metadata || {}
    this.scope = data?.scope || null
    this.tags = data?.tags || []
    this.updatedAt = data?.updatedAt || generateDateString()
  }
}
