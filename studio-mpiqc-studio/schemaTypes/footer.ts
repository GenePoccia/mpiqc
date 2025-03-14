import {defineField, defineType} from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      type: 'string',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'array',
      of: [
        defineField({
          name: 'social',
          title: 'Social Media Link',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({
              name: 'link',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Information',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'string',
        }),
        defineField({
          name: 'fr',
          title: 'French',
          type: 'string',
        }),
      ],
    }),
  ],
})
