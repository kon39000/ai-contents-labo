import { defineField, defineType } from 'sanity'

export const tweet = defineType({
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    defineField({
      name: 'tweetId',
      title: 'Tweet ID',
      type: 'string',
      description: 'Unique Twitter/X post ID',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Tweet Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorId',
      title: 'Author ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorUsername',
      title: 'Author Username',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorProfileImageUrl',
      title: 'Author Profile Image URL',
      type: 'url',
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publicMetrics',
      title: 'Public Metrics',
      type: 'object',
      fields: [
        defineField({
          name: 'retweetCount',
          title: 'Retweet Count',
          type: 'number',
        }),
        defineField({
          name: 'likeCount',
          title: 'Like Count',
          type: 'number',
        }),
        defineField({
          name: 'replyCount',
          title: 'Reply Count',
          type: 'number',
        }),
        defineField({
          name: 'quoteCount',
          title: 'Quote Count',
          type: 'number',
        }),
      ],
    }),
    defineField({
      name: 'hashtags',
      title: 'Hashtags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      description: 'Whether this tweet is approved for public display',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'approvedAt',
      title: 'Approved At',
      type: 'datetime',
      description: 'When this tweet was approved',
      hidden: ({ document }) => !document?.approved,
    }),
    defineField({
      name: 'approvedBy',
      title: 'Approved By',
      type: 'string',
      description: 'Who approved this tweet',
      hidden: ({ document }) => !document?.approved,
    }),
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'authorName',
      media: 'authorProfileImageUrl',
      approved: 'approved',
    },
    prepare(selection) {
      const { title, subtitle, approved } = selection
      return {
        title: title ? title.substring(0, 50) + '...' : 'No text',
        subtitle: `${subtitle} ${approved ? '✅' : '❌'}`,
      }
    },
  },
})