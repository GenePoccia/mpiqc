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
      name: 'logo', // Image field at the root level
      title: 'Header Logo',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping in the Sanity Studio
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
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
          ],
        },
      ],
    }),
  ],
})
