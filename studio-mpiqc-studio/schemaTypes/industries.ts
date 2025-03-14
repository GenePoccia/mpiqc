import {defineField, defineType} from 'sanity'

export const industries = defineType({
  name: 'industries',
  title: 'Industries',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'magazineContent',
      title: 'Industries Content',
      type: 'object',
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
        }),
        defineField({
          name: 'header',
          title: 'Header',
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
          name: 'subHeader',
          title: 'Subheader',
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
          name: 'paragraph',
          title: 'Paragraph',
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
    }),
    defineField({
      name: 'industriesList',
      title: 'Industries List Content',
      type: 'array',
      of: [
        defineField({
          name: 'item',
          title: 'List Item',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({
              name: 'header',
              title: 'Header',
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
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
})
