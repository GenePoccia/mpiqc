import {defineField, defineType} from 'sanity'

export const meetTheTeam = defineType({
  name: 'meetTheTeam',
  title: 'Meet The Team',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'header',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        defineField({
          name: 'magazineContent',
          title: 'Magazine Content',
          type: 'magazine',
        }),
      ],
    }),
  ],
})
