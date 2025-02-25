import {defineField, defineType} from 'sanity'

export const certifications = defineType({
  name: 'certifications',
  title: 'Certifications',
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
      name: 'description',
      title: 'Description',
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
    defineField({
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      of: [
        defineField({
          name: 'certificationLogo',
          title: 'Certification Logo',
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
      ],
    }),
  ],
})
