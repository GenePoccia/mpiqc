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
      name: 'logo',
      title: 'Header Logo',
      type: 'image',
      options: {
        hotspot: true,
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
      name: 'warrantyImage',
      title: 'Warranty Image',
      type: 'image',
      options: {
        hotspot: true,
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
            defineField({
              name: 'route',
              title: 'Route',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'isSpecialColor',
              title: 'Is Special Color',
              type: 'boolean',
              initialValue: false,
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'warrantyCallout',
      title: 'Warranty Callout',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'array',
          of: [
            {
              type: 'block',
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                  {title: 'Underline', value: 'underline'},
                ],
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    title: 'Link',
                    fields: [
                      {
                        name: 'href',
                        type: 'string',
                        title: 'URL',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        }),

        defineField({
          name: 'fr',
          title: 'French',
          type: 'array',
          of: [
            {
              type: 'block',
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                  {title: 'Underline', value: 'underline'},
                ],
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    title: 'Link',
                    fields: [
                      {
                        name: 'href',
                        type: 'string',
                        title: 'URL',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        }),
      ],
    }),
  ],
})
