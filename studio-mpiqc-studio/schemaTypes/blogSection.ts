import {defineField, defineType} from 'sanity'

export const blogSection = defineType({
  name: 'blog',
  title: 'Blog Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'object',
      name: 'header',
      title: 'Header',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'fr',
          title: 'French',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
})
