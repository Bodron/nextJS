'use server'

import { redirect } from 'next/dist/server/api-utils'
import { saveMeal } from './meals'
import { revalidatePath } from 'next/cache'

function InvalidText(text) {
  return !text || text.trim() === ''
}

export default async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  }
  if (
    InvalidText(meal.title) ||
    InvalidText(meal.summary) ||
    InvalidText(meal.instructions) ||
    InvalidText(meal.creator) ||
    InvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid input',
    }
  }
  await saveMeal(meal)
  revalidatePath('/meals')
  redirect(200, '/meals')
}
