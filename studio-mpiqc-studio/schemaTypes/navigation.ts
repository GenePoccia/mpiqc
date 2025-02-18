import {defineField, defineType} from 'sanity'

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'navigationCategories',
      title: 'Navigation Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'category',
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
            defineField({
              name: 'enRoute',
              title: 'English Route',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'frRoute',
              title: 'French Route',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})
