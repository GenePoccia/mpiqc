import {defineField, defineType} from 'sanity'

export const whyUs = defineType({
  name: 'whyUs',
  title: 'Why Us',
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
