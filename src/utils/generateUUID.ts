import { v4 as uuidv4 } from 'uuid'

import { config } from '../config'

export const generateUUID = () => {
  return config.generateUUID ? config.generateUUID() : uuidv4()
}
