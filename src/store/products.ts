import axios from 'axios'
import { selector } from 'recoil'

import { Product } from '../model/Props'

const FAKE_API_URL = 'https://fakestoreapi.com/products/'
// const FAKE_API_URL = '/src/test.json'

export const productsList = selector<Product[]>({
  key: 'productsList',
  get: async () => {
    try {
      const { data } = await axios(FAKE_API_URL)
      return data
    } catch (e) {
      console.log(`Error: ${e}`)
    }
  },
})
