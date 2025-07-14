import { defineField, defineType } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'カテゴリ',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'タイトル',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'スラッグ',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: '説明',
      type: 'text',
    }),
    defineField({
      name: 'color',
      title: 'カテゴリカラー',
      type: 'string',
      options: {
        list: [
          { title: 'オレンジ', value: 'orange' },
          { title: 'シアン', value: 'cyan' },
          { title: 'パープル', value: 'purple' },
          { title: 'グリーン', value: 'green' },
          { title: 'ピンク', value: 'pink' },
          { title: 'ブルー', value: 'blue' },
        ],
      },
      initialValue: 'orange',
    }),
    defineField({
      name: 'icon',
      title: 'アイコン（絵文字）',
      type: 'string',
      description: '絵文字1文字でカテゴリを表現してください',
      validation: (Rule) => Rule.max(2),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      icon: 'icon',
    },
    prepare(selection) {
      const { title, subtitle, icon } = selection
      return {
        title: `${icon || '📝'} ${title}`,
        subtitle,
      }
    },
  },
})