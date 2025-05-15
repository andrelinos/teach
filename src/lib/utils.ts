import type { ClassValue } from 'clsx'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sanitizeLink(link: string) {
  if (!link) return ''

  const sanitizedLink = link
    .normalize('NFD') // Decompõe os caracteres acentuados
    .replace(/\p{Diacritic}/gu, '') // Remove os diacríticos (acentos)
    .replace(/\s/g, '') // Remove espaços
    .replace(/[^a-zA-Z0-9]/g, '') // Remove caracteres especiais restantes
    .toLowerCase() // Converte para minúsculas

  return sanitizedLink
}

export const normalizeUrl = (url: string): string => {
  const trimmedUrl = url.trim()

  if (trimmedUrl.startsWith('https://')) {
    return trimmedUrl
  }

  if (trimmedUrl.startsWith('http://')) {
    return trimmedUrl.replace('http://', 'https://')
  }

  return `https://${trimmedUrl}`
}
