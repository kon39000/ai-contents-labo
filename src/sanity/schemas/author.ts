import { defineField, defineType } from 'sanity'

export const author = defineType({
  name: 'author',
  title: '著者',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: '名前',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'スラッグ',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'プロフィール画像',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: '自己紹介',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'role',
      title: '役職',
      type: 'string',
      options: {
        list: [
          { title: '代表', value: 'representative' },
          { title: 'ライター', value: 'writer' },
          { title: 'コミュニティメンバー', value: 'member' },
          { title: 'ゲスト', value: 'guest' },
        ],
      },
    }),
    defineField({
      name: 'socialLinks',
      title: 'SNSリンク',
      type: 'object',
      fields: [
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
        {
          name: 'website',
          title: 'ウェブサイト',
          type: 'url',
        },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'role',
    },
  },
})