import type { CollectionEntry } from 'astro:content';

export type ArticleEntry = CollectionEntry<'artigos'>;

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);

export const sortArticles = (articles: ArticleEntry[]) =>
  [...articles].sort(
    (first, second) => second.data.publishedAt.getTime() - first.data.publishedAt.getTime(),
  );

export const slugify = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
