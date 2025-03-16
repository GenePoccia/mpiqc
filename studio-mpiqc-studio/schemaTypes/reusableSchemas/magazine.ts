import {defineField, defineType} from 'sanity'

export const magazine = defineType({
  name: 'magazine',
  title: 'Magazine Component',
  type: 'object', // Keep as object for embedding
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
        }),
        defineField({
          name: 'fr',
          title: 'French',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'subHeader',
      title: 'subHeader',
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
    defineField({
      name: 'paragraph',
      title: 'Paragraph',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'text',
        }),
        defineField({
          name: 'fr',
          title: 'French',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'paragraphTwo',
      title: 'Paragraph',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'array',
          of: [{type: 'block'}], // Portable Text for rich content
        }),
        defineField({
          name: 'fr',
          title: 'French',
          type: 'array',
          of: [{type: 'block'}], // Portable Text for rich content
        }),
      ],
    }),
  ],
})
