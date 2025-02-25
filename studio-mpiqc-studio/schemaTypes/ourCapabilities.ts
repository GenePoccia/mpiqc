import {defineField, defineType} from 'sanity'

export const ourCapabilities = defineType({
  name: 'ourCapabilities',
  title: 'Our Capabilities',
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
    defineField({
      type: 'object',
      name: 'subHeader',
      title: 'Subheader',
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
    defineField({
      type: 'array',
      name: 'services',
      title: 'Services',
      of: [
        {
          type: 'object',
          name: 'serviceItem',
          title: 'Service Item',
          fields: [
            defineField({
              name: 'service',
              title: 'Service Name',
              type: 'object',
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
            defineField({
              name: 'description',
              title: 'Description',
              type: 'object',
              fields: [
                defineField({
                  name: 'en',
                  title: 'English',
                  type: 'text',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'fr',
                  title: 'French',
                  type: 'text',
                  validation: (rule) => rule.required(),
                }),
              ],
            }),
          ],
        },
      ],
    }),
  ],
})
