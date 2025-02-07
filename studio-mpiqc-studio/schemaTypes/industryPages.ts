import {defineField, defineType} from 'sanity'

export const industryPages = defineType({
  name: 'industryPages',
  title: 'Industry Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
