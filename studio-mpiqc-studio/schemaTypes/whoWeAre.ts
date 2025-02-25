import {defineField, defineType} from 'sanity'

export const whoWeAre = defineType({
  name: 'whoWeAre',
  title: 'Who We Are',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'magazineContent',
      title: 'Magazine Content',
      type: 'magazine',
    }),
  ],
})
