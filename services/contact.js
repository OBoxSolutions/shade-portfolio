import api from '@/api/admin'

export async function createContact(form) {
  const { data } = await api.post('/messages', form)
  return data
}
