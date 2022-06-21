import { writable } from 'svelte/store'

export const activities = writable([
  {
    title: 'Get a peach milkshake',
    location: ['1529 N Parham Rd, Henrico, VA 23229'],
    dateAdded: '2022-06-20',
    targetDate: null,
    categories: [],
    tags: [],
  },
  {
    title: 'Go on a Mountain Dew pilgrimage',
    location: ['various'],
    dateAdded: '2022-06-20',
    targetDate: null,
    categories: [],
    tags: [],
  },
  {
    title: 'Hang out at the VMFA lawn',
    location: ['Virginia Museum of Fine Arts'],
    dateAdded: '2022-06-20',
    targetDate: '2022-06-20',
    categories: [],
    tags: [],
  },
])
