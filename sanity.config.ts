import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemas'

export default defineConfig({
  name: 'ai-contents-labo',
  title: 'AI Contents Labo CMS',
  
  projectId: 'lao1x3f8',
  dataset: 'production',
  
  plugins: [
    deskTool(),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
  
  document: {
    productionUrl: async (prev, context) => {
      const { document } = context
      if (document._type === 'blogPost') {
        return `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${document.slug?.current}`
      }
      return prev
    },
  },
})